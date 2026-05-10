import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import type { Root, Element, Node } from 'hast'

// Rewrites <p><img></p><p><em>caption</em></p> → <figure><img><figcaption>caption</figcaption></figure>
function rehypeFigureCaption() {
  return (tree: Root) => {
    const isImgParagraph = (node: Node): Element | null => {
      if (node.type !== 'element' || (node as Element).tagName !== 'p') return null
      const real = (node as Element).children.filter(
        (c) => c.type !== 'text' || (c as any).value.trim()
      )
      if (real.length === 1 && real[0].type === 'element' && (real[0] as Element).tagName === 'img') {
        return real[0] as Element
      }
      return null
    }

    const isCaptionParagraph = (node: Node): boolean => {
      if (!node || node.type !== 'element' || (node as Element).tagName !== 'p') return false
      const real = (node as Element).children.filter(
        (c) => c.type !== 'text' || (c as any).value.trim()
      )
      return real.length === 1 && real[0].type === 'element' && (real[0] as Element).tagName === 'em'
    }

    const isWhitespace = (node: Node) =>
      node.type === 'text' && !(node as any).value.trim()

    const process = (children: Node[]): Node[] => {
      const result: Node[] = []
      let i = 0
      while (i < children.length) {
        const img = isImgParagraph(children[i])
        // Skip over any whitespace-only text nodes to find the next real sibling
        let j = i + 1
        while (j < children.length && isWhitespace(children[j])) j++
        const nextReal = children[j]

        if (img && nextReal && isCaptionParagraph(nextReal)) {
          const captionEl = (nextReal as Element).children.find(
            (c) => c.type === 'element' && (c as Element).tagName === 'em'
          ) as Element
          result.push({
            type: 'element',
            tagName: 'figure',
            properties: {},
            children: [
              img,
              { type: 'element', tagName: 'figcaption', properties: {}, children: captionEl.children },
            ],
          } as Element)
          i = j + 1
        } else {
          const node = children[i]
          if (node.type === 'element') {
            (node as Element).children = process((node as Element).children as unknown as Node[]) as any
          }
          result.push(node)
          i++
        }
      }
      return result
    }

    tree.children = process(tree.children) as any
  }
}

const postsDir = path.join(process.cwd(), 'src/content/blog')

export type PostMeta = {
  slug: string
  title: string
  date: string
  description: string
  heroImage: string
}

export type Post = PostMeta & {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const { data } = matter(fs.readFileSync(path.join(postsDir, fileName), 'utf8'))
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string,
        heroImage: data.heroImage as string,
      }
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getNextPost(slug: string): PostMeta | null {
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.slug === slug)
  if (index === -1) return null
  return posts[(index + 1) % posts.length]
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  const processed = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFigureCaption)
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(rehypeStringify)
    .process(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    heroImage: data.heroImage as string,
    contentHtml: processed.toString(),
  }
}

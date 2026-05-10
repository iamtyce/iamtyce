import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

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
  const processed = await remark().use(remarkHtml).process(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    heroImage: data.heroImage as string,
    contentHtml: processed.toString(),
  }
}

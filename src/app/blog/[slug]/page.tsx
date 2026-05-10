import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, getNextPost } from '../../../lib/posts'
import styles from '../../../styles/blog.module.scss'

const SITE_URL = 'https://iamtyce.com'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${slug}`
  const image = `${SITE_URL}${post.heroImage}`

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: ['Tyce Clee'],
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image],
      creator: '@iamtyce',
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const nextPost = getNextPost(slug)

  return (
    <main className={styles.container}>
      <Link href="/" className={styles.back}>← Back to Home</Link>

      <p className={styles.post__date}>{post.date}</p>
      <h1 className={styles.post__title}>{post.title}</h1>

      <img
        src={post.heroImage}
        alt={post.title}
        className={styles.post__hero}
      />

      <div
        className={styles.post__body}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {nextPost && (
        <div className={styles.next}>
          <p className={styles.next__label}>Read next</p>
          <Link href={`/blog/${nextPost.slug}`} className={styles.next__link}>
            {nextPost.title}
          </Link>
          <p className={styles.next__description}>{nextPost.description}</p>
        </div>
      )}
    </main>
  )
}

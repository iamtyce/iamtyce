import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import styles from '../../styles/blog.module.scss'

export const metadata = {
  title: 'Blog | Tyce Clee',
  description: "Read Tyce Clee's blog posts on engineering leadership, design systems, and collaboration.",
  openGraph: {
    title: 'Blog | Tyce Clee',
    description: "Read Tyce Clee's blog posts on engineering leadership, design systems, and collaboration.",
    url: 'https://iamtyce.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Blog | Tyce Clee',
    description: "Read Tyce Clee's blog posts on engineering leadership, design systems, and collaboration.",
    creator: '@iamtyce',
  },
  alternates: {
    canonical: 'https://iamtyce.com/blog',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className={styles.container}>
      <h1>Blog</h1>
      <p className={styles.intro}>
        Stories, learnings and reflections from engineering leadership, design systems, and cross-disciplinary collaboration.
      </p>
      <div className={styles.listing}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <p className={styles.card__date}>{post.date}</p>
            <h2 className={styles.card__title}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className={styles.card__description}>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

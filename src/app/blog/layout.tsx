import SiteNav from '../../components/site-nav'
import SiteFooter from '../../components/site-footer'
import styles from '../../styles/styles.module.scss'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      {children}
      <div className={styles.container}>
        <SiteFooter />
      </div>
    </>
  )
}

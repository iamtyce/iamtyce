import Link from 'next/link'
import styles from '../styles/styles.module.scss'

export default function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <h2 className={styles.footer__title}>
        <Link href="mailto:tyce@iamtyce.com">Reach out</Link> to say hi or talk about design systems.
      </h2>
      <ul className={styles.footer__list}>
        <li className={styles.footer__list__item}>
          <Link href="https://www.linkedin.com/in/iamtyce/" target="_blank" className={styles.footer__list__link}>LinkedIn</Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link href="https://open.spotify.com/user/iamtyce?si=4c4de1ad9f064d65" target="_blank" className={styles.footer__list__link}>Spotify</Link>
        </li>
        <li className={styles.footer__list__item}>
          <Link href="mailto:tyce@iamtyce.com" className={styles.footer__list__link}>Email</Link>
        </li>
      </ul>
    </footer>
  )
}

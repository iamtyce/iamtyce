import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/styles.module.scss'
import IconLinkedIn from '../images/LinkedIn.png'
import IconEmail from '../images/Email.png'

export default function SiteNav() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.nav__title}>
        <Link href="/">Tyce Clee</Link>
      </h2>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list__item}>
          <Link href="/#articles" className={styles.nav__list__link}>Articles</Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="/#podcasts" className={styles.nav__list__link}>Podcasts</Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="/#playlists" className={styles.nav__list__link}>Playlists</Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="/#contact" className={styles.nav__list__link}>Contact</Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="https://www.linkedin.com/in/iamtyce/" target="_blank" className={styles.nav__list__icon}>
            <Image src={IconLinkedIn} height={24} width={24} alt="LinkedIn" />
          </Link>
        </li>
        <li className={styles.nav__list__item}>
          <Link href="mailto:tyce@iamtyce.com" className={styles.nav__list__icon}>
            <Image src={IconEmail} height={24} width={24} alt="Email" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

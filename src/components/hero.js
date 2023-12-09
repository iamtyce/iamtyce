import Image from 'next/image'
import styles from '../../styles/styles.module.scss'

export default function Hero({ imageSrc, imageAlt, imageDetails, headline, byline, subline, ...props }) {
  return (
    <article className={styles.hero}>
      <div className={styles.hero__media}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={585}
          className={styles.hero__image}
          placeholder="empty"
          priority={true}
          {...props}
        />
        <small className={styles.hero__media__details}>{imageDetails}</small>
      </div>
      <h2 className={styles.hero__headline}>{headline}</h2>
      <p className={styles.hero__byline}>{byline}</p>
      <p className={styles.hero__subline}>{subline}</p>
    </article>
  )
}
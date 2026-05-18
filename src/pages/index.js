import { Domine } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Head from "next/head";
import Iframe from 'react-iframe'
import '../styles/global.css'
import styles from '../styles/styles.module.scss'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import mainHeroImage from '../images/tyce-2023.png';
import secondaryHeroImage from '../images/tyce-1993.png';
import IconLinkedIn from '../images/LinkedIn.png';
import IconEmail from '../images/Email.png';
import { getAllPosts } from '../lib/posts'

const domine = Domine({ subsets: ['latin'] })

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}

export default function MyApp({ posts }) {
  return (
    <>
      <Head>
        <title>Tyce Clee | Engineering Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={domine.className} id="home">
        <Navbar className={styles.nav}>
          <h2 className={styles.nav__title}><Link href="#home">Tyce Clee</Link></h2>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list__item}>
              <Link href="#articles" className={styles.nav__list__link}>Articles</Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link href="#apps" className={styles.nav__list__link}>Apps</Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link href="#podcasts" className={styles.nav__list__link}>Podcasts</Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link href="#playlists" className={styles.nav__list__link}>Playlists</Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link href="#contact" className={styles.nav__list__link}>Contact</Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link href="https://www.linkedin.com/in/iamtyce/" target="_blank" className={styles.nav__list__icon}>
                <Image src={IconLinkedIn} height="24" width="24" alt="LinkedIn" />
              </Link>
            </li>
            <li className={styles.nav__list__item}>
              <Link href="mailto:tyce@iamtyce.com" className={styles.nav__list__icon}>
              <Image src={IconEmail} height="24" width="24" alt="Email" />
              </Link>
            </li>
          </ul>
        </Navbar>
        <main className={styles.container}>
          <section>
            <h1 className={styles.intro}>Hi, I’m Tyce — an engineering leader focused on building exceptionally performant and motivated teams with high levels of trust and creativity.</h1>
            <Hero
              imageSrc={mainHeroImage}
              imageAlt="Black and white photo of engineering manager Tyce Clee smiling"
              imageDetails="Melbourne, Australia — October 2023"
              headline="As a technical leader I’ve spent the last decade cultivating and building teams around design systems, artist and podcasting tools. I’ve paid particular attention to balancing strong delivery practices with cultural needs to create teams that love working on difficult problems and delivering ahead of schedule."
              byline="Thanks to relationships I form early and often with design and product partners I’ve built a reputation as someone that’s easy to work with and pushes for innovation and outside of the box thinking."
              subline="I co-founded and lead the Veterans@Spotify diversity group to help foster an inclusive community for veterans and their supporters to enable increased education and understanding of the value of veterans in the workplace."
            />

            <div className={styles.twoup} id="articles">
              <div className={styles.twoup__column}><h3 className={styles.twoup__title}>Articles</h3></div>
              <div className={styles.twoup__column}>
                {posts.map((post) => (
                  <p key={post.slug} className={styles.twoup__content}>
                    <Link href={`/blog/${post.slug}`} className={styles.twoup__external_link}>{post.title}</Link>
                  </p>
                ))}
              </div>
            </div>

            <Hero
              imageSrc={secondaryHeroImage}
              imageAlt="Black and white photo of engineering manager Tyce Clee as a young boy"
              imageDetails="Yeppoon, Australia — circa 1993"
              headline="Today I’m with Spotify based in Australia leading an engineering team building design systems and critical internal tooling to support Spotify Ads Manager."
            />

            <div className={styles.twoup} id="apps">
              <div className={styles.twoup__column}><h3 className={styles.twoup__title}>Apps</h3></div>
              <div className={styles.twoup__column}>
                <div className={styles.twoup__app_card}>
                  <Link href="https://redlinehq.dev" target="_blank"><Image src="/images/redline.svg" width={460} height={200} alt="Redline" className={styles.twoup__app_card__image} /></Link>
                  <p className={styles.twoup__app__description}>A performance review generator for engineers and engineering managers with guided questions that produce polished, first-person self-review drafts.</p>
                </div>
                <div className={styles.twoup__app_card}>
                  <Link href="https://www.shoutmate.app" target="_blank"><Image src="/images/shoutmate.svg" width={460} height={200} alt="ShoutMate" className={styles.twoup__app_card__image} /></Link>
                  <p className={styles.twoup__app__description}>A browser-based expense splitter for group trips. Track shared costs and settle debts with no account required — all data stays on your device.</p>
                </div>
              </div>
            </div>

            <div className={styles.twoup} id="podcasts">
              <div className={styles.twoup__column}><h3 className={styles.twoup__title}>Podcasts</h3></div>
              <div className={styles.twoup__column}>
                <Iframe src="https://open.spotify.com/embed/episode/49cqwCPFyFRTuLdBaY5V7h?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                <p className={styles.twoup__content_muted}>Smith Schwartz, Product Design Manager, and Tyce Clee, Engineering Manager, walk us through the redesign of Spotify Ads Manager—why it was needed, how they used design systems to make it happen, and what it took to get buy-in.</p>

                <Iframe src="https://open.spotify.com/embed/episode/3NkdXAdx5ZUXL0vAqImtey?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
                <p className={styles.twoup__content_muted}>Smith Schwartz, Product Design Manager &amp; Tyce Clee, Engineering Manager at Spotify discuss their design system, Encore</p>

                <Iframe src="https://open.spotify.com/embed/episode/55SbkMbwh1v1jNJTJXnhfH?utm_source=generator&theme=0&t=0" width="100%" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
                <p className={styles.twoup__content_muted}>Each week, a game genie (Sam) a game weenie (Edwin) and a game junkie (Tyce) challenge each other to play and review a new mobile game.</p>
              </div>
            </div>

            <div className={styles.twoup} id="playlists">
              <div className={styles.twoup__column}><h3 className={styles.twoup__title}>Playlists</h3></div>
              <div className={styles.twoup__column}>
              <Iframe src="https://open.spotify.com/embed/playlist/2h69GqMo8Gg20Ogv7QvPj0?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
                <p className={styles.twoup__content_muted}>新しいたわごと curated by Josh Mateo &amp; Tyce Clee</p>
                <Iframe src="https://open.spotify.com/embed/playlist/1iRo9PjjloCQyLfB6sEx3e?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
                <p className={styles.twoup__content_muted}>Zoned 34 curated by Engineering Managers Shaun Bent &amp; Tyce Clee</p>
                <Iframe src="https://open.spotify.com/embed/playlist/2vSnrxq1ryXu0ll1DwOILA?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; picture-in-picture" loading="lazy" />
                <p className={styles.twoup__content_muted}>Zoned 7 curated by Engineering Managers Shaun Bent &amp; Tyce Clee</p>
              </div>
            </div>

            <footer className={styles.footer} id="contact">
              <h2 className={styles.footer__title}><Link href="mailto:tyce@iamtyce.com">Reach out</Link> to say hi or talk about design systems.</h2>
              <ul className={styles.footer__list}>
                <li className={styles.footer__list__item}><Link href="https://www.linkedin.com/in/iamtyce/" target="_blank" className={styles.footer__list__link}>LinkedIn</Link></li>
                <li className={styles.footer__list__item}><Link href="https://open.spotify.com/user/iamtyce?si=4c4de1ad9f064d65" target="_blank" className={styles.footer__list__link}>Spotify</Link></li>
                <li className={styles.footer__list__item}><Link href="mailto:tyce@iamtyce.com" className={styles.footer__list__link}>Email</Link></li>
              </ul>
            </footer>

          </section>
        </main>
      </div>
    </>
  )
}
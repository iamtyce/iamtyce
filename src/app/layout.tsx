import { Domine } from 'next/font/google'
import '../styles/global.css'

const domine = Domine({ subsets: ['latin'] })

export const metadata = {
  description: 'Technical leader based in Melbourne, Australia that has spent the last decade cultivating and building teams around design systems, artist and podcasting tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={domine.className}>{children}</body>
    </html>
  )
}

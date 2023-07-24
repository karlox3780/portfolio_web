import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carlos Bustos Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="main-page-container border border-black">
          <h1 className="main-page-title">Carlos Bustos</h1>
          <p className="main-page-description">Front End Developer</p>
          <ul className="main-page-navbar">
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/projects">Proyectos</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </main>

        <div className="main-page-container-content">
          {children}
        </div>

      </body>
    </html>
  )
}
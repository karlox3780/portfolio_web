'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carlos Bustos Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentRoute = usePathname()

  const activeStyle = 'navbar-active'
  const nonActiveStyle = 'navbar-nonactive'

  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="main-page-container border border-black">
          <h1 className="main-page-title">Carlos Bustos</h1>
          <p className="main-page-description">Front End Developer</p>
          <ul className="main-page-navbar">
            <li><Link href="/home" className={currentRoute === '/home' ? activeStyle : nonActiveStyle}>Home</Link></li>
            <li><Link href="/projects" className={currentRoute === '/projects' ? activeStyle : nonActiveStyle}>Proyectos</Link></li>
            <li><Link href="/contact" className={currentRoute === '/contact' ? activeStyle : nonActiveStyle}>Contacto</Link></li>
          </ul>
        </main>

        <div className="main-page-container-content">
          {children}
        </div>

      </body>
    </html>
  )
}
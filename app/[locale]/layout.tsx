import '../globals.css'

import type { Metadata } from 'next'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Carlos Bustos Portfolio'
}

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children, params
}: {
  children: React.ReactNode,
  params: any
}) {
  const locale = useLocale()
  //const currentRoute = usePathname()
  const activeStyle = 'navbar-active'
  const nonActiveStyle = 'navbar-nonactive'
  const t = useTranslations();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <main className="main-page-container border border-black">
          <h1 className="main-page-title">Carlos Bustos</h1>
          <p className="main-page-description">Front End Developer</p>
          <ul className="main-page-navbar">
            <li><Link href={locale + "/home"} /*className={currentRoute === '/home' ? activeStyle : nonActiveStyle}*/>Home</Link></li>
            <li><Link href={locale + "/projects"} /*className={currentRoute === '/projects' ? activeStyle : nonActiveStyle}*/>{t("MENU_PROJECTS")}</Link></li>
            <li><Link href={locale + "/contact"} /*className={currentRoute === '/contact' ? activeStyle : nonActiveStyle}*/>Contacto</Link></li>
          </ul>
        </main>
        <div className="main-page-container-content">
          {children}
        </div>
      </body>
    </html >
  );
}
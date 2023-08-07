import '../globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import Navigation from '@/app/components/Navigation'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import MenuLang from '../components/MenuLang'
import MenuResponsive from '../components/MenuResponsive'

export const metadata: Metadata = {
  title: 'Carlos Bustos Portfolio'
}

export function generateStaticParams() {
  return [{ locale: 'es' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children, params: { locale }
}: {
  children: React.ReactNode,
  params: any
}) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className='bg-slate-50 dark:bg-[#000000]'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <main className="main-page-container border border-black dark:border-white m-[40px] p-[40px]">
              <h1 className="main-page-title">Carlos Bustos</h1>
              <p className="main-page-description">Front End Developer</p>
              <div className='md:block max-md:hidden'>
                <ThemeSwitcher />
                <MenuLang />
                <Navigation></Navigation>
              </div>
              <div className="main-page-container-content absolute bottom-[80px] right-[80px] w-[50vw] max-md:static">
                {children}
              </div>
              <MenuResponsive></MenuResponsive>
            </main>

          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
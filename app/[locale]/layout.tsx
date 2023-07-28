import '../globals.css'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';

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
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="main-page-container border border-black">
            <h1 className="main-page-title">Carlos Bustos</h1>
            <p className="main-page-description">Front End Developer</p>
            <Navigation></Navigation>
          </main>
          <div className="main-page-container-content">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
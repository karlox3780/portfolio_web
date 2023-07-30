'use client';

import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import Link from 'next/link'

export default function Navigation() {
    const t = useTranslations('Navigation')
    const locale = useLocale()
    const currentRoute = usePathname()
    const activeStyle = 'navbar-active'
    const nonActiveStyle = 'navbar-nonactive'

    return (
        <div>
            <Link href={"/en" + currentRoute} className={locale === "en" ? activeStyle : nonActiveStyle} locale="en">EN</Link>
            <Link href={"/es" + currentRoute} className={locale === "es" ? activeStyle : nonActiveStyle} locale="es">ES</Link>
        </div>
    );
}
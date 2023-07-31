'use client';

import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import Link from 'next/link'

export default function Navigation() {
    const t = useTranslations('MenuLang')
    const locale = useLocale()
    const currentRoute = usePathname()
    const activeStyle = 'menu-lang-link navbar-active'
    const nonActiveStyle = 'menu-lang-link navbar-nonactive'

    return (
        <div className="menu-lang">
            <label className="menu-lang-title">{t("TITLE")}</label>
            <Link href={"/en" + currentRoute} className={locale === "en" ? activeStyle : nonActiveStyle} locale="en">EN</Link>
            <Link href={"/es" + currentRoute} className={locale === "es" ? activeStyle : nonActiveStyle} locale="es">ES</Link>
        </div>
    );
}
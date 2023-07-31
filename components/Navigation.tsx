'use client';

import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MenuLang from './MenuLang'

export default function Navigation() {
    const t = useTranslations('Navigation')
    const locale = useLocale()
    const currentRoute = usePathname()
    const activeStyle = 'navbar-active'
    const nonActiveStyle = 'navbar-nonactive'

    return (
        <ul className="main-page-navbar">
            <MenuLang></MenuLang>
            <li><Link href={"/" + locale + "/home"} className={currentRoute?.includes("/home") ? activeStyle : nonActiveStyle}>{t("MENU_HOME")}</Link></li>
            <li><Link href={"/" + locale + "/projects"} className={currentRoute?.includes("/projects") ? activeStyle : nonActiveStyle}>{t("MENU_PROJECTS")}</Link></li>
            <li><Link href={"/" + locale + "/contact"} className={currentRoute?.includes("/contact") ? activeStyle : nonActiveStyle}>{t("MENU_CONTACT")}</Link></li>
        </ul>
    );
}
'use client';

import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
    const t = useTranslations('Navigation')
    const locale = useLocale()
    const currentRoute = usePathname()
    const activeStyle = 'navbar-active'
    const nonActiveStyle = 'navbar-nonactive'

    return (
        <ul className="main-page-navbar">
            <li><Link href={"/" + locale + "/home"} className={currentRoute?.includes("/home") ? activeStyle : nonActiveStyle}>{t("MENU_HOME")}</Link></li>
            <li><Link href={"/" + locale + "/projects"} className={currentRoute?.includes("/projects") ? activeStyle : nonActiveStyle}>{t("MENU_PROJECTS")}</Link></li>
            <li><Link href={"/" + locale + "/about"} className={currentRoute?.includes("/about") ? activeStyle : nonActiveStyle}>{t("MENU_ABOUT")}</Link></li>
        </ul>
    );
}
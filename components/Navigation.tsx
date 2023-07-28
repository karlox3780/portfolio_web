'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
    const t = useTranslations('Navigation');
    const currentRoute = usePathname()
    const activeStyle = 'navbar-active'
    const nonActiveStyle = 'navbar-nonactive'

    return (
        <ul className="main-page-navbar">
            <li><Link href={"/home"} className={currentRoute?.includes("/home") ? activeStyle : nonActiveStyle}>Home</Link></li>
            <li><Link href={"/projects"} className={currentRoute?.includes("/projects") ? activeStyle : nonActiveStyle}>{t("MENU_PROJECTS")}</Link></li>
            <li><Link href={"/contact"} className={currentRoute?.includes("/contact") ? activeStyle : nonActiveStyle}>Contacto</Link></li>
        </ul>
    );
}
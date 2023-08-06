'use client'

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import MenuLang from './MenuLang';

export default function Navigation() {
    const [navbar, setNavbar] = useState(false);
    const t = useTranslations('Navigation')
    const locale = useLocale()
    const currentRoute = usePathname()
    const activeStyle = 'navbar-active'
    const nonActiveStyle = 'navbar-nonactive'

    return (
        <nav className="w-fit md:hidden">
            <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 outline-none border border-black"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul className={`main-page-navbar ${navbar ? 'block' : 'hidden'}`}>
                            <li><ThemeSwitcher /></li>
                            <li><MenuLang /></li>
                            <li><Link href={"/" + locale + "/home"} className={currentRoute?.includes("/home") ? activeStyle : nonActiveStyle}>{t("MENU_HOME")}</Link></li>
                            <li><Link href={"/" + locale + "/projects"} className={currentRoute?.includes("/projects") ? activeStyle : nonActiveStyle}>{t("MENU_PROJECTS")}</Link></li>
                            <li><Link href={"/" + locale + "/contact"} className={currentRoute?.includes("/contact") ? activeStyle : nonActiveStyle}>{t("MENU_CONTACT")}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
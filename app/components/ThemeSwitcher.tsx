"use client";

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const t = useTranslations('ThemeSwitcher')
    const activeStyle = 'cursor-pointer mr-[5px] navbar-active'
    const nonActiveStyle = 'cursor-pointer mr-[5px] navbar-nonactive'

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <div className="flex items-baseline tracking-wider">
            <p className="text-base mt-[20px] mr-[5px] max-md:mt-[0px]">{t("CHANGE_THEME")}</p>
            <a className={theme === "dark" ? activeStyle : nonActiveStyle} onClick={() => { if (theme === "light") setTheme("dark") }}>{t("DARK")}</a>
            <a className={theme === "light" ? activeStyle : nonActiveStyle} onClick={() => { if (theme === "dark") setTheme("light") }}>{t("LIGHT")}</a>
        </div>
    );
};
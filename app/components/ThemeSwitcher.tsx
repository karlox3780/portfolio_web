"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const t = useTranslations('ThemeSwitcher')

    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return (
        <>
            <p className="text-base mt-[20px]">{t("CHANGE_THEME")}</p>
            <button className={`w-fit p-2 mb-[10px] duration-200 bg-black text-white text-base dark:bg-white dark:text-black`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "light" ? t("DARK") : t("LIGHT")}
            </button>
        </>

    );
};
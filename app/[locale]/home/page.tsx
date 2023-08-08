import { useTranslations } from "next-intl"

export default function Home() {
    const t = useTranslations('HomePage')

    return (
        <div className="absolute flex flex-col font-bold text-[18px] bottom-0 right-0 max-md:static max-md:mt-[10px]">
            <span>{t("ParagraphLine1")}</span>
            <span>{t("ParagraphLine2")}</span>
            <span>{t("ParagraphLine3")}</span>
            <span>{t("ParagraphLine4")}</span>
            <span>{t("ParagraphLine5")}</span>
            <span>{t("ParagraphLine6")}</span>
            <span>{t("ParagraphLine7")}</span>
        </div>
    )
}
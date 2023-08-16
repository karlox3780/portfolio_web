import DemoButton from "@/app/components/ProjectButtons/DemoButton"
import GithubButton from "@/app/components/ProjectButtons/GithubButton"
import Css3Icon from "@/app/components/TecnologyIcons/Css3Icon"
import HandleBarsIcon from "@/app/components/TecnologyIcons/HandleBarsIcon"
import NextJsIcon from "@/app/components/TecnologyIcons/NextJsIcon"
import NodeJsIcon from "@/app/components/TecnologyIcons/NodeJsIcon"
import ReactJsIcon from "@/app/components/TecnologyIcons/ReactJsIcon"
import { useTranslations } from "next-intl"

export default function Projects() {
    const t = useTranslations('ProjectsPage')

    return (
        <div className="flex flex-col items-center justify-center animate-fade-down">
            <h1 className="font-bold text-[26px] mr-[5px]">{t("Title")}</h1>
            <div className="w-[50%] mt-[20px] max-lg:w-[90%] max-md:w-[100%]">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-[20px] mr-[5px]">{t("GiftyNextJs.Title")}</h1>
                    <NodeJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <NextJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <Css3Icon className="w-[30px] fill-black dark:fill-white" />
                </div>
                <p className="text-[18px]">{t("GiftyNextJs.Paragraph")}</p>
                <div className="flex justify-center mt-[10px] max-md:flex-col">
                    <DemoButton href="https://gifty-next-js.vercel.app/" />
                    <GithubButton href="https://github.com/Daniel-Fiat/Gifty-NextJs" />
                </div>
            </div>
            <div className="w-[50%] mt-[20px] max-lg:w-[90%] max-md:w-[100%]">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-[20px] mr-[5px]">{t("Gifty.Title")}</h1>
                    <NodeJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <ReactJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <Css3Icon className="w-[30px] fill-black dark:fill-white" />
                </div>
                <p className="text-[18px]">{t("Gifty.Paragraph")}</p>
                <div className="flex justify-center mt-[10px] max-md:flex-col">
                    <DemoButton href="https://gifty-seven.vercel.app/" />
                    <GithubButton href="https://github.com/Daniel-Fiat/Gifty_client" />
                </div>
            </div>
            <div className="w-[50%] mt-[20px] max-lg:w-[90%] max-md:w-[100%]">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-[20px] mr-[5px]">{t("ChicagoArt.Title")}</h1>
                    <NodeJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <HandleBarsIcon className="w-[30px] fill-black dark:fill-white" />
                    <Css3Icon className="w-[30px] fill-black dark:fill-white" />
                </div>
                <p className="text-[18px]">{t("ChicagoArt.Paragraph")}</p>
                <div className="flex justify-center mt-[10px] max-md:flex-col">
                    <DemoButton href="https://chicago-art-page.vercel.app/" />
                    <GithubButton href="https://github.com/hongen1993/ChicagoArt" />
                </div>
            </div>
        </div>
    )
}
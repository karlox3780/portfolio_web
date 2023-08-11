import Css3Icon from "@/app/components/TecnologyIcons/Css3Icon"
import HandleBarsIcon from "@/app/components/TecnologyIcons/HandleBarsIcon"
import NextJsIcon from "@/app/components/TecnologyIcons/NextJsIcon"
import NodeJsIcon from "@/app/components/TecnologyIcons/NodeJsIcon"
import ReactJsIcon from "@/app/components/TecnologyIcons/ReactJsIcon"
import { useTranslations } from "next-intl"

export default function Projects() {
    const t = useTranslations('ProjectsPage')

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-[26px] mr-[5px]">{t("Title")}</h1>
            <div className="w-[50%] mt-[20px] max-lg:w-[90%] max-md:w-[100%]">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-[20px] mr-[5px]">{t("GiftyNextJs.Title")}</h1>
                    <NodeJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <NextJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <Css3Icon className="w-[30px] fill-black dark:fill-white" />
                </div>
                <p>{t("GiftyNextJs.Paragraph")}</p>
                <div className="flex justify-center mt-[10px] max-md:flex-col">
                    <a className="w-fit border border-black text-center font-bold p-[5px] mr-[10px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mr-[0px]" href="https://gifty-next-js.vercel.app/" target="_blank">Demo</a>
                    <a className="w-fit border border-black text-center font-bold p-[5px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mt-[10px]" href="https://github.com/Daniel-Fiat/Gifty-NextJs" target="_blank">Github</a>
                </div>
            </div>
            <div className="w-[50%] mt-[20px] max-lg:w-[90%] max-md:w-[100%]">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-[20px] mr-[5px]">{t("Gifty.Title")}</h1>
                    <NodeJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <ReactJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <Css3Icon className="w-[30px] fill-black dark:fill-white" />
                </div>
                <p>{t("Gifty.Paragraph")}</p>
                <div className="flex justify-center mt-[10px] max-md:flex-col">
                    <a className="w-fit border border-black text-center font-bold p-[5px] mr-[10px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mr-[0px]" href="https://gifty-seven.vercel.app/" target="_blank">Demo</a>
                    <a className="w-fit border border-black text-center font-bold p-[5px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mt-[10px]" href="https://github.com/Daniel-Fiat/Gifty_client" target="_blank">Github</a>
                </div>
            </div>
            <div className="w-[50%] mt-[20px] max-lg:w-[90%] max-md:w-[100%]">
                <div className="flex items-center justify-center">
                    <h1 className="font-bold text-[20px] mr-[5px]">{t("ChicagoArt.Title")}</h1>
                    <NodeJsIcon className="w-[30px] fill-black dark:fill-white" />
                    <HandleBarsIcon className="w-[30px] fill-black dark:fill-white" />
                    <Css3Icon className="w-[30px] fill-black dark:fill-white" />
                </div>
                <p>{t("ChicagoArt.Paragraph")}</p>
                <div className="flex justify-center mt-[10px] max-md:flex-col">
                    <a className="w-fit border border-black text-center font-bold p-[5px] mr-[10px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mr-[0px]" href="https://chicago-art-page.vercel.app/" target="_blank">Demo</a>
                    <a className="w-fit border border-black text-center font-bold p-[5px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mt-[10px]" href="https://github.com/hongen1993/ChicagoArt" target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}
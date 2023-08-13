export default function DemoButton(props: any) {
    return (
        <a className="w-fit border border-black text-center font-bold p-[5px] mr-[10px] duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white max-md:w-[100%] max-md:mr-[0px]" target="_blank" {...props}>Demo</a>
    )
}
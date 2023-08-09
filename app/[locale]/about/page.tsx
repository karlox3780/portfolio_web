import Image from 'next/image'
import profilePhoto from '../../../public/assets/profile_photo.jpg'
import { useTranslations } from 'next-intl'

export default function About() {
    const t = useTranslations('AboutPage')

    return (
        <>
            <div className='flex justify-center'>
                <Image className='w-[200px] rounded-[50%] hover:translate-y-[10px] duration-200' src={profilePhoto} alt="Foto de perfil" priority />
            </div>
            <div className='flex flex-col items-center text-[20px]'>
                <p className='mt-[20px] w-[50%] max-lg:w-[90%] max-md:w-[100%]'>
                    {t("ParagraphLine1")}
                </p>
                <p className='mt-[20px] w-[50%] max-lg:w-[90%] max-md:w-[100%]'>
                    {t("ParagraphLine2")}
                </p>
            </div>
        </>
    )
}
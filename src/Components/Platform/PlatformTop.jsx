import React from 'react'
import CardPlatform from './CardPlatform'
import { useTranslation } from "react-i18next"
const PlatformTop = () => {
    const [t, i18n] = useTranslation()
    const PlatformInfo = [
        {
            title: t("PlatformInfo.0.question"),
            paragraph: t("PlatformInfo.0.paragraph1")
        },
        {
            title: t("PlatformInfo.1.question"),
            paragraph: t("PlatformInfo.1.paragraph1"),
            prize1: t("PlatformInfo.1.prize1"),
            prize2: t("PlatformInfo.1.prize2"),
            prize3: t("PlatformInfo.1.prize3"),
            prize4: t("PlatformInfo.1.prize4"),
            paragraph1: t("PlatformInfo.1.paragraph2")
        },
        {
            title: t("PlatformInfo.2.question"),
            paragraph: t("PlatformInfo.2.paragraph1"),
            paragraph1: t("PlatformInfo.2.paragraph2"),
            paragraph2: t("PlatformInfo.2.paragraph3")
        },
        {
            title: t("PlatformInfo.3.question"),
            paragraph: t("PlatformInfo.3.paragraph1"),
            paragraph1: t("PlatformInfo.3.paragraph2"),
            paragraph2: t("PlatformInfo.3.paragraph3")
        },
        {
            title: t("PlatformInfo.4.question"),
            paragraph: t("PlatformInfo.4.paragraph1"),
            paragraph1: t("PlatformInfo.4.paragraph2"),
            paragraph2: t("PlatformInfo.4.paragraph3")
        },
        {
            title: t("PlatformInfo.5.question"),
            paragraph: t("PlatformInfo.5.paragraph1"),
            paragraph1: t("PlatformInfo.5.paragraph2"),
            paragraph2: t("PlatformInfo.5.paragraph3")
        },
    ]
    const cards = PlatformInfo.map((item) => {
        return (<CardPlatform info={item} />
        )
    })
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 flex items-center xl:px-24 z-40 px-4 py-10 z-40'>
            <div className='flex flex-col grid-span-1'>
                <div className='flex flex-col z-40'>
                    <div className="flex flex-row">
                        <h1 className="text-2xl xl:text-4xl 2xl:text-6xl" style={{ fontFamily: 'Loew-extraBold' }}>{t('PlatformTitle')}</h1>
                    </div>
                </div>
                <div className='relative z-40'>
                    <img className='z-40 relative grid-span-1 p-4 lg:pl-16 lg:hidden' src="/Images/1.png" alt="" srcset="" />
                    <div className='absolute -top-10 z-10'>
                        <img className='z-10 grid-span-1 p-4 lg:pl-16 lg:hidden' src="/Images/anim1.gif" alt="" srcset="" />
                    </div>
                </div>
                <div className='z-40'>
                    {cards}
                </div>
            </div>
            <div className='relative  '>
                <div className='absolute -top-10 z-0 hidden lg:flex'>
                    <img className='z-0 grid-span-1 p-4 lg:pl-16' src="/Images/anim1.gif" alt="" srcset="" />
                </div>
                <img className='hidden lg:flex relative z-40 grid-span-1 p-4 lg:pl-16' src="/Images/1.png" alt="" srcset="" />
            </div>
        </div>
    )
}
export default PlatformTop
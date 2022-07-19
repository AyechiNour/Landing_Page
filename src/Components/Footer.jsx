import React from "react"
import { useTranslation } from "react-i18next"
const Footer = () => {
    const [t, i18n] = useTranslation()
    return (
        <div>
            <div className="flex flex-col items-center relative py-16" style={{ backgroundColor: '#2b166021' }}>
                <div class="absolute flex items-center sm:h-1 top-0 z-40">
                    <img className="w-full z-40" src="/Images/quest1.png" alt="" srcset="" />
                </div>
                <h1 className="text-4xl xl:text-6xl 2xl:text-8xl textAnimate font-extrabold text-center w-full" style={{ fontFamily: 'Loew-extraBold' }}>{t('FooterPart2')}</h1>
                <h1 className="text-2xl xl:text-4xl 2xl:text-6xl xl:mr-0 mr-5 py-4 font-extrabold" style={{ fontFamily: 'Loew-extraBold' }} >{t('FooterPart3')}</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center px-10 py-5 place-content-between border-white border-t" style={{ backgroundColor: '#0d002b' }}>
                <img className="h-8" src="/Images/logo.png" alt="" srcset="" />
                <div className="flex flex-row mt-2 lg:mt-0 font-medium">
                    <h1 className="mr-1 text-xs" style={{ fontFamily: 'Loew-medium' }}>©</h1>
                    <h1 className="mr-1 text-xs" style={{ fontFamily: 'Loew-medium', color: '#FF0CFF' }}>CARBON BASE</h1>
                    <h1 className="text-xs" style={{ fontFamily: 'Loew-medium' }}>{t('FooterRights')}</h1>
                </div>
            </div>
        </div>
    )
}
export default Footer
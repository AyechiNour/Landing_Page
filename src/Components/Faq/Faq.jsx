import React from "react"
import { useTranslation } from "react-i18next"
const Faq = React.memo(() => {
    const [t, i18n] = useTranslation()
    return (
        <div className="w-full shadow relative  lg:bg-transparent z-40" style={{ backgroundColor: "#2b166021" }}>
            <div className="relative h-full pb-16 lg:pb-0">
                <div className="grid lg:grid-cols-2 grid-cols-1 flex items-center justify-center justify-items-center">
                    <img src="/Images/2.gif" className="lg:w-full relative -top-8 px-4" alt="" />
                    <div className="flex flex-col items-center text-center lg:pr-10 py-8 lg:py-16">
                        <h1 className="text-4xl xl:text-6xl 2xl:text-8xl uppercase" style={{ fontFamily: 'Loew-extraBold' }}>{t('FAQTitle')}</h1>
                        <p className="text-sm lg:text-base text-center 2xl:text-2xl py-7 px-2" style={{ fontFamily: 'Loew-regular' }}>{t('FAQParagraph1')}</p>
                        <p className="text-sm lg:text-base text-center 2xl:text-2xl px-2 mb-2" style={{ fontFamily: 'Loew-regular' }}>{t('FAQParagraph2')}</p>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <div className="w-10 h-5 lg:w-10 lg:h-6 flex items-center">
                                    <div className="w-2 h-2 bgAnimation rounded-full"></div>
                                </div>
                                <div className="w-10 h-5 lg:w-10 lg:h-6 flex items-center">
                                    <div className="w-2 h-2 bgAnimation rounded-full"></div>
                                </div>
                                <div className="w-10 h-5 lg:w-10 lg:h-6 flex items-center">
                                    <div className="w-2 h-2 bgAnimation rounded-full"></div>
                                </div>
                                <div className="w-10 h-5 lg:w-10 lg:h-6 flex items-center">
                                    <div className="w-2 h-2 bgAnimation rounded-full"></div>
                                </div>
                                <div className="w-10 h-5 lg:w-10 lg:h-6 flex items-center">
                                    <div className="w-2 h-2 bgAnimation rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex flex-row">
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl pl-2" style={{ fontFamily: 'Loew-regular' }}>{t('won1')}</h1>
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl px-2 font-bold" style={{ fontFamily: 'Loew-regular' }}>{t('price1')}</h1>
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl pl-2" style={{ fontFamily: 'Loew-regular' }}>{t('won2')}</h1>
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl px-2 font-bold" style={{ fontFamily: 'Loew-regular' }}>{t('price2')}</h1>
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl pl-2" style={{ fontFamily: 'Loew-regular' }}>{t('won3')}</h1>
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl px-2 font-bold" style={{ fontFamily: 'Loew-regular' }}>{t('price3')}</h1>
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl pl-2" style={{ fontFamily: 'Loew-regular' }}>{t('won4')}</h1>
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl px-2 font-bold" style={{ fontFamily: 'Loew-regular' }}>{t('price4')}</h1>
                                </div>
                                <div className="flex flex-row">
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl pl-2" style={{ fontFamily: 'Loew-regular' }}>{t('won5')}</h1>
                                    <h1 className="text-sm lg:text-base text-center 2xl:text-2xl px-2 font-bold" style={{ fontFamily: 'Loew-regular' }}>{t('price5')}</h1>
                                </div>
                            </div>
                        </div>
                        <button style={{ fontFamily: 'Loew-medium' }} className="text-sm xl:text-lg 2xl:text-2xl lg:mr-5 mt-4 sm:mt-10 mt-5 rounded-3xl px-10 py-2 btnEffet z-40 lg:mb-28">{t('FAQBouton')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Faq
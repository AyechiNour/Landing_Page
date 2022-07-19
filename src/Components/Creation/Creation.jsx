import React from 'react'
import Caroussel3D from './Caroussel3D'
import { useTranslation } from "react-i18next"

const Creation = React.memo(() => {
  const [t, i18n] = useTranslation()
  return (
    <div className='pt-28 lg:flex-col lg:justify-center lg:items-center relative' style={{ backgroundColor: "#2b166021" }}>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center'>
          <h1 className="text-3xl xl:text-6xl 2xl:text-8xl textAnimate mr-4 lg:mr-10" style={{ fontFamily: 'Loew-extraBold' }}>{t('CreationTitlePart0')}</h1>
          <h1 className="text-3xl xl:text-6xl 2xl:text-8xl" style={{ fontFamily: 'Loew-extraBold' }}>{t('CreationTitlePart1')}</h1>
          <h1 className="text-3xl xl:text-6xl 2xl:text-8xl textAnimate ml-4 lg:ml-10" style={{ fontFamily: 'Loew-extraBold' }}>{t('CreationTitlePart2')}</h1>
        </div>
        <p className="text-sm lg:text-lg text-center 2xl:text-2xl p-6" style={{ fontFamily: 'Loew-regular' }}>{t('CreationParagraph')}</p>
      </div>
      <div className='relative 2xl:-top-0 -top-24'>
        <Caroussel3D />
      </div>
    </div>
  )
})

export default Creation
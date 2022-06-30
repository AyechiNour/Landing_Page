import React from 'react'
import CardPlatform from './CardPlatform'

const PlatformTop = () => {
    const PlatformInfo = [
        {
            title:"How can I acces to NFT Carbon base",
            paragraph:"We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them."
        },
        {
            title:"How can I acces to NFT Carbon base",
            paragraph:"We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them."
        }, 
        {
            title:"How can I acces to NFT Carbon base",
            paragraph:"We try to keep returns and exchanges as simple as possible. As long as they meet our criteria, it should be no problem at all to return or exchange them."
        }
    ]
    const cards = PlatformInfo.map((item)=>{
               return( <CardPlatform item = {item} />
            )})
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 flex items-center xl:px-24 z-40'>
        <div className='flex flex-col grid-span-1'>
            <div className='flex flex-col z-40'>
                <h1 className='text-2xl font-normal' style={{color:"#A564FA"}}>Get started</h1>
                <div className='flex md:flex-row py-4'>
                    <h1 className='font-extrabold text-xl md:text-3xl lg:text-5xl 2xl:text-7xl pr-4'>Platform</h1>
                    <h1 className='font-medium text-xl md:text-3xl lg:text-5xl 2xl:text-7xl'>Carbon Base</h1>
                </div>
                <p className='pb-6 text-lg xl:text-xl 2xl:text-2xl font-noraml'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio at rerum, cupiditate praesentium explicabo fugiat.</p>
            </div>
            <div className='z-40'>
                {cards}
            </div>
        </div>
        <img className='z-40 grid-span-1 p-4 lg:pl-16' src="/images/svgPlatform.png" alt="" srcset="" />
    </div>
  )
}
export default PlatformTop
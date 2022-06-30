import React from 'react'

const Header = () => {
  return (
    <div className='grid lg:grid-cols-2 flex items-center'>
        <div className='lg:col-span-1 p-4 lg:p-16 flex flex-col z-50 justify-center items-center lg:items-start'>
          <div className='flex flex-row py-8'>
            <h1 className='font-extrabold text-5xl xl:text-8xl uppercase'>carbon</h1>
            <h1 className='px-2 font-light text-5xl xl:text-8xl uppercase'>base</h1>
          </div>
          <h1 className='text-3xl lg:text-5xl 2xl:text-7xl	font-extrabold py-2'>Sell extraordinary</h1>
          <h1 className='text-3xl lg:text-5xl 2xl:text-7xl	font-extrabold'>Jocker NFTs</h1>
          <p className='text-lg xl:text-2xl font-noraml py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corrupti architecto, ducimus doloribus perspiciatis dolores...</p>
          <div>
            <input className='mr-4 font-medium text-sm h-10 w-28 lg:text-xl lg:h-14 lg:w-48 rounded-full' style={{backgroundImage:"linear-gradient(to right,#4505A5,#7535CF)"}} type="button" value="More info"/>
            <input className='font-medium text-sm h-10 w-28 lg:text-xl lg:h-14 lg:w-48 rounded-full' style={{backgroundImage:"linear-gradient(to right,#4505A5,#7535CF)"}} type="button" value="Discord"/>
          </div>
        </div>
        <div className='p-4 lg:p-10 z-50 lg:col-span-1 relative'>
          <div className='p-10 absolute right-0 left-0 z-10'>
            <img className='z-10' src="/Images/point_rose.png" alt="" srcset="" />
          </div>
          <div className='z-60 flex justify-center w-full h-full items-center'>
            <img className='z-60' src="/Images/thumb.png" alt="" srcset="" />
          </div>
        </div>  
    </div>
  )
}
export default Header
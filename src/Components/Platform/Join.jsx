import React from 'react'

const Join = () => {
  return (
    <div className='relative lg:my-16 xl:mx-24'>
        <img className='absolute top-0 left-0 w-full h-full' src="/images/bg-join.png" alt="" srcset="" />
        <div className='flex flex-col items-center py-16 px-4 lg:px-32'>
            <h1 className='font-extrabold text-3xl lg:text-5xl 2xl:text-7xl'>Join Our Community</h1>
            <p className='text-lg xl:text-2xl font-noraml py-4 lg:py-16 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab id quaerat? Illo porro adipisci unde dicta, soluta placeat magnam ipsam repudiandae, iure illum magni molestiae ad repellat quidem ratione? Lorem ipsum dolor sit amet consectetur</p>
            <input className='cursor-pointer font-medium text-sm h-10 w-48 lg:text-xl lg:h-14 lg:w-80 rounded-full cursor-pointer' style={{backgroundImage:"linear-gradient(to right,#4505A5,#7535CF)"}} type="button" value="Join Community"/>
        </div>
    </div>
  )
}
export default Join
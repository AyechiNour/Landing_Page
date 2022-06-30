import React from 'react'
import Join from './Join'
import PlatformTop from './PlatformTop'

const Platform = () => {
  return (
    <div className='relative p-10'>
        <img className='absolute bottom-0 left-0 w-full h-full' src="/images/bg-platform.png" alt="" srcset="" />
        <PlatformTop/>
        <Join/>
    </div>
  )
}

export default Platform
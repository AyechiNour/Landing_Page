import React from 'react'
import CardCreation from './CardCreation'
import Carousel from './Caroussel'

const Creation = () => {
  return (
    <div className='py-10 flex-col justify-center items-center' style={{backgroundColor:"#2B1660"}}>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row'>
                <h1 className='font-extrabold text-5xl xl:text-8xl'>Creation</h1>
                <h1 className='uppercase font-extrabold text-5xl xl:text-8xl ml-6' style={{color:"#FF0CFF"}}>nft</h1>
            </div>
            <p className='text-lg xl:text-xl 2xl:text-2xl font-noraml text-center p-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic assumenda consectetur id architecto odit possimus</p>
        </div>
        <div className='my-10'>
            <Carousel />
        </div>
    </div>
  )
}

export default Creation
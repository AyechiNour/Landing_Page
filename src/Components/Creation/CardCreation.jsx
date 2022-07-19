import React from 'react'
const CardCreation = ({ item }) => {
  return (
    <div className='flex justify-center items-center w-full h-96 relative 2xl:mt-28 xl:mt-24 lg:mt-10 z-10' style={{ height: '500px' }}>
      <div className='lg:w-full rounded-2xl flex justify-center items-center'>
        <img className='w-full h-full' src={item.url} alt="" srcset="" />
      </div>
    </div>
  )
}
export default CardCreation
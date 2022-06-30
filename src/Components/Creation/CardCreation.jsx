import React from 'react'

const CardCreation = ({item}) => {
  return (
    <div className='flex justify-center items-center mb-6'>
        <div className='h-60 w-60 lg:h-96 lg:w-96 rounded-2xl flex justify-center items-center' style={{backgroundImage:"linear-gradient(to bottom,#4505A5,#7535CF)"}}>
            <img className='w-4/5 h-4/5' src="/images/img_caroussel.png" alt="" srcset="" />
        </div>
    </div>
    
  )
}
export default CardCreation
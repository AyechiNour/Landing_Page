import React from 'react'

const NextArrow = ({ slider }) => {
  return (
    <div className='relative sm:ml-5 ml-3 2xl:mt-5 z-50' onClick={() => { slider.slickNext() }}><img src="Images/RightButton.png" alt="" className="sm:w-10 sm:h-10 w-8 h-8 cursor-pointer" /></div>
  )
}
export default NextArrow
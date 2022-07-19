import React from 'react'

const PreviousArrow = ({ slider }) => {
  return (
    <div className='relative sm:mr-5 mr-3 2xl:mt-5 z-50' onClick={() => { slider.slickPrev() }}><img src="Images/LeftButton.png" alt="" className="sm:w-10 sm:h-10 w-8 h-8 cursor-pointer relative" /></div>
  )
}
export default PreviousArrow
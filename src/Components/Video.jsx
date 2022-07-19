import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
const Video = () => {
  const vd = useRef()
  const [Show, setShow] = useState(false);
  const [ShowClass, setShowClass] = useState(false);
  const playVd = () => {
    vd.current.play()
    setShow(true)
  }
  const closeVd = () => {
    vd.current.pause()
    setShow(false)
  }
  const [refVideo, inViewVideo] = useInView()
  useEffect(() => {
    if (inViewVideo) {
      setShowClass(true)
    }

  }, [inViewVideo])
  return (
    <div className='overflow-hidden relative py-4 lg:py-10'>
      <div id="videoDiv" className={ShowClass ? "animVd" : ""}>
        <video playsInline autoPlay muted loop id="video1" src="./Images/Teaser.mp4" />
      </div>
    </div>
  )
}
export default Video
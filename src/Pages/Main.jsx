import React, { useEffect, useState } from "react"
import About from "../Components/About.jsx/About"
import Faq from "../Components/Faq/Faq"
import Footer from "../Components/Footer"
import Header from "../Components/Header/Header"
import BlocLevels from "../Components/Levels/BlocLevels"
import Navbar from "../Components/Navbar"
import Video from "../Components/Video"
import Creation from "../Components/Creation/Creation"
import Platform from "../Components/Platform/Platform"
import Discord from "../Components/Discord"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"
import Effects from "../Components/Effects"
const Main = React.memo(() => {
  const navigate = useNavigate();
  const [refAbout, inViewAbout] = useInView()
  const [refRoad, inViewRoad] = useInView()
  const [refLook, inViewLook] = useInView()
  const [refFaq, inViewFaq] = useInView()
  const [refProject, inViewProject] = useInView()
  const [loading, setloading] = useState(true);
  const [anim, setAnim] = useState(false);
  if (loading) {
    setInterval(() => {
      setAnim(true)
    }, 4010);
    setInterval(() => {
      setloading(false)
    }, 4535);
  }
  useEffect(() => {
    if (inViewAbout) {
      navigate("/#About")
    } else if (inViewRoad) {
      navigate("/#RoadMap")
    } else if (inViewLook) {
      navigate("/#LookBook")
    } else if (inViewFaq) {
      navigate("/#Faq")
    } else if (inViewProject) {
      navigate("/#Project")
    }
  }, [inViewAbout, inViewRoad, inViewLook, inViewFaq, inViewProject]);
  return (
    <>
      {loading &&
        <>
          <div className="flex  justify-center items-center h-screen fixed w-screen text-white z-50 overflow-hidden" >
            <div className={anim ? "h-1/2 top-0 absolute bg-purple-900 w-full z-0 animate" : "h-1/2 top-0 absolute bg-purple-900 w-full z-50"}></div>
            <img src="./Images/preload.gif" className={anim ? "hidden" : "w-1/4 z-50"} alt="" />
            <div className={anim ? "h-1/2 bottom-0 absolute bg-purple-900 w-full z-0 animate" : "h-1/2 bottom-0 absolute bg-purple-900 w-full z-0"}></div>
          </div>
        </>
      }
      <div className="relative z-0 bgBack">
        <Effects />
        <div className="absolute right-0 h-screen w-screen top-16 lg:flex hidden"> <img src="./Images/animation.gif" className="h-full w-full" alt="" /> </div>
        <img src="./Images/star.png" className="absolute lg:block hidden h-full w-screen" alt="" />
        <Navbar />
        <div className="fixed bottom-3 lg:bottom-10 right-3 lg:right-10 z-50"> <Discord /></div>
        <div className="">
          <Header />
          <div ref={refAbout} id="About" ></div>
          <About />
          <Video />
          <div ref={refRoad} id="RoadMap"></div>
          <BlocLevels />
          <div ref={refLook} id="LookBook"></div>
          <Creation />
          <div ref={refFaq} id="Faq"></div>
          <Faq />
          <div ref={refProject} id="Project"></div>
          <Platform />
          <Footer />
        </div>
      </div>
    </>
  )
})
export default Main
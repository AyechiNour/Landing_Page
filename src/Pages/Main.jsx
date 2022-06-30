import React from "react"
import About from "../Components/About.jsx/About"
import Faq from "../Components/Faq/Faq"
import Header from "../Components/Header.jsx/Header"
import Navbar from "../Components/Navbar"

const Main = () => {
  return (
    <div className="relative z-30">
      <Navbar />
      <div className="">
        <Header />
        <About />
        <Faq />
      </div>
    </div>
  )
}

export default Main
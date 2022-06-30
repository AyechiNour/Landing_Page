import React from "react"
import CardAbout from "./CardAbout"

const About = () => {
    return (
        <div className="lg:px-16 px-2 bgImgAbout mt-72 z-30">

            <div className="grid lg:grid-cols-2 grid-cols-1 flex lg:flex-row flex-col-reverse justify-center items-center relative -top-16 z-30">
                <img src="/Images/01.png" className="z-30" alt="" />
                <CardAbout />
                </div>
        </div>
    )
}

export default About
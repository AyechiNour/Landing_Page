import React from "react"
import CardAbout from "./CardAbout"
const About = React.memo(({ ref }) => {
    return (
        <div ref={ref} className="lg:px-16 px-4  z-30 mt-44 lg:mt-56 relative">
            <div className="grid lg:grid-cols-2 grid-cols-1 flex lg:flex-row flex-col-reverse justify-center items-center relative -top-16 z-30">
                <img src="/Images/01.png" className="z-30" />
                <CardAbout />
            </div>
        </div>
    )
})
export default About
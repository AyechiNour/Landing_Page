import React, { useEffect } from "react"
import { fadeInUp } from "../Variants";
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
const CardNoSvg = ({ data }) => {
    const [ref, inView] = useInView()
    const control = useAnimation()
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    return (
        <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={control}>
            <div className="xl:hidden">
                <div className="flex flex-row justify-center items-center px-4">
                    <svg className="z-40 relative top-1 -left-1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 52 52">
                        <g id="Groupe_1522" data-name="Groupe 1522" transform="translate(-101 -3517)">
                            <circle id="Ellipse_26" data-name="Ellipse 26" cx="26" cy="26" r="26" transform="translate(101 3517)" fill="#ff0cff" />
                            <circle id="Ellipse_25" data-name="Ellipse 25" cx="14" cy="14" r="14" transform="translate(113 3529)" fill="#fff" />
                        </g>
                    </svg>
                    <div className="flex flex-row w-full items-center ml-3">
                        <h1 className="text-xl sm:text-2xl md:text-3xl textAnimate mr-2" style={{ fontFamily: 'Loew-extraBold' }}>Level 0{data.id}</h1>
                        <div className="flex flex-row ml-1 ">
                            <h1 className="text-xl sm:text-2xl md:text-3xl uppercase mr-2" style={{ fontFamily: 'Loew-extraBold' }}>{data.name1}</h1>
                            <h1 className="text-xl sm:text-2xl md:text-3xl uppercase relative" style={{ fontFamily: 'Loew-light', top: "0.64px" }}>{data.name2}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-10">
                    <img src={data.effet} className="sm:w-1/4 w-1/2 mb-36 absolute cursor-pointer" alt="" />
                    <img src={data.img} alt="" className="sm:w-1/4 w-1/2 relative" />
                </div>
                <div className="px-10 py-10" style={{ fontFamily: 'Loew-regular' }} >
                    <p className="text-sm sm:text-base">{data.para}</p>
                    <ol class="list-decimal text-sm sm:text-base text-start pl-5  2xl:text-2xl  w-full mt-2">
                        {
                            data.sous.map((item) => (
                                <li>{item.item}</li>)
                            )
                        }
                    </ol>
                </div>
            </div>
            <div className="xl:flex hidden flex-col relative w-full mb-28 sm:px-2 md:mt-48 lg:mt-0 relative left-0.5">
                <div className="flex flex-row w-full items-center xl:text-5xl text-xl font-semibold  lg:relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="142" height="52" viewBox="0 0 142 52">
                        <g id="Groupe_1519" data-name="Groupe 1519" transform="translate(-101 -3517)">
                            <circle id="Ellipse_26" data-name="Ellipse 26" cx="26" cy="26" r="26" transform="translate(101 3517)" fill="#ff0cff" />
                            <circle id="Ellipse_25" data-name="Ellipse 25" cx="14" cy="14" r="14" transform="translate(113 3529)" fill="#fff" />
                        </g>
                        <rect id="Rectangle_2045" data-name="Rectangle 2045" width="92.5" height="3.068" transform="translate(49.5 22.932)" fill="#ff0cff" />
                    </svg>
                    <div className="flex lg:flex-row flex-col w-full items-center mb-1 relative -left-1">
                        <h1 className="text-2xl xl:text-4xl 2xl:text-6xl textAnimate " style={{ fontFamily: 'Loew-extraBold' }}>Level 0{data.id}</h1>
                        <div className="flex flex-row ml-1 ">
                            <h1 className="text-2xl xl:text-4xl 2xl:text-6xl uppercase mr-2 lg:ml-8" style={{ fontFamily: 'Loew-extraBold' }}>{data.name1}</h1>
                            <h1 className="text-2xl xl:text-4xl 2xl:text-6xl uppercase relative" style={{ fontFamily: 'Loew-light', top: "0.64px" }}>{data.name2}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row lg:relative lg:left-28 py-10 lg:px-10 px-2 sm:ml-0 ml-2 mt-6" style={{ width: "96%", backgroundColor: "#6103618c" }}>
                    <div>
                        <p className="text-lg text-start 2xl:text-2xl sm:text-lg text-xs w-full lg:w-3/4" style={{ fontFamily: 'Loew-regular' }}>{data.para}</p>
                        <ol class="list-decimal text-lg text-start pl-5 2xl:text-2xl sm:text-lg w-full mt-2">
                            {
                                data.sous.map((item) => (
                                    <li>{item.item}</li>)
                                )
                            }
                        </ol>
                    </div>
                    <img src={data.img} className="lg:w-60 ml-16 absolute xl:-top-28 lg:-top-16 sm:-top-32 md:-top-40 -top-20 z-40 img0 cursor-pointer xl:right-16 lg:right-6 lg:ml-0 ml-5" alt="" />
                    <img src={data.effet} className="lg:w-60 ml-16 absolute xl:-top-28 lg:-top-28 sm:-top-24 -top-20 z-30 img1 xl:right-16 lg:right-6 lg:ml-0 ml-5" alt="" />
                </div>
            </div>
        </motion.div>
    )
}
export default CardNoSvg
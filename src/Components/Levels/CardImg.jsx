import React, { useEffect, useState } from "react"
import { fadeInUp } from "../Variants";
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
const CardImg = React.memo(({ data }) => {
    const [wid, setwid] = useState(window.innerWidth > 1000 ? "637" : "100%");
    const [ref, inView] = useInView()
    const control = useAnimation()
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1000) {
                setwid("637")
            } else {
                setwid("100%")
            }
        })
    });
    useEffect(() => {
        if (inView) {
            control.start("visible");
            console.log("x")
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
            <div className="xl:hidden" >
                <div className="flex flex-row justify-center items-center mx-4">
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
                <div className="flex flex-col justify-center items-center relative mt-10">
                    <svg className="absolute lg:hidden block -top-11 z-0" style={{ left: "20px" }} xmlns="http://www.w3.org/2000/svg" width="5" height="703.5" viewBox="0 0 5 703.5">
                        <path id="Tracé_906" data-name="Tracé 906" d="M0,0V703.5" transform="translate(2.5)" fill="none" stroke="#ff0cff" stroke-width="5" stroke-dasharray="20" />
                    </svg>
                    <img src={data.effet} className="sm:w-1/4 w-1/2 mb-36 absolute cursor-pointer" alt="" />
                    <img src={data.img} alt="" className="sm:w-1/4 w-1/2 relative" />
                </div>
                <div className="px-10 py-10" style={{ fontFamily: 'Loew-regular' }}>
                    <p className="text-sm sm:text-base">{data.para}</p>
                    <ol class="list-decimal text-start pl-5 2xl:text-2xl text-sm sm:text-base w-full mt-2">
                        {
                            data.sous.map((item) => (
                                <li>{item.item}</li>)
                            )
                        }
                    </ol>
                </div>
            </div>
            <div className="xl:flex hidden flex-col relative w-full mb-20 sm:px-2 md:mt-48 lg:mt-0">
                <div className="flex flex-row items-center xl:text-5xl text-xl font-semibold lg:relative ">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width={wid} height="52" viewBox="0 0 637 52">
                            <g id="Groupe_1522" data-name="Groupe 1522" transform="translate(-101 -3517)">
                                <circle id="Ellipse_26" data-name="Ellipse 26" cx="26" cy="26" r="26" transform="translate(101 3517)" fill="#ff0cff" />
                                <circle id="Ellipse_25" data-name="Ellipse 25" cx="14" cy="14" r="14" transform="translate(113 3529)" fill="#fff" />
                            </g>
                            <rect id="Rectangle_2049" data-name="Rectangle 2049" width="587.5" height="3.068" transform="translate(49.5 26)" fill="#ff0cff" />
                        </svg>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:w-1/2 items-center mb-1 relative -left-1">
                        <h1 className="text-2xl xl:text-4xl 2xl:text-6xl textAnimate xl:w-auto lg:w-28" style={{ fontFamily: 'Loew-extraBold' }}>Level 0{data.id}</h1>
                        <div className="flex flex-row ml-1">
                            <h1 className="text-2xl xl:text-4xl 2xl:text-5xl uppercase mr-2 xl:ml-8 lg:ml-2" style={{ fontFamily: 'Loew-extraBold' }}>{data.name1}</h1>
                            <h1 className="text-2xl xl:text-4xl 2xl:text-5xl uppercase relative" style={{ fontFamily: 'Loew-light', top: "0.64px" }}>{data.name2}</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row lg:relative lg:left-28 py-10 lg:px-10 px-2 sm:ml-0 ml-2 mt-6" style={{ width: "96%", backgroundColor: "#6103618c" }}>
                    <svg className="absolute lg:block  hidden -top-5" style={{ left: "-89.1px" }} xmlns="http://www.w3.org/2000/svg" width="5" height="150%" viewBox="0 0 5 466.568">
                        <path id="Tracé_906" data-name="Tracé 906" d="M0,0V466.568" transform="translate(2.5)" fill="none" stroke="#ff0cff" stroke-width="5" stroke-dasharray="20" />
                    </svg>
                    <img src={data.img} className="lg:w-60  lg:ml-10 ml-8  absolute xl:-top-28 lg:-top-16 sm:-top-32 md:-top-40 -top-20 lg:left-0 left-10 z-40 img0 cursor-pointer" alt="" />
                    <img src={data.effet} className="lg:w-60  lg:ml-10 ml-8 absolute xl:-top-28 lg:-top-28 sm:-top-24 -top-20 lg:-left-0 left-10 z-30 img1 cursor-pointer" alt="" />
                    <div className="lg:pl-72 flex flex-col">
                        <p className="text-lg text-start 2xl:text-2xl xl:text-lg lg:text-sm w-full" style={{ fontFamily: 'Loew-regular' }}>{data.para}</p>
                        <ol class="list-decimal text-lg text-start pl-5 2xl:text-2xl xl:text-lg lg:text-sm w-full mt-2">
                            {
                                data.sous.map((item) => (
                                    <li>{item.item}</li>)
                                )
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </motion.div>
    )
})
export default CardImg
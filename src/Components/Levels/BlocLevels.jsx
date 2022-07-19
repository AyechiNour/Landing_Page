import React from "react"
import CardImg from "./CardImg"
import CardNoImage from "./CardNoImage"
import { useTranslation } from "react-i18next"
import CardNoSvg from "./CardNoSvg"
const BlocLevels = React.memo(() => {
    const [t, i18n] = useTranslation()
    console.log(t("LevelInfo.0.title"))
    const Levels = [
        {
            id: t("LevelInfo.0.id"),
            name1: t("LevelInfo.0.name1"),
            name2: t("LevelInfo.0.name2"),
            img: t("LevelInfo.0.img"),
            effet: t("LevelInfo.0.effet"),
            para: t("LevelInfo.0.para"),
            sous: [
                { item: t("LevelInfo.0.1") },
                { item: t("LevelInfo.0.2") },
                { item: t("LevelInfo.0.3") },
            ]
        },
        {
            id: t("LevelInfo.1.id"),
            name1: t("LevelInfo.1.name1"),
            name2: t("LevelInfo.1.name2"),
            img: t("LevelInfo.1.img"),
            effet: t("LevelInfo.1.effet"),
            para: t("LevelInfo.1.para"),
            sous: [
                { item: t("LevelInfo.1.1") },
                { item: t("LevelInfo.1.2") },
                { item: t("LevelInfo.1.3") },
                { item: t("LevelInfo.1.4") },
            ]
        },
        {
            id: t("LevelInfo.2.id"),
            name1: t("LevelInfo.2.name1"),
            name2: t("LevelInfo.2.name2"),
            img: t("LevelInfo.2.img"),
            effet: t("LevelInfo.2.effet"),
            para: t("LevelInfo.2.para"),
            sous: [
                { item: t("LevelInfo.2.1") },
                { item: t("LevelInfo.2.2") },
                { item: t("LevelInfo.2.3") },
                { item: t("LevelInfo.2.4") },
                { item: t("LevelInfo.2.5") },
            ]
        },
        {
            id: t("LevelInfo.3.id"),
            name1: t("LevelInfo.3.name1"),
            name2: t("LevelInfo.3.name2"),
            img: t("LevelInfo.3.img"),
            effet: t("LevelInfo.3.effet"),
            para: t("LevelInfo.3.para"),
            sous: [
                { item: t("LevelInfo.3.1") },
                { item: t("LevelInfo.3.2") },
                { item: t("LevelInfo.3.3") },

            ]
        },
        {
            id: t("LevelInfo.4.id"),
            name1: t("LevelInfo.4.name1"),
            name2: t("LevelInfo.4.name2"),
            img: t("LevelInfo.4.img"),
            effet: t("LevelInfo.4.effet"),
            para: t("LevelInfo.4.para"),
            sous: [
                { item: t("LevelInfo.4.1") },
                { item: t("LevelInfo.4.2") },
                { item: t("LevelInfo.4.3") },
                { item: t("LevelInfo.4.4") }
            ]
        },
    ]
    return (
        <div className="flex flex-col items-center mt-36">
            <h1 className="text-4xl xl:text-6xl 2xl:text-8xl textAnimate uppercase mb-24" style={{ fontFamily: 'Loew-extraBold' }}>road map</h1>
            <div className="flex sm:px-16 w-full relative">
                <div className="relative">
                    <CardNoImage data={Levels[0]} />
                    <CardImg data={Levels[1]} />
                    <CardNoImage data={Levels[2]} />
                    <CardImg data={Levels[3]} />
                    <CardNoSvg data={Levels[4]} />
                </div>
            </div>
        </div>
    )
})
export default BlocLevels
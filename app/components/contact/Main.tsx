import Info from "./Info"
import {MdHeadsetMic} from "react-icons/md" 

const Main = () => {
    return(
        <>
        <section className="flex flex-col items-center justify-between py-20 lg:px-[28vw]  sm:px-20 px-10 relative">
            <h2 className="font-bold text-3xl pb-5"> راه های ارتباطی با <span className="text-primary"> روینـــــــو</span></h2>
            <p className="text-gray text-justify pb-5">
                لورم ایپسوم متن ساختگی با تولید سادگـی نامفـهوم از صنـعت چـاپ، چاپگـرها و متـون بلکه روزنـامه و مجله در ستون و سطر آنچنان که لازم است. و متـون بلکه روزنــامـه و مجـله در سـتون و سطر آنچنان که لازم است
            </p>
            <div className="bg-white rounded-lg relative px-2 py-5 lg:p-8 sm:p-5 w-full mr-[-45px] sm:mr-0 lg:mr-0 shadow-xl">
                <Info />
            </div>
            <i className="absolute bottom-[-30px] right-20 p-3 rounded-xl bg-purple">
                <MdHeadsetMic className="fill-white w-5 h-5"/>
            </i>
        </section>
        </>
    )
}

export default Main
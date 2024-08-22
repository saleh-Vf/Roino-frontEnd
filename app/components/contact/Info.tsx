import {FaPhone} from "react-icons/fa"
import {FaLocationDot} from "react-icons/fa6"
import {RiMailUnreadFill} from "react-icons/ri"
import ContactPicture from "Image/contact us/image.png"
import Image from "next/image"

const Info = () => {
    return (
        <>
            <div className="flex justify-start items-center">
                <i className="p-3 bg-blue-lavender rounded-full lg:ml-8 ml-3">
                    <FaPhone className="fill-primary w-5 lg:w-8 h-5 lg:h-8"/>
                </i>
                <div>
                    <p className="text-gray text-sm lg:text-xl">9891212312345+</p>
                    <p className="text-gray text-sm lg:text-xl">9891212312345+</p>
                </div>
            </div>
            <hr className="mt-5 opacity-[50%]"/>
            <div className="flex justify-start items-center mt-5">
            <i className="p-3 bg-blue-lavender rounded-full lg:ml-8 ml-3">
                <FaLocationDot className="fill-primary w-5 lg:w-8 h-5 lg:h-8"/>
            </i>

                <p className="text-gray lg:w-1/2 w-2/3 text-sm lg:text-xl">تهران، فردوس، میدان صادقیه
ورودی بلوار فردوس، خیابان رز غربی</p>
            </div>
            <hr className="mt-5 opacity-[50%]"/>

            <div className="flex justify-start items-center mt-5">
            <i className="p-3 bg-blue-lavender rounded-full lg:ml-8 ml-3">
                <RiMailUnreadFill className="fill-primary w-5 h-5 lg:w-8 lg:h-8"/>
            </i>
                <div className="flex flex-col">
                    <p className="text-gray text-sm lg:text-xl">email@suproino.ir</p>
                    <p className="text-gray text-sm lg:text-xl">email@messageroino.ir</p>
                </div>
            </div>
            <Image src={ContactPicture} className="lg:w-[45%] sm:w-[30%] w-[40%] absolute bottom-3 left-[-40px]" alt='ارتباط با ما'/>
        </>
    )
}

export default Info
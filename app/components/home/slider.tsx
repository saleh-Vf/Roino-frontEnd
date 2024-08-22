"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from "../../../public/images/home/slider/image.png";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Slider() {
  return (
    <>
      <div className=" flex items-center px-2 lg:px-6 xl:px-14 md:py-10 py-1 ">
        {/* <div className="    md:h-10 md:w-10 h-8 w-8 border-2 border-primary md:ms-[5%]    rounded md:p-2 p-1 bg-wight text-primary cursor-pointer md:hover:bg-primary md:hover:border-withe md:hover:text-white  md:transition    md:duration-150   ">
        
      </div> */}

        <Swiper
          effect={"flip"}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-[80%] transition duration-700 "
        >
          <SwiperSlide className="text-center flex justify-center justify-items-center lg:p-2 md:p-12 p-20">
            <Image src={Img} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center justify-items-center lg:p-2 md:p-12 p-20">
            <Image src={Img} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center justify-items-center lg:p-2 md:p-12 p-20">
            <Image src={Img} alt="" className="" />
          </SwiperSlide>
          <SwiperSlide className="text-center flex justify-center justify-items-center lg:p-2 md:p-12 p-20">
            <Image src={Img} alt="" className="" />
          </SwiperSlide>
        </Swiper>

        {/* <div className="  md:h-10 md:w-10 h-8 w-8   border-2 border-primary md:me-[5%]   rounded md:p-2 p-1 bg-wight text-primary cursor-pointer md:hover:bg-primary md:hover:border-withe md:hover:text-white  md:transition  md:duration-150 ">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div> */}
      </div>
    </>
  );
}

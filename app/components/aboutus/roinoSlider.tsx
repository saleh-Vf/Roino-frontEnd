"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Img1 from "Image/aboutRoino/img.png";
import PatternIcon from "Icon/aboutus/roinoSlider/pattern.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const items = [
  {
    img: Img1,
    name: "آقای ...",
    position: "طراح سایت و مدیر گروه",
  },
  { img: Img1, name: "آقای ...", position: "طراح سایت و مدیر گروه" },
  { img: Img1, name: "آقای ...", position: "طراح سایت و مدیر گروه" },
  { img: Img1, name: "آقای ...", position: "طراح سایت و مدیر گروه" },
];


const Cards = ({isActive,index,data})=>{
  return(
    <>
       <div
          className={` px-1 py-2 duration-500 ${
            isActive
              ? "opacity-100 blur-none bg-purple"
              : " opacity-75 bg-white blur-sm mr-10"
          } py-6     rounded-2xl text-center w-[100%]  `}
          key={index}
        >
          <Image
            className="rounded-full mx-auto text-purple"
            src={data.img}
            alt=""
          />
          <p
            className={`${
              isActive ? " text-white" : "text-purple-100"
            }   mb-3 font-normal  pt-8`}
          >
            {data.name}
          </p>
          <p className="mb-3 font-normal text-purple-100 ">
            {data.position}
          </p>
          </div>
    </>
  )
}

export default function RoinoSlider() {
  return (
    <>
      <div className=" relative py-10 lg:px-48 md:px-16 px-0">
        <div className="absolute right-16  hidden lg:block">
          <Image
            src={PatternIcon}
            className="relative  -right-8 -top-32"
            alt=""
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:py-12 py-10 md:px-12  px-0 bg-blue-lavender rounded-3xl relative  ">
          <div className="  font-bold px-1 py-4 lg:py-0">
            <h2 className="mb-8 text-dark-gunmetal text-2xl md:text-4xl mx-4">
              اعضای تیم
              <span className="text-primary text-2xl md:text-4xl"> روینو</span>
            </h2>
            <p className="md:text-lg text-base text-gray text-justify lg:text-right lg:pl-8 mx-4">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان
            </p>
          </div>
          <div className="swiper max-w-full py-12 lg:py-0">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              navigation={true}
              spaceBetween={-40}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              speed={500}
              loop={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 1,
                depth: 900,
                modifier: 0.1,
              }}
              slidesPerView={2}
              className=""
            >
              {items.map((data, index) => (
                <SwiperSlide>
                  {({ isActive }) => (
                        <Cards isActive={isActive} data={data} key={index}/>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

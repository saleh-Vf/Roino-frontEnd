import { BsCalendar4Week } from "react-icons/bs";
import { TfiBarChart } from "react-icons/tfi";
import { VscChecklist } from "react-icons/vsc";
import { MdManageHistory } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { LiaTelegram } from "react-icons/lia";
import { AiOutlineFileText } from "react-icons/ai";
import Vector from "Image/home/experience/Vector.png";
import Image from "next/image";

const ItemExp = (props) => {
  return (
    <div className="text-center   cursor-pointer  flex justify-center items-center">
      <div className="flex w-full h-full flex-col items-center">
        <div className="relative flex justify-center items-center group h-16 w-16">
          <div className="absolute rounded-xl h-16 w-16  transition-all bg-blue-lavender group-hover:bg-purple"></div>
          {props.icon}
        </div>
        <h4 className="lg:text-xl font-bold  inset-y-24 content-center text-purple whitespace-nowrap mt-[18px]">
          {props.title}
        </h4>
      </div>
    </div>
  );
};

export default function Experience() {
  return (
    <div className="bg-color-primary-light px-5 lg:px-6 xl:px-14 py-10 flex items-center justify-center">
      <div className="container py-10">
        <div className="text-center m-auto  lg:text-5xl text-2xl   h-16 top-16 left-[25%] ">
          <h2 className="mb-0.5 text-stone-700 font-black  ">
            سرویس های تیم<span className="text-purple"> روینو</span>
          </h2>
          <div className="">
            <Image
              src={Vector}
              alt=""
              className=" top-1 w-1/6 text-center m-auto "
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 lg:gap-6  md:grid-cols-4 grid-cols-2 gap-2 px-5 lg:ml-48 lg:mr-48 xl:px-14 py-20 ">
          <ItemExp
            title={"مدیریت پروژه"}
            icon={
              <HiOutlineSquaresPlus
                className="text-purple group-hover:text-white transition-all absolute bottom-4 left-4  z-100"
                size={30}
              />
            }
          />
          <ItemExp
            title={"کنترل وظایف"}
            icon={
              <VscChecklist
                className="text-purple group-hover:text-white transition-all absolute bottom-4 left-4  z-100"
                size={30}
              />
            }
          />
          <ItemExp
            title={"مدیریت املاک"}
            icon={
              <AiOutlineFileText
                className="text-purple group-hover:text-white transition-all absolute bottom-4 left-4  z-100"
                size={30}
              />
            }
          />
          <ItemExp
            title={"چت بات"}
            icon={
              <LiaTelegram
                className="text-purple group-hover:text-white transition-all absolute bottom-4 left-4  z-100"
                size={30}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

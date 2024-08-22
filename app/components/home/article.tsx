import Image from "next/image";
import Vector from "Image/home/experience/Vector.png";
export default function Article() {
  return (
    <div className="bg-color-primary-light px-5 lg:px-6 xl:px-14  flex pt-32 flex-row justify-between">
      <div className="   lg:text-4xl text-2xl  pr-12  lg:pr-6  ">
        <h2 className=" text-stone-700 mb-0.5 font-black  ">جدیدترین مقالات</h2>
        <div className=" ">
          <Image
            src={Vector}
            alt=""
            className=" top-1  w-8/12 h-1/2 text-center  "
          />
        </div>
      </div>
      <div className="pl-6 text-gray text-2xl">
        <a href="#"> مشاهده همه</a>
      </div>
    </div>
  );
}

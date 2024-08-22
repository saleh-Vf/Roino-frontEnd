import Image from "next/image";
import Img from "Image/aboutRoino/Vector.png";

export default function AboutRoino() {
  return (
    <>
      <div className=" pt-28 relative pb-80 hidden lg:block ">
        <div className="mx-auto max-w-screen-sm text-center text-2xl font-bold md:text-4xl">
          <h2 className=" text-dark-gunmetal mb-0.5 ">
            درباره
            <span className="text-primary"> روینو</span>
          </h2>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6  ">
          <p className="text-gray lg:mb-16 md:text-lg text-base  text-right px-36">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکهچاپگرهاستفاده از
            طراحان گرافیک است. چاپگرها و متون بلکهچاپگرها و لکهچاپگرها و متون
            بلکه و
          </p>
        </div>
        <div className="grid grid-cols-4 ">
          <div></div>
          <div className="h-16 w-16 rounded-full bg-blue-lavender mr-56 "></div>

          <Image
            className="    absolute  left-40  top-48 w-[50%]  m-auto "
            src={Img}
            alt=""
          />

          <div></div>
        </div>
      </div>

      {/* responsive */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:hidden ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <Image src={Img} alt="" className="mb-16 " />
          <h2 className="text-dark-gunmetal  text-3xl mb-8">
            درباره <span className="text-purple"> روینو</span>
          </h2>
          <p className=" text-gray  text-base text-justify px-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
    </>
  );
}

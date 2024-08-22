import PatternIcon1 from "Icon/aboutus/roinoSlider/pattern1.png";
import EllipseIcon1 from "Icon/aboutus/roinoSlider/Ellipse1.png";
import Image from "next/image";

let history_data = [
  {
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگـی نامفـهوم از صـنـعـت چـاپ، چاپگـرها و متـون بلکه روزنــامــه و مجـله در سـتون و سـطر آنچنان که لازم است. و متـون بلـکه روزنـــامــه و مجـله در ســتـون و سطر آنچنان که لازم است",
    title: "سال ۱۴۰۱ - قبل از روینـــــــو",
  },
  {
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگـی نامفـهوم از صـنـعـت چـاپ، چاپگـرها و متـون بلکه روزنــامــه و مجـله در سـتون و سـطر آنچنان که لازم است. و متـون بلـکه روزنـــامــه و مجـله در ســتـون و سطر آنچنان که لازم است",
    title: "سال ۱۴۰۱ - قبل از روینـــــــو",
  },
  {
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگـی نامفـهوم از صـنـعـت چـاپ، چاپگـرها و متـون بلکه روزنــامــه و مجـله در سـتون و سـطر آنچنان که لازم است. و متـون بلـکه روزنـــامــه و مجـله در ســتـون و سطر آنچنان که لازم است",
    title: "سال ۱۴۰۱ - قبل از روینـــــــو",
  },
  {
    caption:
      "لورم ایپسوم متن ساختگی با تولید سادگـی نامفـهوم از صـنـعـت چـاپ، چاپگـرها و متـون بلکه روزنــامــه و مجـله در سـتون و سـطر آنچنان که لازم است. و متـون بلـکه روزنـــامــه و مجـله در ســتـون و سطر آنچنان که لازم است",
    title: "سال ۱۴۰۱ - قبل از روینـــــــو",
  },
];

function History(props) {
  return (
    <>
      <div className="md:px-32 px-6 sm:px-8 mb-10">
        <hr className="border-solid  border-purple-100 mb-14" />
        <h2 className="text-purple font-bold text-2xl md:text-4xl my-6 ">
          {props.title}
        </h2>
        <p className="text-gray  md:text-lg text-base  text-justify">
          {props.caption}
        </p>
      </div>
    </>
  );
}
export default function Establishment() {
  return (
    <>
      <div className=" relative lg:px-48 block px-8 md:px-16 mt-24 mb-32">
        <div className="absolute right-24  lg:top-16 hidden lg:block">
          <Image
            src={PatternIcon1}
            className="relative  -right-8 top-16"
            alt=""
          />
          <Image src={EllipseIcon1} className="relative  -right-2 " alt="" />
        </div>
        <div className="bg-white relative py-10  rounded-3xl z-20">
          <div className="mx-auto  text-center mb-8 lg:mb-16 pt-12">
            <h2 className="text-dark-gunmetal font-black text-2xl md:text-4xl ">
              روند تاسیس
              <span className="text-primary text-2xl md:text-4xl">
                {" "}
                روینـــــــو
              </span>
            </h2>
            <p className="text-gray my-8  md:text-lg text-base  text-justify md:px-32 px-8 ">
              طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
              صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می
              نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر
              متن باشد. معمولا استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود
              نشان دهند که صفحه می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر
              گرفته شده‌است.
            </p>
            {history_data.map((item) => {
              return <History title={item.title} caption={item.caption} />;
            })}
          </div>
        </div>
        <div className="absolute left-56  md:-bottom-12  hidden md:block">
          <Image
            src={EllipseIcon1}
            className="relative top-48 right-10"
            alt=""
          />
          <Image src={PatternIcon1} className="relative z-10 left-12 " alt="" />
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import PatternIcon from 'Icon/home/features/pattern.png'
import EllipseIcon from 'Icon/home/features/ellipse.png'
import {BiLogoApple} from 'react-icons/bi';
import {Ri24HoursFill} from 'react-icons/ri';
import {PiCodeBold,PiPenNibStraight} from "react-icons/pi"
import {IconType} from "react-icons";
import Styles from "Styles/home.module.scss"

const Features = () => {
    interface features {
        icon: IconType,
        title: string,
        description: string,
        active?: boolean,
        top?: boolean
    }


    const features: features[] = [
        {
            icon: PiCodeBold,
            title: 'طراحی سایت',
            description: 'طراحی انواع وب سایت های شخصی، شرکتی، فروشگاهی و خبری همراه با آموزش و پشتیبانی',
            top: true,
        },
        {
            icon: BiLogoApple,
            title: 'طراحی اپلیکیشن',
            description: 'فرقی نداره پروژه طراحی اپلیکیشن شما در چه سطحی باشه.تیم طراحی اپلیکیشن ماوراء بهترین امکانات و خدمات به شما ارائه میدهد.',
            active: true
        },
        {
            icon: PiPenNibStraight,
            title: 'طراحی UI/UX',
            description: 'با طراحی عناصر گرافیکی زیبا و حرفه ای بازدیدکنندگان و مشتریان وب سایت و سوشال خود مسحور کنید',
            top: true,
        },
        {
            icon: Ri24HoursFill,
            title: 'پشتیبانی و نگهداری',
            description: 'دیباگینگ مشکلات سایت و اپلیکیشن ها؛ شامل بروزرسانی، بالابردن سرعت و رفع خطاهای رایج',
        },
    ]

    return (
        <div className="relative px-5 lg:px-6 xl:px-14 py-16">
            {/* pattern */}
            <div className="absolute -right-6 -top-4 lg:-top-10">
                <Image src={PatternIcon} className="relative z-10 -right-2 top-4" alt=''/>
                <Image src={EllipseIcon} className="relative -top-20 right-6" alt=''/>
            </div>

            <div className="block lg:m-0 mt-24 lg:flex justify-between items-center relative z-20">

                <div className="my-6">
                    <p className="font-bold text-green text-4xl"><span className="text-stone-700">خدمات</span> روینـــــــو</p>
                    <div className="">
                        <p className="text-gray text-base mt-7 mb-10 lg:w-5/6">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                            تکنولوژی
                            مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                        <Link href='/' className="text-green py-2 px-6 border border-green bg-transparent rounded-lg hover:bg-green hover:text-white duration-200">بیشتر
                            بدانید</Link>
                    </div>
                </div>
                {/* features */}
                <div className="grid grid-cols-2 gap-6 w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 px-3 lg:px-0">
                    {features.map((feature, index) => (
                        <div
                            className={`${Styles.feature_card} w-full xl:w-9/12 2xl:w-7/12 rounded-xl shadow-lg py-3 px-2 grid place-items-center text-green hover:bg-green hover:shadow-xl duration-200 ${feature.top ? 'lg:-translate-y-7' : ''} `}
                            key={index}>
                            <i className="text-4xl"><feature.icon/></i>
                            <p className="mt-3 text-stone-700 font-extrabold">{feature.title}</p>
                            <p className="text-gray text-xs mt-6 mb-10">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
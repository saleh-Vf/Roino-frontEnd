import Image from "next/image";
import TaskRoino from 'Image/home/management.png';
import Link from "next/link";


const Summary = () => {
    return (
        <div className="block lg:flex gap-6 justify-between px-5 lg:px-6 xl:px-14 pb-5">
            <Image src={TaskRoino} alt='شعار روینو' className="order-2 lg:m-0 m-auto lg:w-1/2 h-full"/>

            <div className="order-1 lg:mt-24 lg:pt-24 mt-6 ">
                <p className="text-3xl font-black text-stone-800">تیم طراحی و توسعه <span className="text-primary">روینـــــو</span></p>
                <p className="text-sm font-bold w-8/12 mt-4 text-gray">روینو با داشتن یک تیم متخصص در همه زمینه های طراحی و بهینه سازی سایت و اپلیکیشن آماده خدمت رسانی به هم وطنان گرامی می باشد .</p>
                <div className="flex items-center gap-4 lg:mt-24 mt-4 text-center">
                    <Link href='/' className="bg-primary font-bold text-white py-3 px-2 lg:px-3 xl:px-4 rounded-xl shadow-md w-1/2">تماس بگیرید</Link>
                    <Link href='/' className="bg-white font-bold py-2.5 lg:px-5 px-3 rounded-xl w-1/2 text-stone-800">مشاهده سرویس ها</Link>
                </div>
            </div>
        </div>
    )
}

export default Summary
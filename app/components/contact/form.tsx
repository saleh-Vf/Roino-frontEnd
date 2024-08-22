import Link from 'next/link';

const Form = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-between bg-white rounded-lg shadow-xl relative p-10 w-full lg:w-4/5 sm:w-4/5 h-full">
                <span className="font-bold text-3xl text-primary py-5">تماس با ما</span>
                <input type={"text"} placeholder="نام" className="w-full py-3 px-5 rounded-lg bg-blue-lavender mb-5" />
                <input type={"email"} placeholder="ایمیل" className="w-full py-3 px-5 rounded-lg bg-blue-lavender mb-5" />
                <input type={"text"} placeholder="شماره تلفن" maxLength={11} className="w-full px-5 py-3 rounded-lg bg-blue-lavender mb-5" />
                <textarea rows={5} placeholder="پیام شما..." className="w-full p-4 rounded-lg bg-blue-lavender"/>
                <input type={"submit"} className='w-full rounded-lg bg-primary text-white py-3 mt-5' value={'ثبت'}/>
                <div className='absolute w-[80px] h-[80px] rounded-full bg-blue-lavender top-5 lg:left-[-50px] sm:left-[-30px] left-[-20px] z-[-1]'></div>
                <div className='absolute w-[80px] h-[80px] rounded-full bg-blue-lavender bottom-[-20px] lg:right-[-50px] sm:right-[-30px] right-[-20px] z-[-1]'></div>
            </div>
        </>
    )
}

export default Form
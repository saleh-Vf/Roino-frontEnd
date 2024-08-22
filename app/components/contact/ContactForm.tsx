import Form from "Components/contact/form"

const ContactForm = () => {
    return(
        <>
            <section className="flex flex-col items-center justify-between py-20 px-10 lg:px-[28vw] relative sm:px-20 px-15">
                <h2 className="font-bold text-3xl pb-5"> راه های سریع تر ارتباط با <span className="text-primary"> روینـــــــو</span></h2>
                <p className="text-gray text-justify pb-5">
                    لورم ایپسوم متن ساختگی با تولید سادگـی نامفـهوم از صنـعت چـاپ، چاپگـرها و متـون بلکه روزنـامه و مجله در ستون و سطر آنچنان که لازم است. و متـون بلکه روزنــامـه و مجـله در سـتون و سطر آنچنان که لازم است
                </p>
                <Form />
            </section>
        </>
    )
}

export default ContactForm
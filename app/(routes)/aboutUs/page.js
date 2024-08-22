import AboutRoino from "@/app/components/aboutus/aboutRoino";
import Establishment from "@/app/components/aboutus/establishment";
import RoinoSlider from "@/app/components/aboutus/roinoSlider";
import Footer from "@/app/components/footer";
import Menu from "@/app/components/menu";




const AboutUs=()=>{
    return(
        <>
        <Menu />
        <AboutRoino />
     <RoinoSlider />
     <Establishment />
     <Footer/>
        </>
    )
}
export default AboutUs;
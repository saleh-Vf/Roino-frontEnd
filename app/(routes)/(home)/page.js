import Menu from "Components/menu";
import Footer from "Components/footer";
import Experience from 'Components/home/experience';
import Slider from "Components/home/slider";
import Summary from "Components/home/summary";
import Features from "Components/home/features";
import Article from "@/app/components/home/article";
import BlogBody from "@/app/components/blog/Blog";





const Home = () => {
    return (
        <>
       
            <Menu/>
            <Summary/>
            <Features/>
            <Experience />
            <Slider />
           
            <Article />
          <BlogBody />
            <Footer/>
        </>
        
    )
}

export default Home;
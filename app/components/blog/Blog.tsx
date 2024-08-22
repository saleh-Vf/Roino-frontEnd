
import BlogCard from "./BlogCard";

// Start InterFace And App demo Data
interface readMores{
    title:string,
    text:string,
    url:string
}

interface favariteTag{
    text: string,
    url: string
}

interface blogs{
    title:string,
    text:string,
    img:string,
    tags:Array<string>
}

const readMores: readMores[] = [
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،......  ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،...... ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،...... ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،...... ",
        url:"/"
    },
    {
        title:"ساختار پروژه و مراحل مدیریت آن را بشناسید",
        text:" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، ......",
        url:"/"
    }
]

const favariteTag:favariteTag[] = [
    {
        text:"مدیریت تسک",
        url :"/"
    },
    {
        text:"تسک",
        url :"/"
    },
    {
        text:"مدیریت تسک",
        url :"/"
    },
    {
        text:"تسک",
        url :"/"
    },
    {
        text:"مدیریت تسک",
        url :"/"
    },
]

const blogs: blogs[] = [
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
    {
        title: "مدیریت پروژه آنلاین در روینو",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگت",
        img: "https://s8.uupload.ir/files/project-managment_1_(1)_hyje.png",
        tags:['تسک']
    },
]
// End InterFace And App demo Data





// This Function for Blog Card And show Blog data
const blog = blogs.slice(0, 4);
const blogM = blogs.slice(0, 3);
const blogS = blogs.slice(0, 2);
// Wrap List For Show Blogs
const BlogContainer = ()=>{
    return (
        <>
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 lg:px-6 lg:py-10 hidden" style={{rowGap:"50px",columnGap:"14px"}}>
            {blog.map((data,index)=>(
                <BlogCard data={data}/>
            ))}
        </div>
{/* md responsive */}
        <div className="md:flex md:flex-row md:gap-4 md:pr-6 md:py-10 lg:hidden hidden  md:min-w-full min-w-[75%] overflow-x-scroll blog-scrollbar" style={{rowGap:"50px",columnGap:"14px"}}>
            {blogM.map((data,index)=>(
                <BlogCard data={data}/>
            ))}
        </div>
{/* sm responsive */}
        <div className="flex flex-row gap-4 pr-6 py-10 lg:hidden md:hidden  sm:min-w-full min-w-[75%] overflow-x-scroll blog-scrollbar" style={{rowGap:"50px",columnGap:"14px"}}>
            {blogS.map((data,index)=>(
                <BlogCard data={data}/>
            ))}
        </div>
        </>
    )
}





// Sorted And Blogs Function
const BlogList = ()=>{
    return (
        <div className='w-full overflow-auto'>
            
            <BlogContainer/>
           
        </div>
    )
}

// Blog Component Body
const BlogBody = () => {
    return (
        <>
            <div className="flex flex-row overflow-hidden lg:gap-x-[40px] gap-x-[30px] p-[26px] lg:[40px]">
                {/* Read More And Best Tag */}
               
                
                {/* Blog Lists */}
                <BlogList/>
            </div>
        </>
    )
}

export default BlogBody
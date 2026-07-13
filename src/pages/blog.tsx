
import Browsecategories from "../components/browsecategories";
import Header from "../components/header";
import News from "../components/news";
import Pagebanner from "../components/pagebanner";
import Footer from "../components/footer";
const Blog = () => {
  const blog = [
    {
      card: (
        <News
          className={"xl:flex-col flex-col gap-3 "}
          img={"/images/blog-1.jpg"}
          title={"Drill vs Saw Tools Different Uses"}
          detail={
            "Lkjhf oum siioiis naiooque prewtibus et maonis dis pariopient monois, nioscetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa..."
          }
          size={"text-xl"}
          imgsize={" xl:h-55"}
          date={"January 28, 2022"}
        />
      ),
    },
    {
      card: (
        <News
          className={"xl:flex-col flex-col gap-3 "}
          img={"/images/blog-2.jpg"}
          title={"Drill vs Saw Tools Different Uses"}
          detail={
            "Lkjhf oum siioiis naiooque prewtibus et maonis dis pariopient monois, nioscetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa..."
          }
          size={"text-xl"}
          imgsize={" xl:h-55"}
          date={"January 28, 2022"}
        />
      ),
    },
    {
      card: (
        <News
          className={"xl:flex-col flex-col gap-3 "}
          img={"/images/blog-2.jpg"}
          title={"Drill vs Saw Tools Different Uses"}
          detail={
            "Lkjhf oum siioiis naiooque prewtibus et maonis dis pariopient monois, nioscetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa..."
          }
          size={"text-xl"}
          imgsize={" xl:h-55"}
          date={"January 28, 2022"}
        />
      ),
    },
    {
      card: (
        <News
          className={"xl:flex-col flex-col gap-3 "}
          img={"/images/blog-4.jpg"}
          title={"Drill vs Saw Tools Different Uses"}
          detail={
            "Lkjhf oum siioiis naiooque prewtibus et maonis dis pariopient monois, nioscetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa..."
          }
          size={"text-xl"}
          imgsize={" xl:h-55"}
          date={"January 28, 2022"}
        />
      ),
    },
    {
      card: (
        <News
          className={"xl:flex-col flex-col gap-3 "}
          img={"/images/blog-1.jpg"}
          title={"Drill vs Saw Tools Different Uses"}
          detail={
            "Lkjhf oum siioiis naiooque prewtibus et maonis dis pariopient monois, nioscetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa..."
          }
          size={"text-xl"}
          imgsize={" xl:h-55"}
          date={"January 28, 2022"}
        />
      ),
    },
  ];
  const articles = [
    {
      img: "/images/blog-2.jpg",
      detai:
        "Drill vs Saw Tools Different Uses",
    },
    {
      img: "/images/blog-3.jpg",
      detai:
        "Drill vs Saw Tools Different Uses",
    },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="xl:px-34 lg:px-15 px-4">
        <Browsecategories />
      </div>
      <div>
        <Pagebanner title={"News"} subtitle={"Home / News"} />
      </div>
      <div className="grid xl:grid-cols-3  xl:px-34 lg:px-15 px-4  gap-4 py-10">
        <div className="col-span-2 grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-7">
          {blog.map((b, index) => (
            <div className="w-full" key={index}>{b.card}</div>
          ))}
        </div>
        <div className="md:block  xl:block hidden">
            <div className="flex flex-col gap-6">
          <div className=" border-2 border-x-0 border-t-0">
            <h1 className="text-2xl font-semibold">Recent Articles</h1>
          </div>
          <div className="flex flex-col gap-3">
            {articles.map((a,index)=>(
                 <div key={index} className="flex gap-3">
                     <div>
                        <img className="h-22 w-50" src={a.img} alt="" />
                     </div>
                     <div className="text-xl font-semibold">
                        {a.detai}
                     </div>
                 </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
             <div className=" border-2 border-x-0 border-t-0">
            <h1 className="text-2xl font-semibold">Promo Image</h1>
          </div>
          <div>
            <img className="h-140" src="/images/banner1.jpg" alt="" />
          </div>
            <button className="px-4 font-bold text-white py-3 hover:bg-amber-400 cursor-pointer bg-blue-950 w-40 text-sm">
                SHOP NOW
            </button>
          </div>
        </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Blog;

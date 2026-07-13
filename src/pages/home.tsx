import Header from "../components/header";
import ServiceCard from "../components/servicecard";
import CategoryCard from "../components/categorycard";
import Heading from "../components/heading";
import Preminumcard from "../components/preminumcard";
import Banner from "../components/banner";
import News from "../components/news";
import BrandsCard from "../components/brandscard";
import Footer from "../components/footer";
import Browsecategories from "../components/browsecategories";
import GoToTop from "../components/GoToTop";
import ProductCard from "../components/productcard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "@/data/products";
import productsData from "@/data/products";
const Home = () => {
  const productGroups = [
    {
      card: (
        <ProductCard
          img="/images/shop1.jpg"
          brandname="AYRELA"
          productname="CARPESER DUAL COLOUR WIRE"
          price="$1500.00"
          originalprice="$1200.00"
          classname="h-50!"
          space="gap-12"
          padding=""
        />
      ),
    },
    {
      card: (
        <ProductCard
          img="/images/shop-2.jpg"
          brandname="AYRELA"
          productname="CARPESER DUAL COLOUR WIRE"
          price="$1500.00"
          originalprice="$1200.00"
          classname="h-50!"
          space=""
          padding=""
        />
      ),
    },
    {
      card: (
        <ProductCard
          img="/images/shop-3.jpg"
          brandname="AYRELA"
          productname="CARPESER DUAL COLOUR WIRE"
          price="$1500.00"
          originalprice="$1200.00"
          classname="h-50!"
          space="gap-7"
          padding=""
        />
      ),
    },
    {
      card: (
        <ProductCard
          img="/images/shop1.jpg"
          brandname="AYRELA"
          productname="CARPESER DUAL COLOUR WIRE"
          price="$1500.00"
          originalprice="$1200.00"
          classname="h-50!"
          space="gap-7"
          padding=""
        />
      ),
    },
    {
      card: (
        <ProductCard
          img="/images/shop-2.jpg"
          brandname="WIOUS"
          productname="CARPASER STEPPER MOTOS"
          price="$800.00"
          originalprice="$700.00"
          classname="h-50!"
          space="gap-4"
          padding=""
        />
      ),
    },

    {
      card: (
        <ProductCard
          img="/images/shop-4.jpg"
          brandname="PRIDA"
          productname="CARPASER LINEAR MOTORS"
          price="$1000.00"
          originalprice="$950.00"
          classname="h-50!"
          space="gap-4"
          padding=""
        />
      ),
    },
    {
      card: (
        <ProductCard
          img="/images/shop-3.jpg"
          brandname="PRIDA"
          productname="CARPASER LINEAR MOTORS"
          price="$1000.00"
          originalprice="$950.00"
          classname="h-50!"
          space="gap-4"
          padding=""
        />
      ),
    },
  ];

  const [activeslide, setActiveSlide] = useState<number>(1);
  const [products] = useState<any[]>(productsData);
  const router = useNavigate();
  function gotoproduct(item: any) {
    // router("/product", {
    //   state: {
    //     img: item.img,
    //     brandname: item.brandname,
    //     productname: item.productname,
    //     price: item.price,
    //     originalprice: item.originalprice,
    //      vendor: item.vendor,
    //       size:item.size,
    //       description:item.description,
    //       type: item.type,
    //       stock:item.stock,
    //       views:item.views,
    //       sold:item.sold,
    //       additional:item.additional

    //   },
    // });
    router({ pathname: "/product", search: `?id=${item.id}` });
  }
  const categorycard = [
    {
      CategoryCard: (
        <CategoryCard
          img={"/images/image-6.jpg"}
          title={"Power Lighting"}
          detail={"Et harum qum rerum facilis est t expedita marques.."}
        />
      ),
    },
    {
      CategoryCard: (
        <CategoryCard
          img={"/images/image-7.jpg"}
          title={"Engine & Drivetrain"}
          detail={"Marques tels rerum facilis est et expedita tellus."}
        />
      ),
    },
    {
      CategoryCard: (
        <CategoryCard
          img={"/images/image-8.jpg"}
          title={"Brake & Suspensions"}
          detail={"Rhuyes ulrers rerum facilis est et expedita oreums."}
        />
      ),
    },
    {
      CategoryCard: (
        <CategoryCard
          img={"/images/image-9.jpg"}
          title={"Wheels & Tires"}
          detail={"Uleruees rhues rerum facilis est et expedita oreums."}
        />
      ),
    },
    {
      CategoryCard: (
        <CategoryCard
          img={"/images/image-10.jpg"}
          title={"Custome Wheels"}
          detail={"Phues hiuese rerum facilis est et expedita phues."}
        />
      ),
    },
    {
      CategoryCard: (
        <CategoryCard
          img={"/images/image-10.jpg"}
          title={"Custome Wheels"}
          detail={"Phues hiuese rerum facilis est et expedita phues."}
        />
      ),
    },
  ];
  const servicecard = [
    {
      card: (
        <ServiceCard
          img={"/images/download.webp"}
          title={"ACCESSORIES"}
          subtitle={"Tyres"}
        />
      ),
    },
    {
      card: (
        <ServiceCard
          img={"/images/icon-2.png"}
          title={"BODY PARTS"}
          subtitle={"Engine"}
        />
      ),
    },
    {
      card: (
        <ServiceCard
          img={"/images/icon-3.png"}
          title={"KEY HOLE"}
          subtitle={"Lock"}
        />
      ),
    },
    {
      card: (
        <ServiceCard
          img={"/images/icon-5.png"}
          title={"FILTER"}
          subtitle={"Vehicle"}
        />
      ),
    },
    {
      card: (
        <ServiceCard
          img={"/images/icon-5.png"}
          title={"FILTER"}
          subtitle={"Vehicle"}
        />
      ),
    },
    {
      card: (
        <ServiceCard
          img={"/images/icon-4.png"}
          title={"SEATS & COVERS"}
          subtitle={"Car"}
        />
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-12">
        <div>
          <Header />
        </div>
        <div className="flex flex-col xl:px-34 lg:px-15 px-4 gap-10">
          <div>
            <Browsecategories />
          </div>
          <div className="  ">
            <div className="  flex xl:grid xl:grid-cols-4 flex-col-reverse md:flex-1   md:gap-3 gap-3 py-4 xl:py-16 ">
              <div className=" grid xl:grid-cols-2 sm:grid-cols-2 col-span-2 gap-3">
                <div className="grid grid-rows-2 md:gap-1 gap-11 xl:gap-3 lg:gap-13">
                  <div>
                    <Banner
                      img={"/images/banner5.jpg"}
                      classname={"xl:h-72 w-screen "}
                      off={"30% OFF"}
                      textcolour={"text-orange-500 text-6xl "}
                      title={"MEGA SALE"}
                      description={"FOR ALL WHEELS & TYRES ACCESSORIES"}
                      bannerclass={"text-center  md:py-0 "}
                    />
                  </div>
                  <div>
                    <Banner
                      img={"/images/banner4.jpg"}
                      classname={"xl:h-72 w-screen"}
                      off={"INTERIOR AUTO REDESIGN"}
                      textcolour={"text-yellow-500 text-4xl "}
                      title={"BIG SALE"}
                      description={"FOR ALL WHEELS & TYRES ACCESSORIES"}
                      bannerclass={"text-center w-full  md:py-0 py-8"}
                    />
                  </div>
                </div>
                <div className="">
                  <Banner
                    title={"UPTO 40% OFF"}
                    description={""}
                    img={"/images/banner1.jpg"}
                    classname={"xl:h-148 h-full w-screen"}
                    off={"WHEELS & TYRES"}
                    textcolour={"text-amber-400 md:text-5xl text-4xl"}
                    bannerclass={
                      "flex flex-col md:gap-50  md:py-30  text-center"
                    }
                  />
                </div>
              </div>
              <div className="xl:col-span-2 ">
                <Banner
                  title={"NEW ARRIVALS"}
                  description={""}
                  img={"/images/banner3.jpg"}
                  classname={" w-full xl:h-148  "}
                  off={" EXCITING OFFERS UPTO 60% OFF"}
                  textcolour={"text-amber-400 text-4xl "}
                  bannerclass={"flex flex-col  xl:py-30 px-4 py-5"}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Heading title={"Our Services"} />
            </div>
            <div className="grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-1 gap-4 ">
              {servicecard.map((servicecard, index) => (
                <div key={index}>{servicecard.card}</div>
              ))}
            </div>
          </div>
          <div>
            <Heading title={"Our Categories"} />
            <div className="grid lg:grid-cols-3 gap-16 md:grid-cols-2 grid-cols-1 ">
              {categorycard.map((card, index) => (
                <div key={index}>{card.CategoryCard}</div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <Heading title={"Popular Categories"} />
            </div>
            <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-7">
              {products.map((item) => (
                <div key={item.id} onClick={() => gotoproduct(item)}>
                  <ProductCard
                    img={item.img}
                    brandname={item.brandname}
                    productname={item.productname}
                    price={item.price}
                    originalprice={item.originalprice}
                    classname=""
                    space=""
                    padding=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:py-18 py-3">
            <div className="grid md:grid-cols-2  grid-cols-1 md:h-55 h-110 gap-7">
              <Preminumcard
                img={"/images/img1.jpg"}
                offer={"amazing value"}
                detail={"Premium Quality All New Performance Parts"}
                classname={"group-hover:bg-black/50"}
              />
              <Preminumcard
                img={"/images/img2.jpg"}
                offer={"exciting offer"}
                detail={"Good Quality Service For all Vehicles Parts"}
                classname={"group-hover:bg-blue-950/50"}
              />
            </div>
          </div>
          <div>
            <div className=" ">
              <div className={` `}>
                <div>
                  <div>
                    <div className="max-w-8xl relative ">
                      <Swiper
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        keyboard={{ enabled: true, onlyInViewport: true }}
                        centeredSlides={true}
                        onSlideChange={(swiper) =>
                          setActiveSlide(swiper.realIndex)
                        }
                        loop={true}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination, Keyboard, Autoplay]}
                        className="mySwiper"
                      >
                        {productGroups.map((pcard, index) => (
                          <SwiperSlide className="py-10 flex items-center justify-center">
                            <div
                              className={`flex items-center justify-center ${
                                activeslide === index
                                  ? "bg-yellow-400 transition-all delay-150 p-6 py-10 scale-110 h-100"
                                  : ""
                              }`}
                              key={index}
                            >
                              {pcard.card}
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-23 border">
          <img
            className="h-23 w-full
          "
            src="/images/Capture3.PNG"
            alt=""
          />
        </div>
        <div className="xl:px-34 lg:px-16 px-4">
          <div className="px-3 lg:px-3">
            <div>
              <Heading title={"Latest News"} />
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-1 grid-cols-1 gap-7">
              <div className="relative">
                <div className="absolute top-38 bg-blue-950 z-20 left-6  w-12 px-3 py-3">
                  <span className="text-white font-bold">26 Jan</span>
                </div>
                <News
                  className={"flex-col gap-16"}
                  img={"/images/blog1.jpg"}
                  title={"10 Precaution maintenance tips"}
                  detail={
                    "Poiuy oum siioiis naiooque prewtibus et maonis dis pariopient monois, nioscetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. “Ridiculus mus mauris vitae ultricies leo. Non enim praesent elementum facilisis leo vel fringilla. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.” Sapien faucibus et molestie ac feugiat..."
                  }
                  size={"text-xl "}
                  imgsize={""}
                  date={""}
                />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 gap-3 px-3">
                <News
                  className={"xl:flex-row flex-col   gap-9"}
                  img={"/images/blog3.jpg"}
                  title={"Which parts are essential to sport car?"}
                  detail={
                    "Jhgfd oum siioiis naiooque prewtibus et maonis dis pariopient monois, ni..."
                  }
                  size={"text-xl"}
                  imgsize={"xl:w-130 w-full xl:h-50"}
                  date={"January 28, 2022"}
                />
                <News
                  className={"xl:flex-row flex-col   gap-9 "}
                  img={"/images/blog1.jpg"}
                  title={"Best engine repair tips for car"}
                  detail={
                    "Jhgfd oum siioiis naiooque prewtibus et maonis dis pariopient monois, ni..."
                  }
                  size={"text-xl"}
                  imgsize={"xl:w-130 xl:h-50 w-full"}
                  date={"January 28, 2022"}
                />
                <News
                  className={"xl:flex-row flex-col  gap-6 "}
                  img={"/images/blog2.jpg"}
                  title={"Best engine repair tips for car"}
                  detail={
                    "Jhgfd oum siioiis naiooque prewtibus et maonis dis pariopient monois, ni..."
                  }
                  size={"text-xl"}
                  imgsize={"xl:w-130 xl:h-50 w-full"}
                  date={"January 28, 2022"}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Heading title={"WE CARRY TOP BRANDS"} />
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-10">
              <BrandsCard img={"/images/client-icon-1.png"} />
              <BrandsCard img={"/images/client-icon-2.png"} />
              <BrandsCard img={"/images/client-icon-3.png"} />
              <BrandsCard img={"/images/icon7.png"} />
              <BrandsCard img={"/images/client-icon-5.png"} />
              <BrandsCard img={"/images/client-icon-6.png"} />
              <BrandsCard img={"/images/client-icon-7.png"} />
              <BrandsCard img={"/images/icon8.png"} />
            </div>
          </div>
        </div>
        <div>
          <GoToTop />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;

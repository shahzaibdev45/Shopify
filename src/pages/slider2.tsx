import Slider from "react-slick";
import ProductCard from "../components/productcard";
import { ArrowLeft, ArrowRight } from "lucide-react";
const Slider2 = () => {
  const NextArrow = ({ onClick }: { onClick:any }) =>  ( 
    <div onClick={onClick} className="absolute right-0 top-0 h-11 w-11  hover-bg bg-red-400 cursor-pointer text-white hover rounded-full flex items-center justify-center">
      <button className="">
        <ArrowRight />
      </button>
    </div>
  );
  const PrevArrow = ({ onClick }: { onClick:any }) =>  ( 
    <div onClick={onClick} className="absolute left-0 z-20 top-0 h-11 w-11 bg-red-400 cursor-pointer text-white hover-bg rounded-full flex items-center justify-center">
      <button className="">
        <ArrowLeft />
      </button>
    </div>   
  );
  var settings = {
     dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true, 
    arrows:true,
    nextArrow:<NextArrow onClick={undefined}/>,
    prevArrow:<PrevArrow onClick={undefined}/>
  };
  return (
    <div className="max-w-3xl p-20">
      <Slider {...settings}>
        <div className="px-6">  
          <ProductCard
            img={"/images/shop-2.jpg"}
            brandname={"HALO"}
            productname={" New Metallic Springs"}
            price={"$850.00"}
            originalprice={"$1000.00"}
            classname={"h-60! w-60!"}
            space={""}
            padding={""}
            buttonsize={""}
          />
        </div>
        <div className="px-6">
          <ProductCard
            img={"/images/shop-3.jpg"}
            brandname={"HALO"}
            productname={" New Metallic Springs"}
            price={"$850.00"}
            originalprice={"$1000.00"}
            classname={"h-60! w-60!"}
            space={""}
            padding={""}
            buttonsize={""}
          />
        </div>
        <div className="px-6">
          <ProductCard
            img={"/images/shop-2.jpg"}
            brandname={"HALO"}
            productname={" New Metallic Springs"}
            price={"$850.00"}
            originalprice={"$1000.00"}
            classname={"h-60! w-60!"}
            space={""}
            padding={""}
            buttonsize={""}
          />
        </div>
        <div className="px-6">
          <ProductCard
            img={"/images/shop-2.jpg"}
            brandname={"HALO"}
            productname={" New Metallic Springs"}
            price={"$850.00"}
            originalprice={"$1000.00"}
            classname={"h-60! w-60!"}
            space={""}
            padding={""}
            buttonsize={""}
          />
        </div>
      </Slider>
    </div>
  );
};
export default Slider2;

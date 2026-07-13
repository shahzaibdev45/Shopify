import Slider from "react-slick";
import ProductCard from "../components/productcard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slider = () => {
  const PrevArrow =({ onClick }: { onClick: any })=> (
      <button
      onClick={onClick}
      className="absolute top-1 left-0  z-20 h-13 w-13 cursor-pointer hover-bg rounded-full bg-red-500 flex items-center text-white justify-center"
    >
      <ArrowLeft />
    </button>
  );
  const NextArrow =({ onClick }: { onClick: any })=> (
      <button
      onClick={onClick}
      className="absolute top-1 z-20 right-0 cursor-pointer flex items-center hover-bg justify-center text-white h-13 w-13 rounded-full bg-red-500"
    >
      <ArrowRight />
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear", 
    swipeToSlide: true,
    arrows: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
  };
  return (
    <div className="max-w-4xl py-10 px-8">
     <div className="px-11">
       <Slider className="" {...settings}>
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
            img={"/images/shop-4.jpg"}
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
      </Slider>
     </div>
    </div>
  );
};

export default slider;

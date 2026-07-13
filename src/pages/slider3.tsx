import Slider from "react-slick";
import ProductCard from "../components/productcard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Slider3 = () => {
  const NextArrow = ({ onClick }: { onClick: any }) => (
    <div
      onClick={onClick}
      className="absolute -right-1 -top-10 transform -translate-y-1/2 z-20 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer text-white bg-yellow-400 hover:bg-amber-400"
    >
      <ArrowRight size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick: any }) => (
    <div
      onClick={onClick}
      className="absolute -top-10 right-20 transform -translate-y-1/2 z-20 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer text-white bg-yellow-400 hover:bg-amber-400"
    >
      <ArrowLeft size={24} />
    </div>
  );

  const settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <NextArrow onClick={undefined} />,
    prevArrow: <PrevArrow onClick={undefined} />,
  };

  return (
    <div className="relative max-w-6xl mx-auto px-10 py-20">
      <Slider {...settings}>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="px-4">
            <ProductCard
              img={"/images/shop-3.jpg"}
              brandname={"PRIDA"}
              productname={"CARPASER LINEAR MOTORS"}
              price={"$1000.00"}
              originalprice={"$950.00"}
              classname={"h-50! w-50!"}
              space={"gap-4"}
              padding={""}
              buttonsize={"h-8! w-8!"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slider3;

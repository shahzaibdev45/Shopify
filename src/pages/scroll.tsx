import { Navigation, Pagination,Keyboard } from "swiper/modules";
import ProductCard from "../components/productcard";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";


const scroll = () => {
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
          space="gap-2"
          padding=""
          buttonsize=""
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
          space="gap-2"
          padding=""
          buttonsize=""
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
          buttonsize=""
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
          buttonsize=""
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
          buttonsize="h-8! w-8!"
        />
      ),
    },
  ];

  const [activeslide, setActiveSlide] = useState<number>(1);
  return (
    <div>
      <div className="max-w-8xl p-20">
        <Swiper
          keyboard={{ enabled: true, onlyInViewport: true }}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          loop={true}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination,Keyboard]}
        >
          {productGroups.map((pcard, index) => (
            <SwiperSlide className="py-10 flex items-center justify-center">
              <div
                className={`flex items-center justify-center ${
                  activeslide === index
                    ? "bg-yellow-400 p-6 py-10 scale-130"
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
  );
};

export default scroll;

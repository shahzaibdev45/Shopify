import Browsecategories from "../components/browsecategories";
import Header from "../components/header";
import Pagebanner from "../components/pagebanner";
import ProductCard from "../components/productcard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Logs, VectorSquare } from "lucide-react";
import GoToTop from "../components/GoToTop";
import Footer from "../components/footer";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const Shop = () => {
  const category = [
    { name: "Car Motors", sign: "+" },
    { name: "Car Parts", sign: "+" },
  ];
  const [avalibility,setAvailability] = useState([{ name: "In Stock(7) ", type:"stock" }, { name: "outstock(1) ",type:"outstock" }]);
   const [filtered,setFiltered] = useState<any[]>([])
   function filtercard(status:any){
     if(status === "stock")
     {
       setFiltered(productcard.filter((c)=> c.type))
     }
   
     else if(status === "outstock")
     {
       setFiltered(productcard.filter((c)=> c.type))
     }
      else {
         setFiltered(productcard)
      }
   } 
  useEffect(() => {
      setFiltered(productcard)
  },[])
  const Productcheckbox = [
    { name: "Drills(7) " },
    { name: "Machines(1) " },
    { name: "Power Box" },
    { name: "Saw" },
  ];
  const buttons = [{ name: "clear" }, { name: "APPLY" }];
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
          space="gap-2"
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
          space="gap-2"
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
          space="gap-2"
          padding=""
        
        />
      )
      ,type:"stock"
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
      type:"stock"
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
      type:"outstock"
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
      type:"outstock"
    },
  ];
  const productcard = [
    {
      card: (
        <ProductCard
          img={"/images/shop1.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
       />
      ),
       type:"outstock"
    },
    {
      card: (
        <ProductCard
          img={"/images/shop-2.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
      
        />
      ),
       type:"outstock"
    },
    {
      card: (
        <ProductCard
          img={"/images/shop-4.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
        
        />
      ),
    },
    {
      card: (
        <ProductCard
          img={"/images/shop1.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
        
        />
      ),
    },
    {
      card: (
        <ProductCard
          img={"/images/shop-3.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
        
        />
      ),
    },
    {
      card: (
        <ProductCard
          img={"/images/shop1.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
         
        />
      ),
    },
    {
      card: (
        <ProductCard
          img={"/images/shop-4.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
        
        />
      ),
      type:"outstock"
    },
    {
      card: (
        <ProductCard
          img={"/images/shop1.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
         
        />
      ),
      type:"outstock"
    },
    {
      card: (
        <ProductCard
          img={"/images/shop-2.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
        
        />
      ),
    },
    {
      card: (
        <ProductCard
          img={"/images/shop-4.jpg"}
          brandname={"HALO"}
          productname={" New Metallic Springs"}
          price={"$850.00"}
          originalprice={"$1000.00"}
          classname={""}
          space={""}
          padding={""}
        
        />
      ),
    },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="xl:px-34  lg:px-15 px-4">
        <Browsecategories />
      </div>
      <div>
        <Pagebanner title={"Collection"} subtitle={"Home / Demo 01 - Shop 1"} />
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1  xl:px-34 lg:px-16 px-3 py-3">
      <div className="xl:block lg:block md:block hidden">
          <div className="flex flex-col gap-4 px-2">
          <div className="py-4 border-2 border-x-0 border-t-0">
            <h1 className="text-2xl font-semibold">Category</h1>
          </div>
          <div>
            {category.map((category, index) => (
              <div
                key={index}
                className="flex items-center group justify-between"
              >
                <div className="text-[17px]  group-hover:text-amber-400 cursor-pointer ">
                  {category.name}
                </div>
                <div className="text-2xl font-bold group-hover:text-amber-400 cursor-pointer">
                  {category.sign}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="py-4 border-2 border-x-0 border-t-0">
              <h1 className="text-2xl font-semibold">Availability</h1>
            </div>
            <div className="flex flex-col gap-4 py-3">
              {avalibility.map((c, index) => (
                <div key={index}>
                  <div onClick={()=> filtercard(c.type)} className="flex  items-center cursor-pointer  space-x-3">
                   <Checkbox id={c.name} className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-950" />
                    <Label htmlFor={c.name}>{c.name} </Label>
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                {buttons.map((b, index) => (
                  <div
                    key={index}
                    className="h-8  bg-blue-950 cursor-pointer hover:bg-amber-400 py-2 text-sm flex items-center justify-center font-bold text-white px-4 uppercase"
                  >
                    {b.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <div className="py-4 border-2 border-x-0 border-t-0">
                <h1 className="text-2xl font-semibold">Price</h1>
              </div>
              <div>
                <p>The highest price is $906.00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1>From$</h1>
              <input
                placeholder="0"
                className="h-14 px-4 w-full border border-stone-300 focus:outline-0 focus:border-black"
                type="number"
              />
            </div>
            <div>
              <h1>To$</h1>
              <input
                placeholder="906.00"
                className="h-14 px-4 w-full border border-stone-300 focus:outline-0 focus:border-black"
                type="number"
              />
            </div>
            <div className="flex gap-3">
              {buttons.map((b, index) => (
                <div
                  key={index}
                  className="h-8  bg-blue-950 cursor-pointer hover:bg-amber-400 py-2 text-sm flex items-center justify-center font-bold text-white px-4 uppercase"
                >
                  {b.name}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="py-4 border-2 border-x-0 border-t-0">
                  <h1 className="text-2xl font-semibold">Products</h1>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {Productcheckbox.map((c, index) => (
                  <div key={index}>
                    <div className="flex items-center cursor-pointer  space-x-3">
                       <Checkbox />
                      <span className="">{c.name}</span>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  {buttons.map((b, index) => (
                    <div
                      key={index}
                      className="h-8  bg-blue-950 cursor-pointer hover:bg-amber-400 py-2 text-sm flex items-center justify-center font-bold text-white px-4 uppercase"
                    >
                      {b.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="py-4 border-2 border-x-0 border-t-0">
                  <h1 className="text-2xl font-semibold">Brands</h1>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {Productcheckbox.map((c, index) => (
                  <div key={index}>
                    <div className="flex items-center cursor-pointer  space-x-3">
                       <Checkbox />
                      <span className="">{c.name}</span>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  {buttons.map((b, index) => (
                    <div
                      key={index}
                      className="h-8  bg-blue-950 cursor-pointer hover:bg-amber-400 py-2 text-sm flex items-center justify-center font-bold text-white px-4 uppercase"
                    >
                      {b.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-3">
              <button className="h-9 w-full bg-blue-950 hover:bg-amber-400 cursor-pointer text-white font-semibold flex items-center justify-center">
                CLEAR ALL
              </button>
            </div>
            <div>
              <div className="py-4 border-2 border-x-0 border-t-0">
                <h1 className="text-2xl font-semibold">Hot Deals</h1>
              </div>
              <div>
                <Swiper
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={1}
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
                        className={`flex items-center justify-center 
                           
                              `}
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
        <div className="col-span-2 px-4">
          <div className="h-14 border border-stone-300 flex items-center justify-center xl:justify-between px-4">
          <div className="xl:block md:block hidden">
              <div className="flex items-center">
              <button className="h-10 w-10 text-white  flex items-center justify-center bg-blue-950">
                <VectorSquare />
              </button>
              <button className="h-10 w-10 border border-stone-300  flex items-center justify-center">
                <Logs />
              </button>
            </div>
          </div>
            <div className="flex gap-2">
              <p>Sort By</p>
              <select
                className="w-50 text-white py-1 outline-0 bg-blue-950"
                name=""
                id=""
              >
                <option value="featured">Featured</option>
                <option value="best spelling">Best Spelling</option>
              </select>
            </div>
          </div>

          <div className="grid xl:grid-cols-3  py-4 md:grid-cols-2 grid-cols-1 gap-4">
            {filtered.map((productcard, index) => (
              <div key={index}>{productcard.card}</div>
            ))}{" "}
          </div>
        </div>
      </div>
       <div>
          <GoToTop/>
          <Footer/>
        </div>
    </div>
  );
};

export default Shop;

import { Eye, FilterIcon, Key, X } from "lucide-react";
import Browsecategories from "../components/browsecategories";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagebanner from "../components/pagebanner";
import { useState } from "react";
import Gototop1 from "../components/gototop1";
import ProductCard from "../components/productcard";
import { useSearchParams } from "react-router-dom";
import productsData from "@/data/products";
import React from "react";
import type ProductInterface from "@/data types/product";
import { Button } from "@/components/ui/button";
const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id") || "";
  const [product, setProduct] = useState(
    productsData.filter((item: any) => item.id === Number(id))[0]
  );
  const handleadd = (id:number) => {
     setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const handlesubtract = (id:number) => {
     setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
       .filter((item)=> item.qty > 0)
    );
  };
  const [cart, setCart] = React.useState<ProductInterface[]>([]);
  
  function addcart(product: any) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
  }
   const totalprice = cart.reduce((sum,item)=> sum + item.price * item.qty,0 )
  const data = [
    {
      label: "Price:",
      original: product.price,
      current: product.originalprice,
    },
    { label: "Size:", size: product.size },
    { label: "Vendor:", value: product.vendor },
    { label: "Type:", value: product.type },
    { label: "Availability:", value: product.stock, highlight: true },
    { label: "Quantity", iscart:true },
  ];
  const [selectedType, setSelectedType] = useState<number>(0);

  const buttons = [
    { name: "Products description", type: "productdescription" },
    { name: "additional information", type: "additionalinformation" },
    { name: "reviews", type: "reviews" },
  ];

  return (
    // <div>
    //   {product.price}
    // </div>
    <div>
      <div>
        <Header />
      </div>
      <div className="xl:px-34  lg:px-15 px-4">
        <Browsecategories />
      </div>
      <div>
        <Pagebanner
          title={"Product"}
          subtitle={`Home / Demo 10 - Shop 1 / ${product.productname}`}
        />
      </div>
      <div>
        <div className="grid xl:grid-cols-2 grid-cols-1 xl:px-34 lg:px-8 md:px-4 px-3 py-6 xl:py-10  xl:gap-7 gap-3">
          <div>
            <img src={product.img} alt="" />
          </div>
          <div>
            <div>
              <h1 className="text-4xl font-semibold  text-stone-800">
                <span>{product.vendor}</span>
              </h1>
            </div>
            <div className="flex flex-col gap-7 py-8">
              {data.map((data, index) => (
                <div key={index} className="flex gap-16">
                  <div className="w-32 text-stone-600">{data.label} </div>
                  <div className="flex whitespace-nowrap gap-3">
                    <div className="">
                      <span
                        className={
                          data.highlight
                            ? "text-green-600 font-semibold"
                            : "text-stone-800"
                        }
                      >
                        {data.value}
                        {data.size && (
                          <span className="border border-stone-400 rounded-md px-2 py-1 text-sm">
                            {data.size}
                          </span>
                        )}
                        {data.iscart && (
                          <div className="flex">
                            <div
                              onClick={()=> handleadd(product.id)}
                              className="h-7 w-8 cursor-pointer bg-blue-950 text-white text-center"
                            >
                              +
                            </div>
                            <div className="border h-7 w-7 text-center">
                             {cart.find((item) => item.id === product.id)?.qty || 0}
                            </div>
                            <div
                             onClick={()=> handlesubtract(product.id)}
                              className="h-7 w-8 cursor-pointer bg-blue-950 text-white text-center"
                            >
                              -
                            </div>
                          </div>
                        )}
                      </span>
                      <span className="text-blue-900 font-bold">
                        {data.current}
                      </span>
                    </div>
                    <div>
                      <span className="line-through text-stone-300 font-bold">
                        {data.original}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white fixed z-50">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex  fixed right-0 h-full top-0 z-50"
                  >
                    <div>
                      <button className="h-7 w-7 flex items-center justify-center cursor-pointer bg-blue-900 text-white">
                        <X size={18} />
                      </button>
                    </div>
                    <div className="h-screen w-80 bg-white">
                      <div className="py-3 font-thin text-2xl text-stone-600 drop-shadow-sm px-2 bg-white">
                        MY CART  {totalprice.toFixed(2)}
                      </div>
                      <div className="flex p-4 gap-2">
                        <div>
                          <img className="h-30 w-30" src={item.img} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="font-semibold text-xl">
                            {item.productname}
                          </h1>
                          <p className=" text-stone-400">{item.size}</p>
                          <p className=""> {item.price} </p>
                          <div className="flex items-center gap-2">
                            <Button onClick={()=> handlesubtract(item.id)} variant="outline">-</Button>
                            <span>{item.qty}</span>
                            <Button   onClick={()=> handleadd(item.id)} variant="outline">+</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => addcart(product)}
                  className="px-7 py-3 text-sm text-white bg-blue-950 font-bold hover:bg-amber-400 cursor-pointer transition-colors delay-300"
                >
                  ADD TO CART
                </button>
                <button className="px-7 py-3 text-sm text-white bg-blue-950 font-bold hover:bg-amber-400 cursor-pointer transition-colors delay-300">
                  BUY IT NOW
                </button>
              </div>
              <div>
                <button className="px-7 py-3 text-sm text-white bg-blue-950 font-bold hover:bg-amber-400 cursor-pointer transition-colors delay-300">
                  ADD TO WHITELIST
                </button>
              </div>
            </div>
            <div className="py-4">
              <div className="flex gap-1 items-center">
                <Eye size={16} />
                <span className="font-bold text-blue-950">
                  {" "}
                  {product.views}{" "}
                </span>
                <p className="text-stone-600">
                  People are viewing this right now
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <FilterIcon size={16} />
                <p className="text-stone-600">Sold</p>
                <span className="font-bold text-blue-950">
                  {" "}
                  {product.sold}{" "}
                </span>
                <p className="text-stone-600">Products in last 10 Hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:px-34 lg:px-8 md:px-4 px-3">
          <div>
            <div className="flex xl:flex-row flex-col lg:flex-row items-center gap-2">
              {buttons.map((button, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedType(index)}
                  className={`py-3 px-5 flex items-center justify-center cursor-pointer uppercase font-semibold ${
                    selectedType === index
                      ? "bg-amber-400 text-white"
                      : "bg-blue-950 text-white"
                  }`}
                >
                  {button.name}
                </div>
              ))}
            </div>
            <div className="border h-70 py-3 border-stone-300 px-2 ">
              {selectedType == 0 && (
                <div>
                  <p>{product.description}</p>
                </div>
              )}
              {selectedType == 1 && (
                <div className="flex flex-col gap-3">
                  <p>{product.additional}</p>
                </div>
              )}
              {selectedType == 2 && (
                <div className="flex flex-col gap-3">
                  <p>
                    hello Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Aperiam, est repellat fuga doloribus modi
                    voluptatibus! Inventore earum architecto nisi, ad, ipsam
                    magni quasi iusto deserunt non sequi illum necessitatibus.
                    Odit?
                  </p>
                  <p>
                    hello Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Aperiam, est repellat fuga doloribus modi
                    voluptatibus! Inventore earum architecto nisi, ad, ipsam
                    magni quasi iusto deserunt non sequi illum necessitatibus.
                    Odit?
                  </p>
                  <p>
                    hello Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Aperiam, est repellat fuga doloribus modi
                    voluptatibus! Inventore earum architecto nisi, ad, ipsam
                    magni quasi iusto deserunt non sequi illum necessitatibus.
                    Odit?
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 xl:py-6 py-4">
            <div className=" flex flex-col items-center justify-center gap-2">
              <h1 className="decoration underline text-2xl font-bold hover:text-amber-400 transition-colors delay-500">
                Enquiry about product?
              </h1>
              <h1 className="text-3xl text-stone-800 font-semibold">
                Recommended Products
              </h1>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-1  gap-7">
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
              <ProductCard
                img={"/images/shop-4.jpg"}
                brandname={"HALO"}
                productname={"CARPESER CAR STEARING"}
                price={"$500.00"}
                originalprice={"$300.00"}
                classname={""}
                space={""}
                padding={""}
              />
              <ProductCard
                img={"/images/shop-2.jpg"}
                brandname={"AYRELA"}
                productname={"CARPESER DUAL COLOUR WIRE"}
                price={"$1500.00"}
                originalprice={"$1200.00"}
                classname={""}
                space={""}
                padding={""}
              />
            </div>
          </div>
        </div>
        <div>
          <Gototop1 />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Product;

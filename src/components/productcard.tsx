import { Copy, Handbag, Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
const ProductCard = ({
  img,
  brandname,
  productname,
  originalprice,
  price,
  classname,
  space,
  padding,
  onClick
}: {
  img: string;
  price: string;
  originalprice: string;
  brandname: string;
  productname: string;
  classname: string;
  space: string;
  padding: string;
   onClick?: () => void;
}) => {
  return (
  
      <div className="">
        <div onClick={onClick} className="group">
          <div
            className={` flex items-center relative cursor-pointer w-full overflow-hidden  ${classname}`}
          >
            <img
              className={`w-full h-full object-center object-cover`}
              src={img}
              alt=""
            />
            <div
              className={`group-hover:bg-stone-200/40 h-full w-full px-5 hidden group-hover:absolute top-0 left-0 group-hover:flex items-center justify-center`}
            >
              <div className=" h-11 w-30  bg-blue-950">
                <div className="flex ">
                  <button className="text-white hover:bg-amber-400 transition-colors h-11 px-3 hover:cursor-pointer   flex items-center justify-center">
                    <Copy size={15} />
                  </button>
                  <button className="text-white hover:bg-amber-400 transition-colors h-11 px-3 hover:cursor-pointer   flex items-center justify-center">
                    <Heart size={15} />
                  </button>
                  <button className="text-white hover:bg-amber-400 transition-colors h-11 px-3 hover:cursor-pointer  w-full  flex items-center justify-center">
                    <Search size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <div
              className={`flex flex-col gap-3 py-1 xl:justify-center  xl:items-start ${padding}`}
            >
              <p className="text-xs">{brandname}</p>
              <h1 className="text-[19px] tracking-normal  font-bold font-sans uppercase hover:text-amber-400 transition-colors">
                {productname}
              </h1>
            </div>
            <div
              className={`flex gap-5 items-center justify-between   lg:items-center xl:items-start ${padding}`}
            >
              <div className="flex  gap-3 items-center  py-2">
              <div>  <p className="font-thin line-through">{originalprice}</p></div>
                <div>
                  <p className="font-bold text-blue-950 text-[18px] ">
                    {price}
                  </p>
                </div>
              </div>
              <div className={`flex items-center justify-center py-1 ${space}`}>
                <div>
                  <Button
                    className="rounded-full cursor-pointer h-10 w-10 hover:bg-amber-400 hover:text-white"
                    variant="outline"
                  >
                    <Handbag size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;

import {
  Facebook,
  Handbag,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  PhoneCall,
  Search,
  Share,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const header = () => {
  
  const badge1 = [
    {
      name: "HOME",
    },
    {
      name: "SHOP",
    },
    {
      name: "BLOG",
    },
    {
      name: "CONTACT",
    },
  ];
   const [showhome, setShowHome] = useState(false);
   const [visible,setVisible] = useState<boolean>()
   function ListenToScroll(){
       const HeightToHide = 350;
         const winscroll =
          document.body.scrollTop || document.documentElement.scrollTop;
             if( winscroll >  HeightToHide) {
                 setVisible(true)
             } else{
              setVisible(false)
             }
   } 
   useEffect(()=> {
        window.addEventListener("scroll",ListenToScroll)
   })
  const icon = [
    {icon:<Twitter size={16}/>},
    {icon:<Facebook size={16}/>},
    {icon:<Instagram size={16}/>},
    {icon:<Linkedin size={16}/>},
  ];
  const badge = [
    { name: "home" },
    { name: "shop" },
    { name: "contact" },
    { name: "about" },
  ];
   const homecategory = [
    { name: "Home-1" },
    { name: "Home-2" },
    { name: "Home-3" },
    { name: "Home-4" },
    { name: "Home-5" },
    { name: "Home-6" },
    { name: "Home-7" },
    { name: "Home-8" },
    { name: "Home-9" },
    { name: "Home-10" },
  ];
  return (
    <>
   
             <div className=" z-40 w-full">
               <div className="h-18  xl:py-0 py-2  bg-stone-100 relative flex flex-row   items-center gap-4 justify-between xl:px-40 px-6 lg:px-12">
                <div className="lg:block xl:block md:block hidden">
                     {showhome && (
                <div className="absolute bg-white cursor-pointer border border-stone-300 z-30 top-13 w-50 text-xs">
                  <div>
                    {homecategory.map((category1, index) => (
                      <div
                        key={index}
                        className="border px-2 font-semibold border-t-0 border-x-0 py-4 group"
                      >
                        <span className=" group-hover:text-amber-400 cursor-pointer transition-colors delay-150 ">
                          {category1.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
                 <div className="flex  items-center gap-6">
                     { badge1.map((item, index) => (
                <div className="">
                  <div
                    key={index}
                    className="font-semibold  flex items-center gap-1 cursor-pointer hover:text-amber-400"
                  >
                    {item.name}
                  </div>
                </div>
              ))}
                 </div>
                </div>
                <div className="lg:block md:block xl:block hidden">
                  <div>
                 <div className="flex items-center gap-1 justify-center">
              <div className="flex flex-row items-center justify-center">
                <Link to="/register">
                <button className="font-semibold px-2 hover:text-amber-400 transition-all cursor-pointer border-y-0 border hover: border-l-0 border-stone-300">REGISTER</button>
                </Link>
              <Link to="/login">
                <button className="font-semibold px-2 hover:text-amber-400 transition-all cursor-pointer border-y-0 border hover: border-l-0 border-stone-300">
                    /LOGIN
                </button>
              </Link>
              </div>
              <div className="relative cursor-pointer hover:text-amber-400">
                <Heart />
                <div className="absolute h-3 w-3 z-10 rounded-full bg-red-400 top-0 right-0.5 flex items-center justify-center p-[8px">
                  <span className="text-xs">0</span>
                </div>
              </div>
            </div>
               </div>
                </div>
                  <div className="h-full w-full xl:hidden md:hidden lg:hidden">
                  <div className="flex items-center justify-between py-3">
                  <div>
                    <Menu/>
                  </div>
                  <div className="flex gap-3">
                    <Share/>
                    <Heart/>
                  </div>
                 </div>
              </div>
               </div>
             </div>
   
      <div>
           <div className="xl:block hidden">
        <div className="h-13 bg-stone-100 md:w-full xl:px-4 lg:px-20  border border-x-0 flex items-center justify-center border-stone-300">
          <div className="flex">
            <div className="border relative border-stone-300 text-xs px-4 flex items-center justify-center h-13">
              <div>
                <select name="" id="" className="cursor-pointer outline-0">
                  <option  value="USD">USD</option>
                  <option value="USD">INR</option>
                </select>
              </div>
            </div>
            <div className=" px-8  flex items-center justify-center h-13">
              <span className="uppercase font-semibold text-xs">
                Free shipping for orders over $300
              </span>
            </div>
            <div className="border border-y-0 w-73 border-stone-300"></div>
            <div className="flex items-center px-2 gap-3 border-stone-300">
             {icon.map((icon,index)=>(
              <div key={index} className="text-stone-400  cursor-pointer hover:text-amber-400 transition-colors delay-150">
                {icon.icon}
              </div>
             ))}
            </div>
            <div className=" text-sm px-3 flex items-center justify-center ">
              {badge.map((badge, index) => (
                <div
                  key={index}
                  className="border uppercase cursor-pointer hover:text-amber-400 transition-colors delay-300 border-r-0 font-semibold border-stone-300 text-sm px-3 flex items-center justify-center h-full"
                >
                  {badge.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-100 xl:h-30 md:px-4 flex xl:flex-row lg:flex-wrap py-4 flex-col  items-center justify-center md:gap-7 gap-3">
        <div>
         <Link to="/">
          <img src="images/img6.jpg" alt="" />
         </Link>
        </div>
        <div className="lg:block md:block hidden">
          <div className="h-13 border border-stone-300 w-110 flex sm:items-center">
            <input
              type="text"
              className="h-full w-full px-4 focus:outline-purple-900"
              placeholder="Search for products"
            />
            <button className="h-13 px-3 bg-purple-800 hover:bg-amber-400 hover:text-purple-800 transition-colors delay-300 cursor-pointer text-yellow-400">
              <Search />
            </button>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="xl:flex-row flex-row flex">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div>
                <button className="group-hover:text-amber-400 cursor-pointer">
                  <PhoneCall size={28} />
                </button>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold cursor-pointer">
                  24/7 SUPPORT
                </span>
                <span className="text-stone-700 group-hover:text-amber-400 cursor-pointer">
                  0000 - 123 - 456789
                </span>
              </div>
            </div>
            <div className="md:block hidden">
              <div className="flex items-center gap-4 group">
                <div>
                  <button className="border border-stone-300 px-2 h-13 border-y-0 border-l-0 group-hover:text-amber-400 cursor-pointer">
                    <Handbag size={28} />
                  </button>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold cursor-pointer">
                    MY CART
                  </span>
                  <span className="text-stone-700 text-xs group-hover:text-amber-400 cursor-pointer">
                    0 items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 mx-auto">
            <PhoneCall size={25} />
            <Handbag size={25} />
            <Search size={25} />
          </div>
        </div>
      </div>
         </div>
     
    
    </>
  );
};
export default header;

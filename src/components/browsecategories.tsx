import { Menu, ChevronDown, Heart, Share, } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const login = () => {
    const location = useLocation();
  const [browsecategories, setBrowseCategories] = useState<boolean>(false);
  const [menubar, setMenubar] = useState<boolean>(false);
  function opensidebar() {
    setMenubar(!menubar);
  }

  const categories2 = [
    { name: "Delivery" },
    { name: "Customer Service" },
    { name: "Order Status" },
    { name: "Press Release" },
    { name: "Support" },
    { name: "Store Location" },
  ];
  const badge = [
    {
      id:1,
      name: "HOME",
      path:'/',
       type:"home"
    },
    {
      id:2,
      name: "SHOP",
      path:'/shop',
       type:"shop"
    },
    {
      id:3,
      name: "BLOG",
      path:'/blog',
       type:"blog"
    },
    {
      id:4,
      name: "CONTACT",
      path:'/contact',
       type:"contact"
    },
  ];

  return (
    <div>
      <div>
        <div className="md:h-13 h-full  border border-stone-300 border-x-0 border-t-0  flex md:flex-row flex-col md:justify-between md:py-0 py-4 gap-3">
          <div className="flex items-center md:justify-normal justify-center  md:gap-5 h-full ">
            <div
              onMouseEnter={() => setBrowseCategories(true)}
              onMouseLeave={() => setBrowseCategories(false)}
              className="md:h-full h-13 cursor-pointer  relative md:w-70 w-100 md:px-0 px-4 bg-blue-950 uppercase flex items-center text-white md:justify-center gap-2 font-bold"
            >
              <span>
                <Menu />
              </span>
              <span>BROWSE CATEGORIES</span>
              <span>
                <ChevronDown size={20} />
              </span>
              {browsecategories && (
                <div className=" cursor-pointer md:w-70 z-30 w-full transition-transform duration-1000 bg-white px-3 absolute top-13 left-0 ">
                  {categories2.map((categorie2, index) => (
                    <div
                      key={index}
                      className="border border-x-0 border-stone-400 text-black border-t-0 font-semibold px-3 py-3"
                    >
                      <span className="hover:text-amber-400 transition-colors delay-150">
                        {categorie2.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-9 relative">
              {badge.map((item, index) => (
                <div className="lg:block hidden">
                  <div
                
                    key={index}
                    className={`font-semibold  flex items-center gap-1 cursor-pointer    ${
                      location.pathname === item.path
                        ? "text-amber-400"
                        : "text-black hover:text-amber-400"
                    }`}
                    
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div onClick={opensidebar} className="md:block lg:hidden hidden py-3">
            <Menu />
          </div>
          {menubar && (
            <div className="fixed h-screen z-20 bg-stone-800 md:w-120 w-80 sm:90 right-0 top-60">
              <div
                onClick={opensidebar}
                className=" py-3 px-4 flex flex-col gap-3"
              >
                <div className="text-white">
                  <Menu />
                </div>
                <div className="flex flex-col gap-4">
                   {badge.map((item, index) => (
                <div className="">
                  <div
                
                    key={index}
                    className={`font-semibold  flex items-center gap-1 cursor-pointer    ${
                      location.pathname === item.path
                        ? "text-amber-400 "
                        : "text-white hover:text-amber-400"
                    }`}
                    
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </div>
                </div>
              ))}
                </div>
              </div>
            </div>
          )}
          <div className="md:block hidden">
            <div className="h-10 flex items-center gap-1 justify-center">
              <div className="flex flex-row items-center justify-center">
                <Link to="/register">
                  <button className="font-semibold px-2 hover:text-amber-400 transition-all cursor-pointer border-y-0 border hover: border-l-0 border-stone-300">
                    REGISTER
                  </button>
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
          <div className="md:hidden">
            <div className="flex items-center gap-3 justify-center">
              <div onClick={opensidebar}>
                <Menu size={20} />
              </div>
              <Share size={20} />
              <Heart size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;

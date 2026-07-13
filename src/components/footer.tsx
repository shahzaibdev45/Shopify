import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const icon = [
    { icon: <Twitter size={16} /> },
    { icon: <Facebook size={16} /> },
    { icon: <Instagram size={16} /> },
    { icon: <Linkedin size={16} /> },
  ];
  const services =[
    {service:"Shipping Policy"},
    {service:"Help"},
    {service:"Payment Method"},
    {service:"Refund Policy"},
    {service:"Terms of Service"},
    {service:"Privacy Policy"},
  ]
  return (
    <div>
      <div className="h-full border bg-[url(/images/footer-bg.jpg)] lg:px-16 px-8 py-10 flex flex-col gap-8">
        <div className="grid xl:grid-cols-6 md:grid-cols-2  xl:h-90 xl:gap-0 md:gap-8 gap-4">
          <div className="xl:col-span-2  flex flex-col xl:px-9 gap-5 ">
            <div>
              <img src="/images/footer-logo.png" alt="" />
            </div>
            <div>
              <p className="text-white text-[17px] leading-8 ">
                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Rem
                harum, voluptatem  <br />excepturi fugit  quas assumenda delectus <br /> sed et
              
              </p>
            </div>

            <div className="flex  px-2 gap-3 border-stone-300 py-3">
              {icon.map((icon, index) => (
                <div
                  key={index}
                  className="text-stone-400  cursor-pointer hover:text-amber-400 transition-colors delay-150"
                >
                  {icon.icon}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-xl text-white font-bold">OUR SERVICES</h1>
            </div>
            <div>
            {services.map((name,index)=>(
                <div key={index} className="flex flex-col gap-7">
                    <ul className="text-white hover:text-amber-400 leading-7 cursor-pointer transition-colors delay-300 ">
                        <li> {name.service} </li>
                    </ul>
                </div>
            ))}
            </div>
          </div>
          <div className="xl:px-3 text-white flex flex-col gap-8">
            <div className="flex flex-col gap-8 ">
              <h1 className="text-xl font-bold uppercase">
                Contact Us
              </h1>
              <div className="text-white ">
                <span className="font-bold">HEAD OFFICE ADDRESS</span>
                <p className="px-3">
                    No:58 A, East Madison Street Baltimore,MD,USA 4508
                </p>
              </div>
            </div>
            <div className="">
                <div>
                    <p className="px-2">
                        Phone: 
                        <a href="tel:+0000-123-456789">
                            0000-123- <br /> 456789
                        </a>
                    </p>
                </div>
            </div>
            <div>

            </div>
          </div>
          <div className="xl:col-span-2 px-3">
            <div className=" bg-white xl:w-70  z-20 xl:p-9  flex items-center justify-center p-6 ">
                <div className="flex flex-col gap-8">
                   <div>
                     <h1 className="font-bold text-[18px] ">
                        NEWSLETTER
                    </h1>
                   </div>
                   <div>
                     <p className="text-shadow-stone-800 leading-6"> 
                        Stay Updated on all that’s new add noteworthy
                    </p>
                   </div>
                   <div>
                    <input className="border h-12 w-full border-stone-200 focus:outline-0 focus:border-black px-2"placeholder="Your Email Address" type="text" />
                   </div>
                   <div>
                    <button className="h-12 cursor-pointer w-full hover:bg-amber-400 transition-colors delay-500 bg-black uppercase text-white font-bold">Subscribe now</button>
                   </div>
                </div>
            </div>
          </div>
        </div>
        <div className="text-white flex xl:flex-row flex-col items-center xl:gap-19 gap-6">
            <div>
                <p>
                    © 2025 Toolie-theme Design Themes
                </p>
            </div>
            <div className="flex xl:flex-row flex-wrap gap-6 items-center xl:gap-3">
              <span>
                Site Map
              </span>
              <span>
                Search Terms
              </span>
              <span>
                Advance Search
              </span>
              <span>
                Reviews
              </span>
            </div>
            <div>
                <img src="/images/payment.png.webp" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

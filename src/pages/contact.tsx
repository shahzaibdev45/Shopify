import { MapPinHouse, MessageCircleCodeIcon, Phone } from "lucide-react";
import Browsecategories from "../components/browsecategories";
import Header from "../components/header";
import Pagebanner from "../components/pagebanner";
import Footer from "../components/footer";
import GoToTop from "../components/GoToTop";

const Contact = () => {
  const contactcard = [
    {
      icon: <Phone />,
      contacttype: "Phone",
      heading: "Toll-Free:",
      heading1: "Fax:",
      number: " 0000 - 123 - 456789",
      number1: " 0000 - 123 - 456789",
    },
    {
      icon: <MessageCircleCodeIcon />,
      contacttype: "Email",
      number: "info@example.com",
      number1: " support@example.com",
    },
    {
      icon: <MapPinHouse />,
      contacttype: "Address",
      number: "No: 58 A, East Madison Street,Baltimore, MD, USA 4508",
    },
  ];
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="">
        <div className="xl:px-34 lg:px-15 px-4">
          <Browsecategories />
        </div>
        <div>
          <Pagebanner title={"Contact"} subtitle={"Home / Contact"} />
        </div>
        <div className="xl:px-34 lg:px-15 px-4 py-16 flex flex-col gap-12">
          <div className="">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43540.67090995842!2d73.34770489496874!3d30.348549562631735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d59932caea585%3A0xa403771eeb13a38e!2sP%C4%81kpattan%2C%20Pakistan!5e1!3m2!1sen!2s!4v1760007431348!5m2!1sen!2s"
              width="full"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-9">
            {contactcard.map((card, index) => (
              <div key={index}>
                <div className="border px-6 py-7 border-stone-300 group flex flex-col xl:justify-normal justify-center xl:items-start items-center gap-6 ">
                  <div>
                    <button className="h-13 w-12 transition-colors delay-100 group-hover:bg-amber-400 bg-blue-950 flex items-center justify-center text-white">
                      {card.icon}
                    </button>
                  </div>
                  <div>
                    <h1 className="text-2xl font-thin tracking-wider text-stone-600">
                      {card.contacttype}
                    </h1>
                  </div>
                  <div>
                    <div>
                      <span className="font-bold text-[16px] text-stone-800">
                        {" "}
                        {card.heading}
                      </span>{" "}
                      <span className="text-stone-700"> {card.number}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[16px] text-stone-800 ">
                        {" "}
                        {card.heading1}
                      </span>{" "}
                      <span className="text-stone-700 "> {card.number1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-thin text-stone-600">
                Contact Form
              </h1>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
              <input
                className="border h-14 border-stone-300 focus:outline-0 focus:border-black px-3"
                placeholder="Name"
                type="text"
              />
              <input
                className="border h-14 border-stone-300 focus:outline-0 focus:border-black px-3"
                placeholder="Email"
                type="email"
              />
              <input
                className="border h-14 border-stone-300 focus:outline-0 focus:border-black px-3"
                placeholder="Phone"
                type="text"
              />
            </div>
            <div>
              <input
                className="border h-60 w-full border-stone-300 focus:outline-0 focus:border-black px-6"
                placeholder="Message"
                type="text"
              />
            </div>
          </div>
        </div>
        <div>
          <GoToTop />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;

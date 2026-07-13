const Banner = ({
  img,
  classname,
  off,
  textcolour,
  title,
  description,
  bannerclass,
}: {
  bannerclass: string;
  title: string;
  description: string;
  img: string;
  classname: string;
  off: string;
  textcolour: string;
}) => {
  return (
    <div className="relative  mx-auto ">
      <div>
        <img className={`${classname}`} src={img} alt="" />
      </div>
      <div className="">
        <div className={`absolute w-full top-3 inset-0 `}>
          <div className={`${bannerclass} flex flex-col`}>
            <div className="px-3">
              <h1 className="text-3xl text-white font-bold"> {title} </h1>
            </div>
            <div className={`font-bold px-3 ${textcolour}`}>{off}</div>
            <div>
              <div className="text-white text-xl font-bold ">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

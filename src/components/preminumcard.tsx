const preminumcard = ({ img, offer,detail,classname }: { img: string; classname:string; offer: string;detail:string }) => {
  return (
    <div className={ `h-full w-full relative group cursor-pointer`}>
        <div className={`absolute h-full ${classname} w-full`}>
            
        </div>
      <img className={ `h-full w-full object-cover ` } src={img} alt="" />
      <div className="absolute top-0 z-10 h-full flex items-center">
        <div className="px-6 flex flex-col gap-4 ">
          <p className="text-white uppercase">{offer}</p>
          <h1 className="font-bold text-amber-400 text-2xl uppercase">
            {detail}
          </h1>
          <button className="uppercase text-xs text-white h-full transition-colors duration-4 cursor-pointer hover:border-3 hover:border-x-0 hover:border-t-0 hover:border-amber-400 w-17 font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default preminumcard;

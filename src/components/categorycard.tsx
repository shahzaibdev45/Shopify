

const CategoryCard = ({img,title,detail}:{img:string;title:string;detail:string}) => {
  return (
    <div className="md:h-40 group h-50 w-full px-4 md:py-0 py-4 bg-stone-100 hover:scale-100 transition-all delay-150 cursor-pointer hover:drop-shadow-xl duration-200 flex flex-row justify-between relative">
        <div className="relative z-30 flex flex-col justify-start text-start py-5 md:gap-10 gap-9">
            <div className="md:px-3 px-10">
                <h1 className="font-bold text-blue-950 text-xl group-hover:text-amber-400 transition-colors delay-200">
                   {title}
                </h1>
            </div>
            <div className="w-70">
                <p className="text-blue-950 text-start md:px-3 px-10 ">
                   {detail}
                </p>
            </div>
        </div>
          <div className="md:h-20 h-5 absolute">
              <img
                src={img}
                alt={""}
                className=""
              />
              </div>
      
    </div>
  )
}

export default CategoryCard
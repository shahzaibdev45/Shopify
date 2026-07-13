
const News = ({className,img,title,detail,size,imgsize,date}:{date:string;imgsize:string;className:string;img:string;title:string;detail:string;size:string;}) => {
  return (
    <div>
         <div className={`flex ${className} group`}>
            <div className="relative">
            <div className="group group-hover:block hidden">  
                  <div className="absolute bg-blue-800/30 z-10 cursor-pointer w-full h-full"></div></div>
                <img className={`${imgsize}`} src={img} alt="" />
            </div>
            <div className="flex flex-col gap-4 py-3">
                <div className="font-thin text-stone-700">
                    {date}
                </div>
                <div className="">
                    <h1 className={`text-stone-700 font-bold uppercase hover:text-amber-400 transition-colors delay-300 cursor-pointer ${size}`}>
                      {title}
                    </h1>
                </div>
                <div>
                    <p className="text-stone-700">
                        {detail}
                    </p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default News
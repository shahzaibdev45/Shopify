

const ServiceCard = ({img,title,subtitle}:{img:string;title:string;subtitle:string}) => {
  return (
    <div>
        <div className="border-1 group hover:transform hover:scale-110 transition-all delay-200 h-40 px-3 text-center cursor-pointer  border-stone-300 flex flex-col justify-center items-center gap-2 py-2">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="font-bold text-blue-950 group-hover:text-amber-400 transition-colors ">
              {title}
            </div>
            <div className="text-blue-950">
                {subtitle}
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
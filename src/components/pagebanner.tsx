

const Pagebanner = ({title,subtitle}:{title:string;subtitle:string}) => {
  return (
    <div className="sticky">
         <div className="relative">
          <div className="absolute h-full w-full bg-black/60 flex items-center justify-center">
            <div className="flex flex-col gap-8 text-center">
              <div>
                <h1 className="text-3xl font-thin text-white tracking-widest">
                {title}
                </h1>
              </div>
              <div className=" text-white font-medium ">
                <h3> {subtitle} </h3>
              </div>
            </div>
          </div>
          <img
            className="h-65 w-full object-cover"
            src="/images/crumb.jpg"
            alt=""
          />
        </div>
    </div>
  )
}

export default Pagebanner
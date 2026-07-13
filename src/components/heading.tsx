

const heading = ({title}:{title:string}) => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center gap-4 py-12 text-center">
            <div className="">
              <img className="" src="/images/icon1.webp" alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-950">
              {title}
              </h1>
            </div>
          </div>
    </div>
  )
}

export default heading
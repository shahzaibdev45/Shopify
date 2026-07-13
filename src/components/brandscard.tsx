

const BrandsCard = ({img}:{img:string}) => {
  return (
    <div>
        <div className="border-2 py-3 px-3 border-stone-200 flex items-center justify-center">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default BrandsCard
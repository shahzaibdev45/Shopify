import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"


const gototop1 = () => {
   const [visible,setVisible] = useState<boolean>(false)
   function gotop(){
     window.scrollTo({top:0,left:0,behavior:"smooth"})
   }
    function ListenToScroll(){
       let heighttohidden = 400;
          const winscroll = 
          document.body.scrollTop || document.documentElement.scrollTop
           if( winscroll > heighttohidden){
                 setVisible(true)
           } else {
            setVisible(false)
           }
    }
   useEffect(()=>{
     window.addEventListener("scroll",ListenToScroll)
   })
  return (
    <div>
     { visible && (
         <button onClick={gotop} className="bg-blue-800 flex items-center justify-center hover:bg-amber-400 cursor-pointer text-white h-12 w-12 right-3 bottom-3 fixed rounded-full">
       <ArrowUp className="icon"/>
       </button>
     )}
    </div>
  )
}

export default gototop1
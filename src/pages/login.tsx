import { Link } from "react-router-dom";
import Browsecategories from "../components/browsecategories";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagebanner from "../components/pagebanner";
import GoToTop from "../components/GoToTop";
import React from "react";

const login = () => {
  const [user,setUser] = React.useState({email:"",password:""})
  const [users,setUsers] = React.useState<any[]>([])
  React.useEffect(()=>{
     const data = localStorage.getItem("users")
      if(data){
         setUsers(JSON.parse(data))
      }
  },[])
   React.useEffect(() =>{
     localStorage.setItem("users",JSON.stringify(users))
   },[users])
   function storeData(){
     if(!user.email.trim() || !user.password.trim()) return;
      setUsers((prevUser)=> [...prevUser,user])
      setUser({email:"",password:""})
   }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-6">
        <div className="xl:px-36 lg:px-16">
          <Browsecategories />
        </div>
       <Pagebanner title={"Account"} subtitle={"Home/Account"}/>
        <div className="flex items-center justify-center lg:p-20 md:p-10 sm:p-10 p-3">
          <div className="xl:w-180 bg-stone-100 p-8 w-full flex flex-col gap-6 py-6">
            <div className="border-3 border-t-0 border-x-0 border-stone-300 py-6 flex flex-col gap-10">
              <input
              value={user.email}
               onChange={(e)=> setUser({...user,email:e.target.value})}
                className="h-15 w-full border border-stone-300 px-4"
                placeholder="Email"
                type="text"
              />
              <input
                 value={user.password}
               onChange={(e)=> setUser({...user,password:e.target.value})}
                className="h-15 w-full border border-stone-300 px-4"
                placeholder="Password"
                type="password"
              />
              <div className="flex items-center justify-center">
                <button onClick={storeData} className="font-bold cursor-pointer uppercase hover:bg-amber-400 transition-colors delay-500 text-white bg-blue-950 text-sm px-6 py-4">
                  Login
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 font-medium">
              <span className="hover:text-amber-400 cursor-pointer transition-colors delay-500">
                Forgot Password ?
              </span>
             <Link to="/register">
              <span className="hover:text-amber-400 cursor-pointer transition-colors delay-500">
             Register
              </span>
             </Link>
             <Link to="/">
              <span className="hover:text-amber-400 cursor-pointer transition-colors delay-500">
               Return to Store
              </span>
             </Link>
            </div>
          </div> 
        </div>
        <div>
           <GoToTop/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default login;

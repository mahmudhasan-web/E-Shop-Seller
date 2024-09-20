import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import seller from "../../../public/seler.json";
import { ContextSource } from "../ContextAPI/ContextAPI";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(ContextSource)
  return (
    <section className="flex justify-around my-10 p-1">
      <div className="Info bg-gray-200">
        <div className="flex gap-10 p-5">
          <img src={user?.photoURL} className="w-40 h-40 rounded-full object-cover" alt="" />
          <h1 className="text-4xl font-semibold">Welcome Back <br />{user?.displayName}</h1>
        </div>
        <div>
          <h1>Your Products</h1>
        </div>
      </div>
      <div id="Update_info" className="bg-gray-100 p-2 rounded-2xl">
        <Lottie className="w-80" animationData={seller} loop={true}></Lottie>
        <div>
          <div className="flex justify-between text-2xl font-semibold">
            <h1>Seller Information</h1>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="text-[#227B94]"
            >
              Edit
            </button>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Name</h1>
            <p>User Name</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Email</h1>
            <p>User email</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Phone</h1>
            <p>User Phone</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Location</h1>
            <p>User Location</p>
          </div>
        </div>
      </div>

      <dialog open={isOpen} className="bg-white border-2 shadow-2xl border-black rounded-2xl text-black px-8 py-5">
        <div className="flex justify-end mr-5">
            <button onClick={()=> setIsOpen(false)} className="font-bold ">X</button>
        </div>
        <h1 className="text-center text-2xl font-bold">Update Seller Information</h1>
        <form action="" className="my-5 space-y-2">
            <div className="flex gap-6">
                <div>
                    <label htmlFor="" className="text-xl font-semibold">Name</label> <br />
                    <input type="text" className="w-52 p-1 rounded-2xl border-2 border-black" />
                </div>
                
                <div>
                    <label htmlFor="" className="text-xl font-semibold">Email</label> <br />
                    <input type="text" className="w-52 p-1 rounded-2xl border-2 border-black" />
                </div>    
            </div>
            <div className="flex gap-6">
                <div>
                    <label htmlFor="" className="text-xl font-semibold">Phone</label> <br />
                    <input type="text" className="w-52 p-1 rounded-2xl border-2 border-black" />
                </div>
                
                <div>
                    <label htmlFor="" className="text-xl font-semibold">Location</label> <br />
                    <input type="text" className="w-52 p-1 rounded-2xl border-2 border-black" />
                </div>    
            </div>
            <div>
                <input type="file" />
            </div>
            <div className=" w-full text-center">
                <button  className="border-2 p-2 rounded-xl bg-[#227B94] text-white border-white font-semibold">Submit</button>
            </div>
        </form>
        {/* <form method="dialog">
          <button>OK</button>
        </form> */}
      </dialog>
    </section>
  );
};

export default Home;

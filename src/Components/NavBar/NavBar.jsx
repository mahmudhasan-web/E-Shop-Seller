import { Button } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ContextSource } from "../ContextAPI/ContextAPI";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { set } from "react-hook-form";

const NavBar = () => {
  const { user, logOut } = useContext(ContextSource)
  console.log(user);

  const navigate = useNavigate()

  const handlelogouts = (e) => {
    e.preventDefault()
    logOut()
    navigate('/auth')
  }
  return (
    <section className="bg-[#16325B] text-white p-3">
      <div id="responsive"></div>
      <div className="flex justify-around">
        <h1 className="text-2xl font-bold">E-Shop Seller</h1>

        <div>
          {
            user?.email ?
              <section className="flex flex-row gap-10">
                <div className="my-auto">
                  <ul className="flex gap-5 text-lg font-semibold">
                    <NavLink
                      to={"/"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                      }
                    >
                      <li>Home</li>
                    </NavLink>
                    <NavLink
                      to={"/add-product"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                      }>
                      <li>Add Product</li>
                    </NavLink>
                    <NavLink
                      to={"/all-product"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                      }>
                      <li>All Product</li>
                    </NavLink>
                    <NavLink
                      to={"/support"}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                      }>
                      <li>Support</li>
                    </NavLink>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <img src={user?.photoURL} className="w-14 h-14 rounded-full object-cover" alt="" />
                  <div className="my-auto">
                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                  </div>
                  <button onClick={handlelogouts} className="p-1 rounded-md border-2  h-fit my-auto">Log Out</button>
                </div>
              </section>
              :

              <LogIn></LogIn>
          }
        </div>
      </div>
    </section>
  );
};


const LogIn = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const [passControl, setpassControl] = useState(false);
  const [hide, setHide] = useState('password')
  const { handlelogIn } = useContext(ContextSource)
  const navigate = useNavigate()

  const handleLog = (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    console.log(email, password);
    if (email && password) {
      handlelogIn(email, password)
        .then(res => {
          console.log(res);
          navigate('/')

        })
        .catch(err => {
          console.log(err);

        })
    }

  }
const handlePassword =()=>{
  setpassControl(!passControl)
  if (passControl) {
    setHide('text')
  }
  else{
    setHide('password')
  }
}
  return (
    <section className="flex gap-2 relative">
      <input ref={emailRef} type="text" placeholder="Enter Your Email " className="w-60  p-1 bg-white text-black rounded-md" />
      <input ref={passwordRef} type={`${hide}`} placeholder="Enter Your Password" className="w-60  p-1 bg-white text-black rounded-md" />
      <button onClick={handleLog} className="p-2 border-2 rounded-md font-semibold">LogIn</button>
      <button className="text-xl absolute z-50 text-black right-20 top-1/4" onClick={handlePassword}>{passControl == false ? <FaEye /> : <IoEyeOff />}</button>
    </section>
  )
}

export default NavBar;

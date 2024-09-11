import React, { useContext, useEffect } from 'react';
import { useForm, useFormContext } from "react-hook-form"
import shopping from "../../../public/shopping bag.png"
import torlley from "../../../public/torlley.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import axios from 'axios';
import { ContextSource } from '../ContextAPI/ContextAPI';
import NavBar from '../NavBar/NavBar';
// import { useContext } from 'react'
const Registration = () => {

    const {handelRegister, handleProfile} = useContext(ContextSource)

    useEffect(() => {
        loadCaptchaEnginge(6, 'black', 'white');
    }, []);

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        const email = data?.email
        const password = data?.password
        const name = data?.name
        if (validateCaptcha(data?.captcha) == true) {
            alert("Captcha Right")
            if (data?.image) {
                const image = data?.image[0]

                // const condition = Boolean()
                axios.post('https://api.imgbb.com/1/upload?key=18fb354e6b4e44c25c7b877a072a961d', { image },
                    {
                        headers: {
                            "content-type": "multipart/form-data"
                        }
                    }
                )
                    .then(res => {
                        console.log(res);
                        console.log(res.data.data.display_url)
                        const photo = res.data.data.display_url
                        handelRegister(email,password)
                        .then(res=>{
                            console.log(res)
                            if(res){
                                handleProfile(photo,name)
                                .then(res=>{
                                    console.log(res);
                                    
                                })
                                .catch(err=>{
                                    console.log(err);
                                    
                                })
                            }
                        })


                    })
                    .catch(err => {
                        console.log(err);

                    })

            }
        }
        else {
            alert("Captcha Wrong")
        }
    }
    return (
        <section className=''>
            <NavBar></NavBar>
            <div className='flex justify-around border-2 border-gray-600 my-10'>
                <div className='w-1/4 my-auto'>
                    <h1 className='text-3xl font-extrabold'>Welcome to Our E-Shop Seller Center</h1>
                    <p className='text-lg font-semibold'>World Largest Online Shop. We promise, we will delivery your product to the customer as they seen in the image</p>
                    <div>
                        <img className='w-36' src={shopping} alt="" />
                        <img className='w-48 ml-16 -mt-16' src={torlley} alt="" />
                    </div>
                </div>
                <div className='my-auto'>
                    <h1 className='text-2xl font-bold'>Registration Here</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className='text-lg font-semibold'>Name</label> <br></br>
                            <input className='border-2 border-black rounded-xl w-72 p-1' {...register("name")} />
                        </div>
                        <div>
                            <label className='text-lg font-semibold'>Email</label> <br></br>
                            <input className='border-2 border-black rounded-xl w-72 p-1' {...register("email")} />
                        </div>
                        <div className=''>
                            <LoadCanvasTemplate className="bg-black" />
                            <input className='border-2 border-black rounded-xl w-72 p-1' type='text' {...register("captcha")} />
                        </div>
                        <div>
                            <label className='text-lg font-semibold'>Image</label> <br></br>
                            <input className='border-2 border-black rounded-xl w-72 p-1' type='file' {...register("image")} />
                        </div>
                        <div>
                            <label className='text-lg font-semibold'>Password</label> <br></br>
                            <input className='border-2 border-black rounded-xl w-72 p-1' type='password' {...register("password")} />
                        </div>
                        <input type="submit" className='border-2 p-2 text-lg bg-[#16325B] text-white rounded-xl font-semibold ' />
                        {/* <button className='btn'>Submit</button> */}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Registration;
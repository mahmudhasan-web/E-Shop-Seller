import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import axios from "axios"

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState([]);
  const [imageArray, setImageArray] = useState();
  const image = useRef();
  const handleImage = (e) => {
    e.preventDefault();
    const img = Array.from(image.current.files);
    const imageURL = img?.map((e) => URL.createObjectURL(e));
    setImagePreview(imageURL);
    setImageArray(img)

    console.log(imageURL);
  };

  const handleProduct = (e) => {
    e.preventDefault();
console.log('pukki');

    if(imageArray){
        imageArray.map(e=>{
            axios.post('https://api.imgbb.com/1/upload?expiration=600&key=18fb354e6b4e44c25c7b877a072a961d', {e}, {
                headers : {
                    "Content-type" : "multipart/from-data"
                }
            })
            .then(res=>{
                console.log(res);
                
            })
            .catch(err=>{
                console.log(err);
                
            })
        })
    }
  };

  return (
    <section>
      <h1 className="text-4xl text-center font-bold">Add Your Products</h1>
      <div className="flex justify-around">
        <div>
          <h1 className="text-2xl text-center underline font-semibold">
            Image Preview Section
          <div className="flex gap-5">
          {
                imagePreview?.map((e,idx)=>
                    <img className="w-32" key={idx} src={e} alt="" />

                )
            }
          </div>
          </h1>
        </div>
        <div className="w-2/4">
          <div className="w-10/12 space-y-5">
            <form onSubmit={handleProduct} action="">
              <div className="flex justify-between">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 p-1 rounded-xl w-72 border-black"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Price
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 p-1 rounded-xl w-72 border-black"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Brand
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 p-1 rounded-xl w-72 border-black"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Quantity
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 p-1 rounded-xl w-72 border-black"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Upload Image
                  </label>{" "}
                  <br />
                  <input
                    type="file"
                    onChange={handleImage}
                    ref={image}
                    multiple
                    className="border-2 p-1 rounded-xl w-72 border-black"
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold" htmlFor="">
                    Type of Product
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="border-2 p-1 rounded-xl w-72 border-black"
                  />
                </div>
              </div>
              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  Description
                </label>
                <textarea
                  name=""
                  className="w-full border-2 border-black rounded-xl p-2 h-36"
                  id=""
                ></textarea>
              </div>
              <div>
                <Button type="submit" className="w-full font-semibold" variant="contained">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;

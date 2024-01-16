import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { backendURL } from "../../utils/utils";
import axios from "axios";

export default function createProduct() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [IMG, setIMG] = useState();

  const navigate = useNavigate();

  const handleFileUploadReq = async () => {
    try {
      const myFile = await axios.post(
        `${backendURL}/products/createProduct`,
        {
          file: IMG,
          Name: name,
          Description: description,
          Amount: price,
          Qty: quantity,
        },
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return myFile;
    } catch (err) {
      console.log(err);
    }
  };

  const handleProductAdd = async () => {
    try {
      if (name && price && description && quantity && IMG) {
        const data = await handleFileUploadReq();
        alert("Product Created Successfully");
        navigate("/products");
      } else alert("Please fill the following details");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Link to="/" className="px-10 text-blue-700 underline">
        &#8612;Back To Homepage
      </Link>
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-10">
        <h1 className="text-3xl font-semibold mt-8">Create a Product</h1>

        <div className="w-[30rem] sm:w-[90%] flex flex-col items-start">
          <label htmlFor="">Product Name</label>
          <input
            className="w-full h-10 px-3 border-2 border-black rounded-md mt-1 mb-2"
            type="text"
            placeholder="Please Enter a Product Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="">Description</label>
          <textarea
            className="w-full h-32 px-3 border-2 border-black rounded-md mt-1 mb-2"
            name="description"
            id=""
            placeholder="Please Enter a Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <label htmlFor="">Quantity</label>
          <input
            className="w-full h-10 px-3 border-2 border-black rounded-md mt-1 mb-2"
            type="number"
            placeholder="Please Enter Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <label htmlFor="">Price</label>
          <input
            className="w-full h-10 px-3 border-2 border-black rounded-md mt-1 mb-2"
            type="number"
            placeholder="Please Enter Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label htmlFor="">Product Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            name=""
            id=""
            onChange={(e) => {
              setIMG(e.target.files[0]);
            }}
          />

          <button
            type="submit"
            className="w-full h-10 px-3 bg-black text-white rounded-md mt-4"
            onClick={handleProductAdd}
          >
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

import { useParams } from "react-router";
import DemoImage from "../assets/replace.png";
import Header from "../components/Header";
import { backendURL, config, currency } from "../utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function IndividualProduct() {
  const { id } = useParams();
  const [data, setData] = useState();
  const ReqForProductData = async () => {
    const data = await axios.get(`${backendURL}/products/${id}`, config);
    setData(data.data);
    getImageData(data.data.Image);
  };

  useEffect(() => {
    if (id) {
      ReqForProductData();
    }
  }, []);

  const [IMG, setIMG] = useState();

  const getImageData = async (ImageId) => {
    const res = await axios.get(`${backendURL}/files/${ImageId}`, {
      responseType: "blob",
    });
    const blob = new Blob([res.data], { type: res.data.type });
    setIMG(window.URL.createObjectURL(blob));
  };
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(add(data));
    alert("Product added successfully");
  }
  return (
    <>
      <Header />
      {data ? (
        <div className="w-full min-h-[calc(100% - 4rem)] flex justify-center mt-20 gap-12 md:flex-col">
          <div className="w-[30%] flex justify-center md:w-full">
            <img className="w-[90%]" src={IMG ? IMG : DemoImage} alt="" />
          </div>
          <div className="w-[40%] px-8 md:w-full md:mb-10">
            <h1 className="text-6xl font-semibold">{data.Name}</h1>
            <h2 className="text-xl font-medium mt-8">Description</h2>
            <h2 className="text-lg font-normal mt-4">{data.Description}</h2>
            <h3 className="mt-20 font-bold text-5xl">
              {currency}
              {data.Amount}
            </h3>
            <button
              className="w-full h-12 rounded bg-black text-white mt-8"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

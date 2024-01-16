import { useEffect, useState } from "react";
import DemoImage from "../assets/replace.png";
import { currency, backendURL } from "../utils/utils";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function ProductIndividual({ data }) {
  const [IMG, setIMG] = useState();

  const getImageData = async () => {
    const res = await axios.get(`${backendURL}/files/${data.Image}`, {
      responseType: "blob",
    });
    const blob = new Blob([res.data], { type: res.data.type });
    setIMG(window.URL.createObjectURL(blob));
  };

  useEffect(() => {
    if (data) {
      getImageData();
    }
  }, []);

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(add(data));
    alert("Product added successfully");
  }
  return (
    <>
      {data ? (
        <div className="w-60 h-[22rem]  py-3 border-gray-500 rounded-md flex flex-col items-center shadow-lg">
          <div className="w-[90%] h-[60%] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <img
              src={IMG ? IMG : DemoImage}
              className="h-full w-full object-fit object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="w-[90%] mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <span aria-hidden="true" className=" inset-0" />
                {data.Name}
              </h3>
            </div>
            <p className="text-sm font-medium text-gray-900">
              {currency}
              {data.Amount}
            </p>
          </div>
          <Link
            to={`/product/${data.ProductId}`}
            className="w-[90%] bg-black rounded-md mt-3 h-8 text-center flex justify-center items-center text-white hover:bg-slate-800"
          >
            View
          </Link>
          <button
            className="w-[90%] bg-black rounded-md mt-3 h-8 text-white hover:bg-slate-800"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      ) : null}
    </>
  );
}

import { useDispatch } from "react-redux";
import DemoImage from "../assets/replace.png";
import { increaseQty, decreaseQty, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../utils/utils";
export default function CartProductIndividual({ data }) {
  // const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const clickIncrease = (i) => {
    dispatch(increaseQty(data));
  };
  const clickDecrease = (i) => {
    dispatch(decreaseQty(data));
  };
  const clickRemove = (i) => {
    dispatch(remove(data));
  };

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

  return (
    <>
      <div className="flex h-[6rem] w-full gap-10 rounded-md px-10 shadow-lg">
        <div className="h-full md:hidden">
          <img
            className="h-full object-contain"
            src={IMG ? IMG : DemoImage}
            alt=""
          />
        </div>
        <div className="w-[40%] flex items-center overflow-hidden">
          <h1 className="text-lg font-semibold">{data.Name}</h1>
        </div>
        <div className="w-[10%] h-full text-center flex justify-center items-center md:w-auto">
          <h1 className="text-lg font-semibold">
            {currency} {data.Amount}
          </h1>
        </div>
        <div className="w-[10%] flex justify-center items-center ">
          <div className="border-[1px] border-black rounded-md flex justify-center items-center">
            <button
              className="bg-black text-white w-8 h-8 rounded-l-md flex justify-center items-center text-center"
              onClick={clickDecrease}
            >
              &#8722;
            </button>
            <h1 className="w-8 font-medium">{data.ProductQty}</h1>
            <button
              className="bg-black text-white w-8 h-8 rounded-r-md flex justify-center items-center text-center"
              onClick={clickIncrease}
            >
              &#43;
            </button>{" "}
          </div>
        </div>
        <div className="w-[10%] h-full text-center flex justify-center items-center  md:w-auto">
          <h1 className="text-lg font-semibold">
            {currency} {data.Amount * data.ProductQty}
          </h1>
        </div>
        <div className="w-[10%] h-full text-center flex justify-center items-center">
          <button
            className="text-xl font-semibold hover:text-2xl"
            onClick={clickRemove}
          >
            &#10005;
          </button>
        </div>
      </div>
    </>
  );
}

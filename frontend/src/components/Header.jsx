import React, { useEffect, useState } from "react";
import Cart from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.cart);

  const [itemsLength, setItemsLength] = useState(0);

  useEffect(() => {
    setItemsLength(items.length);
  }, [items]);
  return (
    <div className="w-full h-16 flex justify-between items-center">
      <div className="flex justify-center items-center text-center md:text-start px-10">
        <Link to="/" className="text-3xl font-semibold md:text-xl">
          Shopping App
        </Link>
      </div>
      <div className="flex justify-evenly items-center text-center gap-8 pr-10">
        <Link to="/products" className="text-lg font-semibold md:hidden">
          Shop
        </Link>
        <Link to="/createProduct" className="text-lg font-semibold md:hidden">
          Create Product
        </Link>{" "}
        <Link to="/cart" className="relative h-full">
          <img src={Cart} className="w-8 h-8 z-0" alt="" />
          <span className="absolute -top-2 -right-2 bg-red-600 z-50 w-6 h-6 text-center rounded-full text-white font-semibold">
            {itemsLength}
          </span>
        </Link>
        <button className="w-20 h-10 rounded-full bg-accent-color text-accent-complementary">
          LOGIN
        </button>
      </div>
    </div>
  );
}

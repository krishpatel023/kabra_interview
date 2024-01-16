import CartProductIndividual from "../components/CartProductIndividual";
import Header from "../components/Header";

import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { currency } from "../utils/utils";

export default function Cart() {
  const items = useSelector((state) => state.cart);

  const [Total, setTotal] = useState(0);
  let currentTotal = 0;
  useEffect(() => {
    if (items) {
      currentTotal = 0;
      items.map((data) => {
        setTotal(currentTotal + data.ProductQty * data.Amount);
        currentTotal = currentTotal + data.ProductQty * data.Amount;
      });
      currentTotal = 0;
      if (items.length === 0) {
        setTotal(0);
      }
    }
  }, [items]);

  return (
    <>
      {items ? (
        <>
          <Header />
          <div className="flex flex-col items-center text-center">
            <h1 className="font-semibold text-3xl underline">Your Cart</h1>
            <div className="w-[90%] flex justify-center  mt-10 md:flex-col">
              <div className="w-[60%] flex flex-col gap-10 md:w-full">
                {items
                  ? items.map((data) => (
                      <CartProductIndividual data={data} key={data.ProductId} />
                    ))
                  : null}
              </div>
              <div className="w-[40%] h-[25rem]  flex flex-col items-center gap-10 md:w-full md:mt-10">
                <div className="w-[70%] flex flex-col items-center py-8 rounded shadow-lg">
                  <h1 className="text-xl font-medium mb-8">Order Summary</h1>
                  <div className="w-[80%] flex justify-between items-center mb-4">
                    <span>Subtotal</span>
                    <h1 className="font-semibold">
                      {currency}
                      {Total}
                    </h1>
                  </div>
                  <div className="w-[80%] flex justify-between items-center mb-4">
                    <span>Shipping</span>
                    <h1 className="font-semibold">Free</h1>
                  </div>
                  <div className="w-[80%] min-h-[1px] bg-gray-400 mb-8 mt-4"></div>
                  <div className="w-[80%] flex justify-between items-center">
                    <span>Total</span>
                    <h1 className="text-lg font-semibold">
                      {currency}
                      {Total}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

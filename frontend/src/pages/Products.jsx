import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductIndividual from "../components/ProductIndividual";
import axios from "axios";
import { backendURL, config } from "../utils/utils";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState();
  const ReqProductData = async () => {
    const data = await axios.get(`${backendURL}/products/`, config);
    setProducts(data.data);
  };

  useEffect(() => {
    ReqProductData();
  }, []);
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="w-[90%] mt-6 flex justify-start items-center flex-wrap gap-8 md:justify-evenly">
        {/* {TopPicks.map((product) =>  */}
        {products
          ? products.map((product) => (
              <ProductIndividual key={product.ProductId} data={product} />
            ))
          : null}

        {/* ) } */}
      </div>
      <Footer />
    </div>
  );
}

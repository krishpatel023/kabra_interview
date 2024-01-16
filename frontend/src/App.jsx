import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CreateProduct from "./pages/Backoffice/createProduct";
import IndividualProduct from "./pages/IndividualProduct";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "./utils/CartRequestHandler";
import { initialAPICall } from "./store/cartSlice";

function App() {
  const RequestData = async () => {
    const data = await getCart();
    if (data) {
      dispatch(initialAPICall(data));
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    RequestData();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/product/:id" element={<IndividualProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <div className="w-full">
        <Header />
        <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-8 text-center">
          <h1 className="text-5xl font-semibold">
            Shop from the exclusive collection.
          </h1>
          <Link
            to="products"
            className="bg-black rounded-full flex justify-center items-center px-10 h-10 text-white"
          >
            Check out our products
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

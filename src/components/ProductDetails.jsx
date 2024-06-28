import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../Features/product";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { data } from "../data";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = data.find((prod) => prod.id == productId);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      {!product ? (
        <div className="text-center my-4">Product not found</div>
      ) : (
        <main className="md:flex mt-8 items-center text-center w-4/5 mx-auto rounded-lg bg-white custom-shadow py-4 px-2 md:p-8">
          <img
            alt="img"
            className=" w-64 md:w-2/5 mx-auto rounded-lg"
            src={product.img}
          />

          <div className="m-5">
            <div className="flex items-center justify-between font-bold text-2xl">
              <h2>{product.title}</h2>
              <p className="font-bold text-[#e41d43] text-2xl">
                {product.price} $
              </p>
            </div>

            <p className="text-left  text-balance my-5">
              {product.description}
            </p>
            <button
              className="flex items-center text-white rounded-md py-2 px-3 text-xs gap-1 bg-[#1976d2] mx-auto md:m-0"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    img: product.img,
                    title: product.title,
                    quantity: 1,
                    price: product.price,
                  })
                )
              }
            >
              <FaShoppingCart className="text-white" />
              Add To Cart
            </button>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;

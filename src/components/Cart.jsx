import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import { FaTrashAlt } from "react-icons/fa";

import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

import { clearCart, selectTotalPrice } from "../Features/product";

const Cart = () => {
  const products = useSelector((state) => state.product.value);

  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div className="h-screen grid items-center grid-rows-sm">
      <Navbar />
      <div className="text-center w-4/5 mx-auto">
        {products.map((el, i) => (
          <Product
            key={i}
            id={el?.id}
            quantity={el?.quantity}
            price={el?.price * el?.quantity}
            title={el?.title}
            img={el?.img}
          />
        ))}

        {/* clear cart */}
        <button
          className="clear bg-[#e41d43] text-white mt-4 rounded-md py-2 px-3 text-sm btn"
          onClick={() => dispatch(clearCart())}
        >
          <FaTrashAlt className="text-white mr-1" />
          Clear Cart
        </button>
        <section className="summary bg-white w-[260px] mx-auto mt-10 rounded-md">
          <h1 className=" text-xl border-b-2 border-[#0000001f] py-2">
            Cart Summary
          </h1>
          <div className="flex items-center px-2 my-3 justify-between">
            <p className="Subtotal">Subtotal</p>

            <p>{totalPrice} $</p>
          </div>
          <button
            disabled
            className="checkout w-full bg-[#1976d2] text-white py-3 text-base font-medium"
          >
            CHECKOUT
          </button>

          <a href="./signin.html" className="py-2 text-base text-[#e41d43]">
            Please Sign in to continue.
          </a>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

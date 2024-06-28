import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../Features/product";

// eslint-disable-next-line react/prop-types
const Product = ({ id, price, title, img, quantity }) => {
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <article className=" flex items-center bg-white mt-7 justify-between rounded-md font-medium border-t-2 border-[#1976d2] mx-auto max-w-md custom-shadow">
        <button onClick={() => dispatch(deleteProduct(id))}>
          <FaTrashAlt className="text-[#e41d43] ml-4" />
        </button>

        <p>{price} $</p>

        <div className="flex items-center mr-4">
          <button
            className="text-[#1976d2] text-3xl"
            onClick={() => dispatch(decreaseQuantity(title))}
          >
            -
          </button>
          <div className="flex items-center text-white text-sm h-5 w-5 rounded-full justify-center mx-2 bg-[#1976d2]">
            {quantity}
          </div>

          <button
            className="text-[#1976d2]  text-2xl"
            onClick={() => dispatch(increaseQuantity(title))}
          >
            +
          </button>
        </div>

        <p>{title}</p>

        <img
          className="rounded-md"
          width="70"
          height="70"
          alt="productImg"
          src={img}
        />
      </article>
    </section>
  );
};

export default Product;

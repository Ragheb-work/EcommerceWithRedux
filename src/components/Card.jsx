import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { addToCart } from "../Features/product";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ id, img, title, price, description }) => {
  const dispatch = useDispatch();
  return (
    <article className="rounded-lg transition-all duration-300 hover:scale-110">
      <Link to={`/product/${id}`}>
        <img src={img} alt="productImg" className=" rounded-t-lg" />
      </Link>

      <div className="bg-white rounded-b-lg">
        <h1 className="pt-3 px-2 text-lg font-bold">{title}</h1>
        <p className="px-2 text-sm mt-2 mb-3">{description}</p>

        <div className="flex justify-between pb-3 items-center">
          <div className="ml-3 text-lg font-bold text-[#045bff]">{price} $</div>

          <button
            className="flex items-center mr-3 text-white rounded-md py-2 px-3 text-xs gap-1 bg-[#1976d2]"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  img: img,
                  title: title,
                  quantity: 1,
                  price: price,
                })
              )
            }
          >
            <FaShoppingCart className="text-white" />
            Add To Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;

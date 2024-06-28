import Card from "./Card";
// import png from "../assets/images/1.png";
// import bag from "../assets/images/2.webp";
// import backpack from "../assets/images/3.webp";
// import shoes from "../assets/images/4.webp";
// import hat from "../assets/images/5.webp";
// import watch from "../assets/images/6.webp";
// import glasses from "../assets/images/7.webp";
// import shirt from "../assets/images/8.png";
// import apple from "../assets/images/Apple_Watch_Series_9_GPS_45mm_Starlight.webp";
import { FaCheck } from "react-icons/fa6";

import { data } from "../data";

const Products = () => {
  return (
    <main className="w-full md:w-4/5 ms-auto me-auto">
      <h1 className="my-8 ml-[2%] flex items-center text-[2rem] font-bold">
        <FaCheck />
        Recommended for you
      </h1>
      <section className="grid grid-cols-sm md:grid-cols-md lg:grid-cols-lg my-6 justify-center gap-x-6 gap-y-8">
        {data.map((el, i) => (
          <Card
            id={el?.id}
            key={i}
            img={el?.img}
            title={el?.title}
            price={el?.price}
            description={el?.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Products;

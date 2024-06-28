import Products from "./Products";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

const Landing = () => {
  return (
    <>
      <div className="landing md:bg-left">
        <Navbar />
        <section className=" text-[2rem] absolute top-[45%] ml-[10%] -translate-y-1/2">
          <p className="uppercase text-3xl">LIFESTYLE COLLECTION</p>

          <p className="mt-3 font-bold">MEN</p>
          <p className="my-2 font-bold">
            SALE UP TO
            <span className="text-[#ed143d] ml-3"> 30% OFF</span>
          </p>
          <p className="text-2xl">Get Free Shipping on orders over $99.00</p>
          <button className="bg-[#2b3445] text-white mt-4 text-base rounded-sm py-3 px-7 hover:text-[#9fc5ef]">
            Shop Now
          </button>
        </section>
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default Landing;

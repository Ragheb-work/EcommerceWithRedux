import { FaShoppingBag, FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Links } from "../Links";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <>
      <header
        className={`flex items-center justify-around pe-[5%] ps-[5%] pt-5 lg:pe-[10%] lg:ps-[10%] lg:justify-between ${
          scrolled && "scroll-down"
        }`}
      >
        <div className="hidden lg:block">
          <div className="flex items-end gap-1">
            <FaShoppingBag className=" mr-0 text-[2rem]" />
            <span className="font-bold">AWU</span>
          </div>
          <p className="tracking-[0.5px]">Shopping</p>
        </div>

        <div className="flex gap-4">
          <Links
            href={"/cart"}
            style={
              "bg-[#2b3445] text-[#9fc5ef] text-sm py-2 pr-4 pl-3 rounded-[55px] group"
            }
            icon={<FaShoppingCart className="text-[#9fc5ef]" />}
            name={"$0.00"}
          />
          <Links
            href={"/signin"}
            style={
              "border border-[#2b3445] border-solid px-2 py-2 rounded-[55px] text-sm font-medium hover:bg-[#2b3445] hover:text-[#9fc5ef] group lg:px-2"
            }
            icon={
              <FaArrowRightToBracket
                className={`group-hover:text-[#9fc5ef] ${
                  scrolled && "text-[#9fc5ef]"
                }`}
              />
            }
            name={"Sign in"}
          />
          <Links
            href={"/signup"}
            style={
              "border border-[#2b3445] border-solid px-2 py-2 rounded-[55px] text-sm font-medium hover:bg-[#2b3445] hover:text-[#9fc5ef] group lg:px-2"
            }
            icon={
              <FaUserPlus
                className={`group-hover:text-[#9fc5ef] ${
                  scrolled && "text-[#9fc5ef]"
                }`}
              />
            }
            name={"Register"}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;

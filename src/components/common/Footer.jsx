import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-center text-white text-lg mt-12 rounded-t-lg bg-[#212529] py-4">
      <div>
        Designed and developed by
        <span className="text-red-500">Smary Ragheb</span> © 2024.
      </div>
      <div className="flex justify-center gap-4 my-4 text-xl">
        <FaGithub className="text-white cursor-pointer" />
        <FaLinkedin className="text-white cursor-pointer" />
        <FaTwitter className="text-white cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;

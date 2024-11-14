import React from "react";
import logo from "../../assets/Logo.png";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="py-[30px] bg-[#fffcf6] max-w-[1320px] mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo on the left side */}
        <div>
          <img src={logo} alt="logo" />
        </div>

        {/* Navigation items, search icon, and button on the right side */}
        <div className="flex gap-4 items-center justify-end">
          <p className="text-[#F95C19] font-primary-font font-extrabold text-[16px]">
            Home
          </p>
          <p className="text-[#817382] hover:text-[#F95C19] font-primary-font font-extrabold text-[16px]">
            Our Services
          </p>
          <p className="text-[#817382] hover:text-[#F95C19] font-primary-font font-extrabold text-[16px]">
            About Us
          </p>
          <p className="text-[#817382] hover:text-[#F95C19] font-primary-font font-extrabold text-[16px]">
            What's New
          </p>
          <div className=" flex items-center pl-[45px]">
          <div className=" h-[49px] w-[49px] bg-[#FFEDC9] flex justify-center items-center rounded-[6px]">
          <IoIosSearch className="size-[30px] text-[#FFAF0F] "/>
          </div>
          <div className=" pl-[9px]">
          <button className="font-second-font font-bold text-[20px] h-[49px] w-[149px] bg-[#FFE4D9] text-[#F95C19] rounded">
            Contact Us
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

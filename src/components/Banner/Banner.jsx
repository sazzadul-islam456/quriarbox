import React from "react";
import { FaArrowRight } from "react-icons/fa";
import banner from '../../assets/bannerimage.png';

const Banner = () => {
  return (
    <div className="bg-[#fff7e6]">
        <div className="max-w-[1320px] mx-auto py-[170px] ">
      <div className="flex justify-between items-center">
        
        {/* Text and button container */}
        <div>
          <p className="font-primary-font font-medium text-[49px] text-[#261134] leading-[120%] w-[516px]">
            A trusted provider of <br /><span className="font-bold">courier services.</span>
          </p>
          <p className="font-primary-font font-normal text-[20px] text-[#4D4D4D] w-[330px] leading-[120%] pt-[16px]">
            We deliver your products safely to your home in a reasonable time.
          </p>
          <div className="mt-8">
            <button className="flex items-center justify-center h-[49px] w-[178px] bg-[#F95C19] text-white rounded font-second-font font-medium">
              <span>Get started</span>
              <FaArrowRight className="ml-2 text-[20px]" />
            </button>
          </div>
        </div>
        
        {/* Image container */}
        <div>
          <img src={banner} alt="banner" />
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Banner;

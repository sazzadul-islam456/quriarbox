import React from "react";
import delivery from "../../assets/delivery.png";
import video from "../../assets/video.png";

const Delivery = () => {
  return (
    <div className="bg-[#fff7e6]">
      <div className="relative max-w-[1320px] mx-auto pb-[150px]">
        {/* Delivery Image */}
        <button>
        <img src={delivery} alt="Delivery" className="w-full" />
        </button>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Video Image */}
          <img src={video} alt="Video" className="mb-6 w-20 h-20 md:w-32 md:h-32 " />

          {/* Text Content */}
          <p className="font-second-font font-bold text-[31px] text-[#F95C19]">FASTEST DELIVERY</p>
          <p className="mt-4 w-[673px] font-primary-font font-light text-[25px] text-white">
            You can get your valuable item in the fastest period of time with
            safety. Because your emergency is our first priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

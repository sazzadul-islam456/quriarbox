import React from "react";
import image from "../../assets/quoteicon.png";
import { MdStar } from "react-icons/md";
import avater from "../../assets/avatar.png";

const Testimonial = () => {
  return (
    <div className="bg-[#fff7e6] py-12">
      <div className="max-w-[1320px] mx-auto">
        {/* Title Section */}
        <div className="flex justify-center text-center">
          <div className="flex items-center space-x-6">
            {/* Quote Icon */}
            <img src={image} alt="Quote Icon" className="w-16 h-16" />

            {/* Text Content */}
            <div>
              <p className="text-[31px] font-bold text-[#F95C19]">TESTIMONIAL</p>
              <p className="text-[39px] font-extrabold font-primary-font text-[#11111D]">
                Our Awesome Clients
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white w-[882px] h-auto mx-auto mt-12 p-6 rounded-2xl shadow-lg">
          <div className="w-full px-6">
            {/* Testimonial Title */}
            <p className="font-primary-font font-bold text-[25px] text-[#F95C19]">
              Fantastic service!
            </p>

            {/* Testimonial Description */}
            <p className="font-primary-font font-medium text-[16px] text-[#464558] text-justify pt-4">
              I purchased a phone from an e-commerce site, and this courier
              service provider assisted me in getting it delivered to my home. I
              received my phone within one day, and I was really satisfied with
              their service when I received it. They are really quick and
              dependable. They give me the option of real-time delivery
              status, which allows me to track the progress of my goods
              delivery. I get a lot of questions from call center support and
              key account managers. They come highly recommended. Confidently
              say that they are really reliable.
            </p>

            {/* Footer Section */}
            <div className="flex justify-between items-center pt-4">
              {/* Star Ratings */}
              <div className="flex space-x-1">
                <MdStar className="text-[#F95C19] text-[25px]" />
                <MdStar className="text-[#F95C19] text-[25px]" />
                <MdStar className="text-[#F95C19] text-[25px]" />
                <MdStar className="text-[#F95C19] text-[25px]" />
                <MdStar className="text-[#F95C19] text-[25px]" />
              </div>

              {/* Author Information */}
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-primary-font font-bold text-[16px]">
                    Yves Tanguy
                  </p>
                  <p className="font-primary-font font-medium text-[16px] text-[#464558]">
                    Chief Executive, DLF
                  </p>
                </div>
                <img
                  src={avater}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border-2 border-[#F95C19]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

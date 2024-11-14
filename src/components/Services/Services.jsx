import React from "react";
import icon from "../../assets/icon1.png";
import { MdStar } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-[#fff7e6]">
      <div className="max-w-[1320px] mx-auto py-[170px]">
        <div className="text-center">
          <p className="font-second-font font-bold text-[32px] text-[#F95C19]">
            SERVICES
          </p>
          <p className="font-primary-font font-extrabold text-[40px] text-[#11111D]">
            Our services for you
          </p>
        </div>

        <div className="flex justify-between">
          {/* Service Card 1 */}
          <div className="w-[424px] h-[583px] bg-white rounded-[16px]">
            <div className="flex flex-col items-center">
              <div className="pt-8 flex justify-center">
                <img src={icon} alt="" className="mx-auto" />
              </div>
              <p className="font-primary-font font-extrabold text-[25px] text-[#464558] py-[25px]">
                Business Services
              </p>
            </div>
            <div className="pl-[60px]">
              <p className="w-[300px] font-primary-font font-medium text-[16px] leading-[145%] text-[#7B7A8B]">
                We give you complete reliable delivery for your company. We will
                take full responsibility of the deliveries.
              </p>
              <div className="flex flex-col gap-[12px] pt-[20px] font-primary-font">
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Corporate goods</p>
                </div>
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Shipment</p>
                </div>
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Corporate goods</p>
                </div>
              </div>

              <div className="pt-[60px]">
                <button className="w-[301px] h-[49px] border-2 border-[#F95C19] rounded-lg font-bold text-[20px] text-[#F95C19] hover:bg-[#F95C19] hover:text-white transition-colors duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="w-[424px] h-[583px] bg-white rounded-[16px]">
            <div className="flex flex-col items-center">
              <div className="pt-8 flex justify-center">
                <img src={icon} alt="" className="mx-auto" />
              </div>
              <p className="font-primary-font font-extrabold text-[25px] text-[#464558] py-[25px]">
                Business Services
              </p>
            </div>
            <div className="pl-[60px]">
              <p className="w-[300px] font-primary-font font-medium text-[16px] leading-[145%] text-[#7B7A8B]">
                We give you complete reliable delivery for your company. We will
                take full responsibility of the deliveries.
              </p>
              <div className="flex flex-col gap-[12px] pt-[20px] font-primary-font">
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Corporate goods</p>
                </div>
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Shipment</p>
                </div>
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Corporate goods</p>
                </div>
              </div>

              <div className="pt-[60px]">
                <button className="w-[301px] h-[49px] border-2 border-[#F95C19] rounded-lg font-bold text-[20px] text-[#F95C19] hover:bg-[#F95C19] hover:text-white transition-colors duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="w-[424px] h-[583px] bg-white rounded-[16px]">
            <div className="flex flex-col items-center">
              <div className="pt-8 flex justify-center">
                <img src={icon} alt="" className="mx-auto" />
              </div>
              <p className="font-primary-font font-extrabold text-[25px] text-[#464558] py-[25px]">
                Business Services
              </p>
            </div>
            <div className="pl-[60px]">
              <p className="w-[300px] font-primary-font font-medium text-[16px] leading-[145%] text-[#7B7A8B]">
                We give you complete reliable delivery for your company. We will
                take full responsibility of the deliveries.
              </p>
              <div className="flex flex-col gap-[12px] pt-[20px] font-primary-font">
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Corporate goods</p>
                </div>
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Shipment</p>
                </div>
                <div className="flex items-center">
                  <MdStar className="text-[#F95C19]" />
                  <p className="text-[#7B7A8B]">Corporate goods</p>
                </div>
              </div>

              <div className="pt-[60px]">
                <button className="w-[301px] h-[49px] border-2 border-[#F95C19] rounded-lg font-bold text-[20px] text-[#F95C19] hover:bg-[#F95C19] hover:text-white transition-colors duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

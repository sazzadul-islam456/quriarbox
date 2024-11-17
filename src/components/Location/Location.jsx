import React from "react";
import { MdLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="bg-[#fff7e6] pb-[183px]">
      <div className="max-w-[1320px] mx-auto">
        {/* Center Text */}
        <div className="flex flex-col items-center text-center py-6">
          <p className="font-second-font font-bold text-[31px] text-[#F95C19]">
            FIND US
          </p>
          <p className="font-primary-font font-extrabold text-[39px] text-[#222132]">
            Access us easily
          </p>
        </div>

        {/* Content Section */}
        <div className="flex justify-center gap-8">
          {/* Google Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116823.00871188422!2d90.29595711646371!3d23.793017909086448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1731771538010!5m2!1sen!2sbd"
              width="761"
              height="428"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Section */}
          <div className="bg-white w-[536px] h-[428px] p-6 justify-center">
            <div className="pt-[81px] pl-[50px]">
              <p className="font-primary-font font-bold text-[20px] text-[#222132] ">
                Contact with us
              </p>
              <div className="flex items-center gap-4 text-[#464558] text-[16px] pt-[37px]">
                <MdLocationOn className="text-[24px] text-[#F95C19]" />
                <p className="font-primary-font font-medium text-[16px]">
                  2277 Lorem Ave, San Diego, CA 22553
                </p>
              </div>

              <div className="flex items-center gap-4 text-[#464558] text-[16px] pt-[15px]">
                <LuClock3 className="text-[24px] text-[#F95C19]" />
                <p className="font-primary-font font-medium text-[16px] w-[322px]">
                  Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm
                </p>
              </div>

              <div className="flex items-center gap-4 text-[#464558] text-[16px] pt-[15px]">
                <IoMailOpenOutline className="text-[24px] text-[#F95C19]" />
                <p className="font-primary-font font-medium text-[16px]">
                  info@quriarbox.com
                </p>
              </div>
              <div className=" flex justify-start pt-[51px]">
                <FaFacebookSquare className="w-[22px] h-[22px] mr-[20px] text-[#81819e] hover:text-[#F95C19] duration-500" />
                <FaInstagram className="w-[22px] h-[22px] mr-[20px] text-[#81819e] hover:text-[#F95C19] duration-500" />
                <FaXTwitter className="w-[22px] h-[22px] mr-[20px] text-[#81819e] hover:text-[#F95C19] duration-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[30px] flex justify-center items-center">
          <button
            type="submit"
            className=" bg-[#F95C19] text-white w-[560px] h-[71px] py-3 rounded-lg font-bold hover:bg-[#d84b16] transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <FaPhoneAlt className="text-[20px]" />
            <span>Call us to delivery  123-456789</span>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;

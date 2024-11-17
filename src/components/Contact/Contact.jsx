import React from "react";
import image from "../../assets/Illustration.png";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#fff7e6]">
      <div className="max-w-[1320px] mx-auto py-[150px]">
        <div className=" flex justify-center mx-auto">
          {/* Left Section */}
          <div className=" flex justify-between">
            <div className="">
            <img src={image} alt="Illustration" className="mb-6" />
            <p className="font-second-font font-bold text-[24px] text-[#F95C19]">
              REQUEST A CALLBACK
            </p>
            <p className="font-primary-font font-extrabold text-[39px] text-[#222132] w-[412px]">
              We will contact in the shortest time.
            </p>
            <p className="font-primary-font font-semibold text-[25px] text-[#9291A1] mb-6">
              Monday to Friday, 9am-5pm.
            </p>
            </div>

           <div className=" pl-[23px]">
             {/* Form Section */}
             <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[16px] font-medium text-[#11111D] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-[423px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F95C19]"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[16px] font-medium text-[#11111D] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-[423px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F95C19]"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[16px] font-medium text-[#11111D] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-[423px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F95C19]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-[54px]">
              <button
  type="submit"
  className=" bg-[#F95C19] text-white w-[424px] py-3 rounded-lg font-bold hover:bg-[#d84b16] transition-all duration-300 flex items-center justify-center space-x-2"
>
  <span>Send Message</span>
  <FaTelegramPlane className="text-[20px]" />
</button>
              </div>
            </form>
           </div>
          </div>

          {/* Right Section (Empty for now) */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

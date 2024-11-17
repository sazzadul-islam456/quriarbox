import React from "react";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (

    // contact part 2
    <div className="bg-[#222132]">
      <div className="max-w-[1320px] mx-auto">
        <div className="h-[274px] ">
          <div className=" flex flex-row justify-between items-center">
            <div className=" flex flex-col gap-5 pt-[84px]">
              <p className=" font-primary-font font-bold text-[39px] text-white">
                Get an update every week
              </p>
              <p className=" text-[#C5C5D2] font-primary-font font-medium text-[16px] w-[500px]">
                We ensure that your product is delivered in the safest possible
                manner, at the correct location, at the right time.
              </p>
            </div>
            <div className="pt-[92px]">
              <p className=" font-second-font font-bold text-[16px] text-[#F95C19]">
                SUBSCRIBE TO NEWSLETTER
              </p>
              <div className=" flex">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[16px] font-medium text-[#11111D] mb-2"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-[386px] border bg-[#222132] border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#C5C5D2]"
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-[#F95C19] text-white w-[134px] h-[49px] py-3 rounded-lg font-bold hover:bg-[#d84b16] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* contact part2 */}
      <div className="bg-[#2F2E41] pt-[50px]">
        <div className="max-w-[1320px] mx-auto h-[235px]">
          <div className=" flex ">
            <div className="pt-[15px]">
              <img src={logo} alt="" className="pb-5" />
              <p className=" font-primary-font font-semibold text-[16px] w-[190px] text-[#9291A1] ">
                The most trusted Courier company in your area.
              </p>
            </div>
            <div className="pl-[482px] flex ">
              <div className=" flex flex-col gap-1 ">
                <p className=" font-second-font font-bold text-[20px] text-white pb-[22px]">
                  Other links
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Blogs
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Movers website
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Traffic Update
                </p>
              </div>

              <div className=" flex flex-col gap-1 pl-[136px]">
                <p className=" font-second-font font-bold text-[20px] text-white pb-[22px]">
                  Services
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Corporate goods
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Artworks
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Documents
                </p>
              </div>

              <div className=" flex flex-col gap-1 pl-[126px]">
                <p className=" font-second-font font-bold text-[20px] text-white pb-[22px] w-[141px]">
                  Customer Care
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  About Us
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Contact US
                </p>
                <p className=" font-primary-font font-semibold text-[16px] text-[#9291A1]">
                  Get Update
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* contact part 3 */}

      <div className="h-[76px] flex justify-between items-center max-w-[1320px] mx-auto ">
        <p className="text-[#DBDBE9] font-primary-font font-medium text-[13px]">All rights Reserved © Your Company, 2021</p>
        <p className="text-[#DBDBE9] font-primary-font font-medium text-[13px]">Made with heart by <span className="text-[#F95C19]">ThemeWagon</span></p>
      </div>
    </div>
  );
};

export default Footer;

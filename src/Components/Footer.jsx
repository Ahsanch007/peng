import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="w-[1330px] max-w-[98vw] m-auto py-8 ">
        <div className="flex rs4:flex-row flex-col rs4:justify-between rs4:gap-y-0 gap-y-7 rs4:items-end items-center ">
          {/* 1 */}
          <div className="">
            <img src="./assets/pengsmall.svg" alt="" />
            <div className="flex items-center gap-2 mt-2">
              <img src="./assets/cop.png" alt="" />
              <p className="text-[18px] font-bold font-poppins-bold">2024 PENG. PENGUIN.</p>
            </div>
          </div>

          {/* 2 */}
          <div className="rs4:max-w-[32%] max-w-full px-5">
            <h1 className="text-[15px] font-poppins-bold text-[#b0c2d4] mb-2.5">
              DISCLAIMER
            </h1>
            <p className="text-[13px] font-poppins-bold text-[#b0c2d4]">
              $PENG WAS MADE FOR A FAN AND HAS NO VALUE. DON'T RISK MONEY YOU
              ARE AFRAID OF LOSING. THE PRICE MAY GO UP OR IT MAY GO DOWN. WE
              ARE NOT RESPONSIBLE FOR THE PRICE OF THE TOKEN.
            </p>
          </div>

          {/* 3 */}
          <div className="text-[16px] font-poppins-bold">$PENG ON SOLANA.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

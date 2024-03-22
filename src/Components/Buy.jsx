import React from "react";

const Buy = () => {
  return (
    <div className="rs4:mt-[12rem] mt-[6rem]  ">
      <img src="./assets/howto.png" alt="" />
      <div className="w-[1370px] max-w-[96vw] m-auto">
        {/* IMAGES */}
        <div className="rs3:mt-0 mt-12">
          <div className="flex rs0:flex-row flex-col gap-y-8 items-center justify-between rs4:pr-[50px] pr-0">
            <img src="./assets/icedbg.svg" alt="" />
            <img src="./assets/icedbg2.svg" alt="" />
          </div>
          <div className="flex rs0:flex-row flex-col gap-y-8 items-center justify-between rs4:pr-[50px] pr-0 mt-10">
            <img
              src="./assets/icedbg3.svg"
              className="rs4:pl-[40px] pl-0"
              alt=""
            />
            <img src="./assets/icedbg4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;

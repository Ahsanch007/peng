import React from "react";

const Available = () => {
  return (
    <>
      <div className="w-[1370px] max-w-[98vw] m-auto  rs4:mt-[5rem] -mt-[7rem]">
        {/* ABoUt texT */}
        <div className="relative">
          {/* Ellipse Background */}
          <div className="bg-[url('./assets/elipse.svg')] bg-contain bg-no-repeat w-full h-[432px] bg-center absolute top-0 left-0 flex items-center justify-center">
            {/* Heading and Paragraph */}
            <div className="text-left rs1:w-[50%] rs2:w-[60%] rs3:w-[70%] w-[80%]">
              <h1 className="rs1:text-[68px] rs2:text-[64px] rs3:text-[60px] rs4:text-[55px] sm:text-[45px] text-[41px] font-poppins-extrabold">
                ABOUT PENG
              </h1>
              <p className="rs1:text-[22px] rs2:text-[23px] rs3:text-[21px] rs4:text-[23px] sm:text-[20px] text-[12px] font-poppins-extrabold">
                WELCOME TO $PENG, THE ICY ADDITION TO THE SOLANA BLOCKCHAIN! OUR
                SMALL YET MIGHTY PENGUIN, WITH A HINT OF PEPE THE FROG, BRINGS A
                FRESH BREEZE OF CREATIVITY TO THE DEGEN WORLD OF SOLANA. AS THE
                NEWEST AND FRESHEST MEME TOKEN, $PENG IS HERE SPICE THINGS UP.
                JOIN US IN BRINGING WARMTH AND GATHERING LIQUIDITY TO THE FROSTY
                SOLANA CHAIN.
              </p>
            </div>
          </div>
        </div>
        {/* END of ABouT tEXt */}
      </div>

      {/* BaCkGr ImG */}
      <div className="relative rs4:mt-[36rem] mt-[30rem]">
        <img
          src="./assets/available-background.svg"
          className="absolute left-0 top-[50%] translate-y-[-35%] "
          alt=""
        />
        <div className="flex flex-col gap-12 available__container">
          <h1 className="text-center text-[#FFF] leading-[100%] rs4:text-[71px] text-[50px] font-poppins-extrabold">
            AVAILABLE ON
          </h1>
          {/*  */}
          <div className="grid gap-4 rs2:grid-cols-3 rs4:grid-cols-2 grid-cols-1 place-items-center gap-y-7 ">
            <img src="./assets/mexc.svg" className="available__item" alt="" />
            <img
              src="./assets/raydium.svg"
              className="available__item_raydium"
              alt=""
            />
            <img
              src="./assets/lbank.svg"
              className="available__item_lbank"
              alt=""
            />
            <img
              src="./assets/poloniex.svg"
              className="available__item_poloniex"
              alt=""
            />
            <img
              src="./assets/bitmart.svg"
              className="available__item_bitmart"
              alt=""
            />
            <img
              src="./assets/jupiter.svg"
              className="available__item_jupiter"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* imG */}
    </>
  );
};

export default Available;

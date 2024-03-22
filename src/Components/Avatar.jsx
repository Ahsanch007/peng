import React, { useState } from "react";

const Avatar = () => {
  const images = ['./assets/avatar.jpeg', './assets/944.jpeg', './assets/3868.jpeg', ]; // Array of image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Initial index of the current image

  const generateImage = () => {
    // Generate a random index within the range of the images array
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomIndex);
  };

  const downloadImage = () => {
    // Get the image element
    const image = document.querySelector('.avatar__avatar img');

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = image.src;
    link.download = 'avatar.jpg';

    // Append the link to the document body
    document.body.appendChild(link);

    // Simulate click on the link to trigger download
    link.click();

    // Clean up: remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <div className="w-[1370px] max-w-[98vw] m-auto rs4:mt-[12rem] mt-[6rem]">
      <div className="flex flex-col items-center gap-16">
        {/* TEXT  =====> */}
        <div className="flex flex-col items-center gap-6">
          {/* HEADINGS */}
          <div className="text-center mb-6">
            <h1 className="avatar__title font-poppins-extrabold rs1:text-[64px] rs3:text-[48px] rs4:text-[44px] text-[38px] ">
              RANDOM PENG
            </h1>
            <h1 className="avatar__title1 font-poppins-extrabold rs1:text-[64px] rs3:text-[48px] rs4:text-[44px] text-[38px]">
              AVATAR GENERATOR
            </h1>
          </div>

          {/* PARAGRAPH */}
          <p className="rs2:text-[24px] font-poppins-bold text-[20px] text-[#FFF] text-center max-w-[50rem]">
            DO YOU LIKE PENG? SHOW IT TO EVERYONE! NOW YOU CAN GENERATE YOUR OWN
            RANDOM AVATAR.
          </p>

          {/* BUTTONS   ==== > */}
          <div className="flex gap-6 justify-center mt-2">
        <button className="uppercase avatar__btn rs4:text-[24px] text-[19px]" onClick={generateImage}>
          GENERATE
        </button>
        <button className="uppercase font-poppins-bold bg-black text-[#ffde68] avatar__btn1 rs4:text-[24px] text-[19px]" onClick={downloadImage}>
          DOWNLOAD JPG
        </button>
      </div>
        </div>

        {/* IMAGE  ====> */}
        <div className="avatar__avatar">
        <img src={images[currentImageIndex]} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Avatar;

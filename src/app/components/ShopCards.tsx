import React from "react";
import Image from "next/image";
import card1 from "../Assets/shopcard-1.jpeg";
import card2 from "../Assets/shopcard-2.jpeg";
import card3 from "../Assets/shopcard-3.jpeg";
import card4 from "../Assets/shopcard-4.jpeg";

const ShopCards = () => {
  return (
    <div className="flex justify-center bg-off-white w-full">
      <div className="flex flex-col gap-12 py-20">
        {/* text */}
        <div className="flex flex-1 flex-col gap-[10px] items-center">
          <h2 className="text-2xl font-bold text-dark-blue">EDITORS PICK</h2>
          <p className="text-grey-text text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* images */}

        <div className=" flex flex-col tab:flex-row gap-7">
          <div className="relative w-[100%] lap:w-[50%] h-[500px]">
            <Image
              src={card1}
              alt="card1"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-[80%] left-3 bg-white px-[50px] py-[10px] shadow-md font-bold text-dark-blue text-[16px] leading-[24px] hover:light-grey">
              MEN
            </button>
          </div>

          <div className="relative w-[100%] lap:w-[25%] h-[500px]">
            <Image
              src={card2}
              alt="card2"
              className="w-full h-full object-cover"
            />
            <button className="absolute top-[80%] left-3 bg-white px-[30px] py-[10px] shadow-md font-bold text-dark-blue text-[16px] leading-[24px] hover:light-grey">
              WOMEN
            </button>
          </div>

          <div className=" w-[100%] lap:w-[25%] h-[500px] flex flex-col gap-4">
            <div className="relative w-[100%] h-[49%]">
              <Image
                src={card3}
                alt="card3"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-[70%] left-3 bg-white px-[15px] laptop:px-[30px] py-[10px] shadow-md font-bold text-dark-blue text-[12px] lap:text-[16px] leading-[24px] hover:light-grey">
                ACCESSORIES
              </button>
            </div>
            <div className="relative w-[100%] h-[49%]">
              <Image
                src={card4}
                alt="card4"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-[70%] left-3 bg-white px-[30px] py-[10px] shadow-md font-bold text-dark-blue text-[16px] leading-[24px] hover:light-grey">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;

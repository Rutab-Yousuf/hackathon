import React from "react";
import Image from "next/image";
import bg from "../Assets/carousel-2.png";

const Carousel = () => {
  return (
    <div className="bg-dark-green flex flex-col items-center tab:flex tab:flex-row tab:justify-center pt-0 tab:pt-10 lap:pt-20 h-[600px] tab:h-[500px] lap:h-auto w-full">  


{/* Text */}
      <div className="w-[100%] tab:w-[70%] lap:w-[50%] flex flex-col text-center tab:text-left text-white gap-5 mt-5 px-16 tab:px-20">
        <h5 className="font-bold text-base">Summer 2020</h5>
        <h1 className="font-bold text-3xl lap:text-6xl leading-snug tracking-wide">VITA CLASSIC PRODUCT </h1>
        <h4 className="font-normal text-sm tab:text-md lap:text-xl text-white">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </h4>
        <div className="flex ml-5 mt-5 tab:ml-0 gap-[10px]">
          <button className="text-sm font-bold text-center text-light-grey px-4 py-[15px] rounded-[5px]">
            $ 16.48
          </button>
          <button className="text-sm font-bold text-center bg-green text-white px-6 py-[15px] rounded-[5px]">
            ADD TO CART
          </button>
        </div>
      </div>


{/* Image */}
      <div className="mt-2 w-[40%] lap:w-[50%]">
        <Image src={bg} alt="hero" className=" w-full h-full object-contain" />



      </div>
    </div>
  );
};

export default Carousel;

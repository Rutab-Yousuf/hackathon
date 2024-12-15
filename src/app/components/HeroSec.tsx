import React from "react";
import Image from "next/image";
import hero from "../Assets/herosec.jpeg";

const HeroSec = () => {
  return (
    <div className=" mt-16 lap:mt-auto">
      <div className=" relative w-full h-[800px] tab:h-[750px]">
        {/* Background Image */}

        <Image src={hero} alt="hero" className="w-full h-full object-cover" />

        {/* Text Overlay */}
        <div>
          <div className=" w-auto lap:w-full absolute top-[20%] left-15 gap-10 flex justify-center tab:justify-arround">
            <div className="flex flex-col text-center items-center tab:items-start gap-9 py-12 px-16 tab-px-20 tab:text-left">
              <h5 className="font-bold text-base text-white">SUMMER 2020</h5>
              <h1 className=" font-bold text-3xl tab:text-5xl lap:text-6xl tracking-wide text-white">
                NEW COLLECTION
              </h1>
              <h4 className="font-normal text-[10px] lap:text-base text-white">
                We know how large objects will act, but things on a small scale.
              </h4>
              <button className="px-5 mt-5 bg-green py-3 rounded-md text-white hover:shadow-lg">
                Shop Now
              </button>
            </div>
            <div className="w-1/3 h-auto hidden lap:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;

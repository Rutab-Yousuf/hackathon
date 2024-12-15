import React from "react";
import Image from "next/image";
import hero from "../Assets/bgabout.png";
import video from "../Assets/Video card.png";
const HeroSec = () => {
  return (
    <div>
      <div className=" mt-16 lap:mt-auto">
        <div className=" relative w-full h-[700px] tab:h-[650px]">
          {/* Background Image */}

          <Image src={hero} alt="hero" className="w-full h-full object-cover" />

          {/* Text Overlay */}
          <div>
            <div className=" w-auto lap:w-full absolute top-[20%] left-15 gap-10 flex justify-center tab:justify-arround">
              <div className="flex flex-col text-center items-center tab:items-start gap-9 py-12 px-16 tab-px-20 tab:text-left">
                <h5 className="font-bold text-base text-dark-blue">
                  About Company
                </h5>
                <h1 className=" font-bold text-3xl tab:text-5xl lap:text-6xl tracking-wide text-dark-blue">
                  ABOUT US
                </h1>
                <h4 className="font-normal text-[10px] lap:text-base text-grey-text">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
                <button className="px-5 mt-5 bg-sky-blue py-3 rounded-md text-white hover:shadow-lg">
                  Get Quote Now
                </button>
              </div>
              <div className="w-1/3 h-auto hidden lap:block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* problems  bar */}

      <div className="flex justify-center items-center py-12">
        <div className="flex flex-col tab:flex-row gap-10 tab:gap-16 items-center px-20">
          <div className="flex flex-col gap-5 text-center tab:text-left">
            <h5>
              <span className="text-sm font-bold text-[#E74040]">
                Problems Trying
              </span>
            </h5>
            <p className="text-dark-blue font-bold text-xl">
              Met minima mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div>
            <p className="text-grey-text mt-10">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>
      {/* numbers bar */}
      <div>
        <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-4 gap-16 tab:gap-7 px-16 items-center py-20">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold text-dark-blue">15K</h2>
            <span className="text-grey-text text-sm font-bold">
              Happy Customers
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold text-dark-blue">150K</h2>
            <span className="text-grey-text text-sm font-bold">
              Monthly Visitors
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold text-dark-blue">15</h2>
            <span className="text-grey-text text-sm font-bold">
              Countries Worldwide
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-5xl font-bold text-dark-blue">100+</h2>
            <span className="text-grey-text text-sm font-bold">
              Top Partners
            </span>
          </div>
        </div>
      </div>

      {/* video image */}
      <div>
        <div className="w-full h-[700px] px-15 tab:px-24 lap:px-40 py-24">
          <Image
            src={video}
            alt="video"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;

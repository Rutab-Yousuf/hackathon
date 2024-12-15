import React from "react";
import Image from "next/image";
import Logo from "./logo";
import client from "../Assets/workclient.png";

const Clients = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-12 lap:gap-20 py-28 px-5 bg-light-grey">
          {/* text */}
          <div className="flex flex-1 flex-col gap-4 text-center items-center">
            <h3 className=" text-3xl lap:text-4xl font-bold text-dark-blue">
              Big Companies Trust Us
            </h3>
            <p className="text-grey-text text-sm font-bold">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* logo */}
          <Logo />
        </div>
      </div>
      {/* work with us section */}

      <div>
        <div className="relative bg-blue flex py-20 h-[550px] ">
          {/* text */}
          <div className="w-full tab:w-[60%] lap:w-[70%] flex flex-col items-center tab: text-center tab:text-left bg-blue gap-5 mt-5 px-10 lap:px-20">
            <h5 className="font-bold text-base text-white">Work With Us</h5>
            <h1 className="font-bold text-3xl tab:text-4xl lap:text-6xl text-white leading-snug tracking-wide">
              
              Now Let s Grow Yours
            </h1>
            <p className="text-xl text-white">
              The gradual accumulation of information about atomic and
              small-scale behaviour during the first quarter of the 20th century
            </p>
            <div className="flex mt-5 ">
              <button className="text-sm font-bold text-center text-white border border-white px-[40px] py-[15px] rounded-[5px]">
                READ MORE
              </button>
            </div>
          </div>

          {/* image */}
          <div className="absolute -top-6 right-0 hidden tab:block w-[20%] tab:w-[40%] lap:w-[30%] h-[600px] bg-light-grey">
            <Image
              src={client}
              alt="client"
              className=" w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

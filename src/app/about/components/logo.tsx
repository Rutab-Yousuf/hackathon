import React from "react";
import Image from "next/image";
import logo1 from "../assets/client1.png";
import logo2 from "../assets/client2.png";
import logo3 from "../assets/client3.png";
import logo4 from "../assets/client4.png";
import logo5 from "../assets/client5.png";
import logo6 from "../assets/client6.png";

const logo = () => {
  return (
    <div>
      {/* images */}
      <div className="grid grid-cols-1 lap:grid-cols-6 gap-12 px-16">
        <div className="w-[100%]">
          <Image
            src={logo1}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[100%]">
          <Image
            src={logo2}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[100%]">
          <Image
            src={logo3}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[100%]">
          <Image
            src={logo4}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[100%]">
          <Image
            src={logo5}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[100%]">
          <Image
            src={logo6}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default logo;

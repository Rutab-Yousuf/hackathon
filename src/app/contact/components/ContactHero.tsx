import React from "react";
import Image from "next/image";
import hero from "../assets/contact-hero-bg.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const ContactHero = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center py-12 px-4 tab:flex-row tab:justify-center tab:items-center tab:px-6 lap:px-16 gap-4 ">
        {/* text section  */}
        <div className="flex flex-col gap-4 tab:w-[50%]">
          <div className="flex flex-col text-center items-center tab:items-start gap-9 py-12 px-16 tab-px-20 tab:text-left">
            <h5 className="font-bold text-base text-dark-blue">CONTACT US</h5>
            <h1 className=" font-bold text-3xl tab:text-5xl lap:text-6xl tracking-wide text-dark-blue">
              Get In Touch With Us!
            </h1>
            <h4 className="text-base text-grey-text">
              We know how large objects will act, but things on a small scale.
            </h4>
            <h3 className="font-bold text-lg"> Phone : +0123 456 789</h3>
            <h3 className="font-bold text-lg">Fax : +0123 456 789</h3>
            <div className="flex gap-8 mt-2">
              <FaFacebook className="text-dark-blue text-xl" />{" "}
              <FaTwitter className="text-dark-blue text-xl" />{" "}
              <FaInstagram className="text-dark-blue text-xl" />{" "}
              <FaLinkedin className="text-dark-blue text-xl " />
            </div>
          </div>
        </div>

        {/* image section */}
        <div className="flex flex-col gap-4 tab:w-[50%]">
          <Image src={hero} alt="hero" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

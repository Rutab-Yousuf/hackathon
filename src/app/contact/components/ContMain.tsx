import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const main = () => {
  return (
    <div className="flex flex-col justify-center py-12 px-10">
      {/* text  */}

      <div className="flex flex-col text-center gap-5">
        <h5 className="font-bold text-sm text-dark-blue">VISIT OUR OFFICE</h5>
        <h1 className=" font-bold text-3xl tab:4xl tracking-wide text-dark-blue">
          We Help You To Make Your Business Grow
        </h1>
      </div>

      {/* cards */}

      <div className="grid grid-cols-1 gap-4 tab:grid-cols-3 tab:gap-0 justify-center p-16">
        {/* Phone Card */}
        <div className="flex flex-col gap-8 bg-white text-center p-5 tab:p-16 transform transition-all hover:bg-black hover:text-white">
          <div className="flex justify-center items-center">
            <h3 className="text-5xl font-extrabold text-sky-blue">
              <IoCallOutline />
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold"> +0123 456 789</span>
            <span className="text-xl font-bold"> +0123 456 789</span>
          </div>
          <div>
            <p className="mt-2 font-medium text-lg text-grey-text">
              Get Support
            </p>
          </div>
          <button className="text-sky-blue hover:bg-light-grey px-2 py-4 font-medium shadow-md border border-sky-blue rounded-full">
            Call Now
          </button>
        </div>

        {/* Location Card */}
        <div className="flex flex-col gap-8 bg-white text-center p-5 tab:p-16 transform transition-all hover:bg-black hover:text-white">
          <div className="flex justify-center items-center">
            <h3 className="text-5xl font-extrabold text-sky-blue">
              <FaLocationDot />
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold"> street 5, New York, USA </span>
            <span className="text-xl font-bold"> street 5, New York, USA </span>
          </div>
          <div>
            <p className="mt-2 font-medium text-lg text-grey-text">
              Get Support
            </p>
          </div>
          <button className="text-sky-blue hover:bg-light-grey px-2 py-4 font-medium shadow-md border border-sky-blue rounded-full">
            Get Location
          </button>
        </div>

        {/* Mail Card */}
        <div className="flex flex-col gap-8 bg-white text-center p-5 tab:p-16 transform transition-all hover:bg-black hover:text-white">
          <div className="flex justify-center items-center">
            <h3 className="text-5xl font-extrabold text-sky-blue">
              <IoIosMail />
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xl font-bold"> georgie.young @gmail.com</span>
            <span className="text-xl font-bold"> georgie.young @gmail.com</span>
          </div>
          <div>
            <p className="mt-2 font-medium text-lg text-grey-text">
              Get Support
            </p>
          </div>
          <button className="text-sky-blue hover:bg-light-grey px-2 py-4 font-medium shadow-md border border-sky-blue rounded-full">
            Send Mail
          </button>
        </div>
      </div>
      {/* text  */}

      <div className="flex flex-col text-center items-center gap-5">
        <h5 className="font-bold text-sm text-dark-blue">
          WE CANT WAIT TO HEAR FROM YOU
        </h5>
        <h1 className=" font-bold text-3xl tab:4xl tracking-wide text-dark-blue">
          Lets Talk
        </h1>
        <button className="bg-sky-blue text-white px-4 py-4 font-medium shadow-md rounded-md">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default main;

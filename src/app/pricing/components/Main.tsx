"use client";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { useState } from "react";

const Main = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col bg-white items-center py-12 gap-8">
        <div>
          <h5 className="font-bold text-base text-grey-text">Pricing</h5>
        </div>
        <div>
          <h2 className="font-bold text-5xl text-dark-blue">Simple Pricing</h2>
        </div>
        <div className="flex gap-4 text-base font-semibold">
          <span className="text-dark-blue"> Home </span>
          <FaGreaterThan className="text-grey-text mt-1" />
          <span className="text-grey-text"> Pricing </span>
        </div>
      </div>

      <div className="flex flex-col items-center py-14 gap-8 px-4">
        <div>
          {" "}
          <h2>
            <span className="font-bold text-5xl text-dark-blue">Pricing</span>
          </h2>
        </div>
        <div>
          <p className="text-grey-text max-w-xl text-center text-sm font-medium">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics vs. relativistic mechanics
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Monthly</span>

            {/* Toggle Switch */}
            <label className="relative inline-block w-16 h-8 hover:cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
                className="opacity-0 w-0 h-0"
              />
              <span
                className={`absolute inset-0 rounded-full  hover:border hover:border-sky-blue transition-all duration-300 ${
                  isChecked ? "bg-green" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
                    isChecked ? "transform translate-x-8" : ""
                  }`}
                ></span>
              </span>
            </label>

            <span className="text-lg font-semibold">Yearly</span>

            {/* Save 20% Button */}

            <button className="ml-2 py-1 px-4 bg-sky-blue bg-opacity-40 text-sky-blue rounded-full text-sm hover:bg-opacity-100 hover:text-white">
              Save 20%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

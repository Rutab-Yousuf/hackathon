import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 tab:grid-cols-3 gap-4 p-20">
      {/* Free Card */}
      <div className="flex flex-col gap-8 bg-white text-center p-10 border border-sky-blue rounded-lg transform transition-all hover:bg-black hover:text-white hover:scale-110">
        <div>
          <h3 className="text-3xl font-bold">Free</h3>
        </div>
        <div>
          <p className="mt-2 font-medium text-grey-text">Basic features</p>
        </div>
        <div className="flex gap-2 justify-center items-center text-sky-blue">
          <h2 className="text-3xl font-bold">0</h2>
          <div className="flex flex-col text-left text-base">
            <h3>$</h3>
            <h5>per month</h5>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-grey-text text-xl mt-1" />
            <span> 1GB Cloud Storage </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-grey-text text-xl mt-1" />
            <span> Email and Community support</span>
          </div>
        </div>
        <div>
          <button className="bg-sky-blue text-white py-2 px-4 rounded-md">
            Try for Free
          </button>
        </div>
      </div>

      {/* Standard Card */}
      <div className="flex flex-col gap-8 bg-white text-center p-10 border border-sky-blue rounded-lg transform transition-all hover:bg-black hover:text-white hover:scale-110">
        <div>
          <h3 className="text-3xl font-bold">Standard</h3>
        </div>
        <div>
          <p className="mt-2 font-medium text-grey-text">Additional features</p>
        </div>
        <div className="flex gap-2 justify-center items-center text-sky-blue">
          <h2 className="text-3xl font-bold">9.99</h2>
          <div className="flex flex-col text-left text-base">
            <h3>$</h3>
            <h5>per month</h5>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-grey-text text-xl mt-1" />
            <span> 1GB Cloud Storage </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-grey-text text-xl mt-1" />
            <span> Email and Community support</span>
          </div>
        </div>
        <div>
          <button className="bg-sky-blue text-white py-2 px-4 rounded-md">
            Try for Free
          </button>
        </div>
      </div>

      {/* Premium Card */}
      <div className="flex flex-col gap-8 bg-white text-center p-10 border border-sky-blue rounded-lg transform transition-all hover:bg-black hover:text-white hover:scale-110">
        <div>
          <h3 className="text-3xl font-bold">Premium</h3>
        </div>
        <div>
          <p className="mt-2 font-medium text-grey-text">
            All features included
          </p>
        </div>
        <div className="flex gap-2 justify-center items-center text-sky-blue">
          <h2 className="text-3xl font-bold">19.99</h2>
          <div className="flex flex-col text-left text-base">
            <h3>$</h3>
            <h5>per month</h5>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-green text-xl mt-1" />
            <span> Unlimited Products Update </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-grey-text text-xl mt-1" />
            <span> 1GB Cloud Storage </span>
          </div>
          <div className="flex gap-2">
            <FaCheckCircle className="text-grey-text text-xl mt-1" />
            <span> Email and Community support</span>
          </div>
        </div>
        <div>
          <button className="bg-sky-blue text-white py-2 px-4 rounded-md">
            Try for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;

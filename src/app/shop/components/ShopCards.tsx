import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";
import card1 from "../assets/card-cover-1.jpg";
import card2 from "../assets/card-cover-2.jpg";
import card3 from "../assets/card-cover-3.jpg";
import card4 from "../assets/card-cover-4.jpg";
import card5 from "../assets/card-cover-5.jpg";
import { BsGridFill } from "react-icons/bs";
import { PiListBulletsBold } from "react-icons/pi";

const ShopItems = () => {
  return (
    <div>
      <div className="bg-light-grey px-10">
        <div className="flex flex-col items-center text-center tab:flex-row justify-between py-6">
          <div className="text-2xl font-bold text-dark-blue">
            Shop by Category
          </div>
          <div className="flex gap-4 text-base font-semibold">
            <span className="text-dark-blue"> Home </span>
            <FaGreaterThan className="text-grey-text mt-1" />
            <span className="text-grey-text"> Shop </span>
          </div>
        </div>

        {/* Shop cards 1 */}
        <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-5 gap-4 pb-12">
          <div className="w-full h-full relative">
            <Image
              src={card1}
              alt="card"
              className="w-full h-full object-cover filter brightness-75 contrast-60 opacity-80"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h3 className="text-2xl font-medium">Cloths</h3>
              <p className="text-sm">12 Items</p>
            </div>
          </div>

          <div className="w-full h-full relative">
            <Image
              src={card2}
              alt="card"
              className="w-full h-full object-cover filter brightness-75 contrast-60 opacity-80"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h3 className="text-2xl font-medium">Cloths</h3>
              <p className="text-sm">6 Items</p>
            </div>
          </div>

          <div className="w-full h-full relative">
            <Image
              src={card3}
              alt="card"
              className="w-full h-full object-cover filter brightness-75 contrast-60 opacity-80"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h3 className="text-2xl font-medium">Cloths</h3>
              <p className="text-sm">7 Items</p>
            </div>
          </div>

          <div className="w-full h-full relative">
            <Image
              src={card4}
              alt="card"
              className="w-full h-full object-cover filter brightness-75 contrast-60 opacity-80"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h3 className="text-2xl font-medium">Cloths</h3>
              <p className="text-sm">9 Items</p>
            </div>
          </div>

          <div className="w-full h-full relative">
            <Image
              src={card5}
              alt="card"
              className="w-full h-full object-cover filter brightness-75 contrast-60 opacity-80"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h3 className="text-2xl font-medium">Cloths</h3>
              <p className="text-sm">14 Items</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 tab:flex-row tab:justify-between items-center px-16 py-10">
          <div>
            <p className=" text-grey-text font-bold">Showing all 12 results</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className=" text-grey-text font-bold">Sort by:</p>
            <div className="text-black p-2 border border-light-grey">
              
              <BsGridFill />
            </div>
            <div className="text-black p-2 border border-light-grey">
              
              <PiListBulletsBold />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <select
              name="popularity"
              id="popularity"
              className=" text-grey-text bg-light-grey px-6 py-4 rounded-[5px] "
            >
              <option> Popularity </option> <option>Newest </option>
            </select>
            <button className="text-sm font-bold text-center bg-sky-blue text-white px-6 py-4 rounded-[5px]">
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopItems;

"use client";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Image from "next/image";
import hero from "../assets/Background.jpg";
import { FaHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useState } from "react";
import product from "../assets/card-item.png";

const ProHero = () => {
  const [activeTab, setActiveTab] = useState("description");
  return (
    <div>
      <div className="px-10 flex gap-4 text-base text-left font-semibold">
        <span className="text-dark-blue"> Home </span>
        <FaGreaterThan className="text-grey-text mt-1" />
        <span className="text-grey-text"> Shop </span>
      </div>

      <div className="flex flex-col items-center text-center py-12 px-4 tab:flex-row tab:justify-center tab:items-center tab:px-6 lap:px-16 gap-4 ">
        {/* image section */}
        <div className="flex flex-col gap-4 tab:w-[40%]">
          <Image src={hero} alt="hero" className="w-full h-full object-cover" />
        </div>

        {/* text section  */}
        <div className="flex flex-col gap-4 tab:w-[40%]">
          <div className="flex flex-col text-center items-center tab:items-start gap-9 py-12 px-16 tab-px-20 tab:text-left">
            <div>
              <h5 className=" text-lg font-medium text-dark-blue">
                Floating Phone
              </h5>
            </div>
            <div className="flex items-center gap-2">
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStar className="text-yellow-400" />
              <IoIosStarHalf className="text-yellow-400" />
              <span className="text-sm text-grey-text"> (4.5)</span>
            </div>
            <div>
              <h1 className=" font-bold text-3xl tab:text-5xl tracking-wide text-dark-blue">
                $1,139.33
              </h1>
            </div>
            <div>
              <h3>
                <span className=" text-base text-grey-text">
                  Availability :
                </span>
                <span className=" text-base text-sky-blue">In Stock</span>
              </h3>
            </div>
            <div>
              <h4 className="text-base text-grey-text">
                Met minim molliet conseqat, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Relit aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </h4>
            </div>
            <div className="w-[80%] h-1 bg-grey-text opacity-50"></div>
            <div className="flex justify-center gap-3">
              <div className="w-8 h-8 bg-sky-blue rounded-full"></div>
              <div className="w-8 h-8 bg-dark-green rounded-full"></div>
              <div className="w-8 h-8 bg-orange rounded-full"></div>
              <div className="w-8 h-8 bg-dark-blue rounded-full"></div>
            </div>
            <div className="flex gap-8 mt-4">
              <button className="bg-sky-blue text-white py-2 px-4 rounded-md">
                Select Options
              </button>
              <div className="flex text-dark-blue text-xl px-2 items-center border rounded-full shadow-sm">
                <FaHeart />
              </div>
              <div className="flex text-dark-blue text-xl px-2 items-center border rounded-full shadow-sm">
                <IoCartOutline />
              </div>
              <div className="flex text-dark-blue text-xl px-2 items-center border rounded-full shadow-sm">
                <FaEye />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex justify-center border-b-2 border-gray-300 mb-4">
        {/* Description Tab */}
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-4 px-4 text-lg font-semibold ${
            activeTab === "description"
              ? "text-sky-blue border-b-2 border-sky-blue"
              : "text-grey-text"
          }`}
        >
          Description
        </button>

        {/* Additional Information Tab */}
        <button
          onClick={() => setActiveTab("additional")}
          className={`pb-4 px-4 text-lg font-semibold ${
            activeTab === "additional"
              ? "text-sky-blue border-b-2 border-sky-blue"
              : "text-grey-text"
          }`}
        >
          Additional Information
        </button>

        {/* Reviews Tab */}
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-4 px-4 text-lg font-semibold ${
            activeTab === "reviews"
              ? "text-sky-blue border-b-2 border-sky-blue"
              : "text-grey-text"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* tabs Description  */}

      <div className="tab-content">
        {activeTab === "description" && (
          <div className="tab-pane flex flex-col gap-8 py-8 px-8 tab:px-20 tab:flex-row tab:justify-center">
            {/* image section */}
            <div className="flex gap-4 tab:w-[30%]">
              <Image
                src={product}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 tab:w-[50%]">
              <h2 className="text-xl font-bold text-dark-blue">
                Product Description
              </h2>
              <p className="mt-2 text-grey-text">
                This is the product description. Here, you can provide details
                about the product, its features, specifications, etc.
              </p>
              <p className="mt-2 text-grey-text">
                met minim molliet conseqat, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Relit aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-2 text-grey-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae officiis, ipsam nemo eligendi animi sequi sapiente
                tempora quia incidunt perferendis!
              </p>
              <p className="mt-2 text-grey-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                optio ducimus iste, nemo distinctio nam voluptas modi, culpa
                ipsa tenetur dignissimos. Esse corrupti vero molestiae vel
                voluptatibus eveniet quisquam fuga.
              </p>
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="tab-pane flex flex-col gap-8 py-8 px-8 tab:px-20 tab:flex-row tab:justify-center">
            {/* image section */}
            <div className="flex gap-4 tab:w-[30%]">
              <Image
                src={product}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 tab:[w-50%]">
              <h2 className="text-xl font-bold text-dark-blue">
                Additional Information
              </h2>
              <ul className="mt-2 text-grey-text list-disc gap-4 max-w-3xl">
                <li>Weight: 1kg</li>
                <li>Dimensions: 10x5x3 cm</li>
                <li>Manufacturer: XYZ Corp</li>
                <li>
                  Warranty: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iure deleniti quam veniam
                </li>
                <li>
                  Shipping: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iure deleniti quam veniam eligendi possimus inventore?
                </li>
                <li>
                  Return Policy: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Iure deleniti quam veniam eligendi possimus
                  inventore?
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="tab-pane flex flex-col gap-8 py-8 px-8 tab:px-20 tab:flex-row tab:justify-center">
            {/* image section */}
            <div className="flex gap-4 tab:w-[30%]">
              <Image
                src={product}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 tab:w-[50%]">
              <h2 className="text-xl font-bold text-dark-blue">
                Customer Reviews
              </h2>
              <div className="flex flex-col gap-4 mt-2 text-gray-700">
                <p> ★★★★☆ (4.5/5)</p>
                <p>Great product, very useful! - Customer 1</p>
                <p>Good value for money. - Customer 2</p>
                <p>Not satisfied with the quality. - Customer 3</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProHero;

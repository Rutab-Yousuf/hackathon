import React from "react";
import Image from "next/image";
import card1 from "../Assets/productcard-1.jpeg";
import card2 from "../Assets/productcard-2.jpeg";
import card3 from "../Assets/productcard-3.jpeg";
import card4 from "../Assets/productcard-4.jpeg";
import card5 from "../Assets/productcard-5.jpeg";
import card6 from "../Assets/productcard-6.jpeg";
import card7 from "../Assets/productcard-7.jpeg";
import card8 from "../Assets/productcard-8.jpeg";

const ProductCards = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-10 py-20">

{/* Text */}
        <div className="flex flex-1 flex-col gap-[10px] items-center">
          <p className="text-grey-text text-sm">FEATURED PRODUCTS</p>
          <h2 className="text-2xl font-bold text-dark-blue">
            BESTSELLERS PRODUCT
          </h2>
          <p className="text-grey-text text-sm">
            Problems trying to resolve the conflict between
          </p>
        </div>

{/* Cart1 */} 
        <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-4 gap-18 tab:gap-7 px-10">
          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card1}
              alt="card1"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card2}
              alt="card2"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card3}
              alt="card3"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card4}
              alt="card4"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
{/* Cart2 */}
        <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-4 gap-18 tab:gap-7 px-10">
          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card5}
              alt="card5"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card6}
              alt="card6"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card7}
              alt="card7"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[100%] h-[600px]">
            <Image
              src={card8}
              alt="card8"
              className="w-full h-[80%] object-cover"
            />
            <div className="flex flex-col text-center gap-2 py-3 px-3">
              <h2 className="text-dark-blue font-bold text-lg">
                Graphic Design
              </h2>
              <p className="text-grey-text text-sm">
                English department store.
              </p>
              <p>
                <span className="text-grey-text line-through">16.48$ </span>
                <span className="text-dark-green"> 6.98$</span>
              </p>
              <div className="flex justify-center gap-2">
                <div className="w-[15px] h-[15px] bg-sky-blue rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-green rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-orange rounded-full"></div>
                <div className="w-[15px] h-[15px] bg-dark-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;

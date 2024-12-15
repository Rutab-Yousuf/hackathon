import React from "react";
import Header from "../components/Header";
import ShopItems from "./components/ShopCards";
import Logo from "../about/components/logo";
import ProductCards from "../components/ProductCards";
const shop = () => {
  return (
    <div>
      <Header />

      <ShopItems />

      <ProductCards />
      <div className="flex justify-center items-center py-10">
        <button className="text-grey-text hover:text-sky-blue bg-light-grey px-2 py-4 font-medium shadow-md border border-grey-text rounded-s-md">
          Previous
        </button>
        <button className="text-sky-blue hover:bg-light-grey px-4 py-4 font-medium shadow-md border border-grey-text">
          1
        </button>
        <button className="text-sky-blue hover:bg-light-grey px-4 py-4 font-medium shadow-md border border-grey-text">
          2
        </button>
        <button className="text-sky-blue hover:bg-light-grey px-4 py-4 font-medium shadow-md border border-grey-text">
          3
        </button>
        <button className="text-sky-blue hover:bg-light-grey px-4 py-4 font-medium shadow-md border border-grey-text rounded-e-md">
          Next
        </button>
      </div>

      <div className="bg-light-grey py-16">
        <Logo />
      </div>
    </div>
  );
};

export default shop;

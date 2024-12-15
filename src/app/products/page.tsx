import React from "react";
import ProductCards from "../components/ProductCards";
import Header from "../components/Header";
import ProHero from "./components/ProHero";

const product = () => {
  return (
    <div>
      <Header />

      <ProHero />

      <ProductCards />
    </div>
  );
};

export default product;

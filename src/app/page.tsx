import React from "react";
import HeroSec from "./components/HeroSec";
import ShopCards from "./components/ShopCards";
import ProductCards from "./components/ProductCards";
import Carousel from "./components/Carousel";
import Neural from "./components/Neural";
import Blog from "./components/Blog";
import Header from "./components/Header";

const Home = () => {
  return (
    <div>
      <main className="w-full">
        {/* Header and Navbar  */}
        <Header />

        {/* hero section */}
        <HeroSec />

        {/* shop cards */}
        <ShopCards />

        {/* product cards */}
        <ProductCards />

        {/* Carousel 2 */}
        <Carousel />

        {/* Neural Universe */}
        <Neural />

        {/* Blogs */}
        <Blog />
      </main>
    </div>
  );
};

export default Home;

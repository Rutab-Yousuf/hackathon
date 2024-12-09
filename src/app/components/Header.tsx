import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";


const Header = () => {
  return (
    <div className="container">
      <header className="flex flex-col gap-36">
        {/* top-header */}
        <div className=" hidden tab:flex tab:justify-evenly tab:items-center bg-[#23856D] w-full text-white text-xs lap:text-sm absolute top-[2px] px-6">
          <div className="flex gap-2">
            <div className="flex items-center gap-1 px-2">
              <IoCallOutline /> +1-202-555-0100
            </div>
            <div className="flex items-center gap-1 px-2">
              <MdMailOutline /> 2t9B6@example.com
            </div>
          </div>

          <div className="hidden lap:flex gap-2 px-2 py-2">
            <p>Follow us, and get a chance to win 80% OFF!</p>
            <a href="#" className="font-semibold">
              Shop Now
            </a>
          </div>

          <div className="flex items-center gap-2 px-2 py-2">
            <p className="font-bold">Follow Us:</p>
            <div className="flex gap-2 p-1">
              <FaInstagram />
              <FaYoutube />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>

        {/* main-Navbar */}

        <div
          className="p-4 h-52 flex flex-col justify-center lap:h-auto tab:p-6 lap:flex lap:items-center lap:justify-evenly lap:mt-16 mb-10
        "
        >

          
          {/* Title Section (Bandage on the Right) */}
          <div className="font-bold text-2xl ml-auto absolute left-10 top-14 lap:top-[72px] ">
            <h3>Bandage</h3>
          </div>

       

          {/* Navigation Links */}
          <div className="  absolute left-66 top-24 lap:top-20 ">
            <ul className=" flex flex-col gap-2 ml-5 lap-ml-auto lap:flex-row lap:gap-4 text-grey-text">
              <li>
                <Link href="/"> Home </Link>
              </li>
              <li className="block">
                <span className="flex gap-1">
                  <Link href="/shop"> Shop </Link>
                  <RiArrowDropDownLine className="relative top-1 text-lg" />
                </span>
              </li>
              <li className="block">
                <Link href="/blog"> Blog </Link>
              </li>
              <li>
                <Link href="/about"> About </Link>
              </li>
              <li>
                <Link href="/products"> Products </Link>
              </li>
              <li>
                <Link href="/pages"> Pages </Link>
              </li>
            </ul>
          </div>

          {/* Login/Register & Icons */}
          <div className=" hidden lap:flex lap:items-center text-sky-blue gap-2  absolute left-[80%] ">
            <div className="flex items-center gap-1 px-2 py-4">
              <FaUser />
              <p className="font-bold"> Login/Register </p>
            </div>
            <div className="flex gap-2 ">
              <FaSearch />
              <FaShoppingCart />
              <FaHeart />
            </div>
          </div>
          {/* </div> */}
        </div>
      </header>
    </div>
  );
};

export default Header;

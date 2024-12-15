import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-4 px-5 py-5">
        <div className="text-2xl font-bold">Bandage</div>
        <div>
          <ul className="flex gap-5 font-semibold text-grey-text">
            <li>
              <Link href="/" className="hover:text-sky-blue">
                
                Home
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-sky-blue">
                
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-sky-blue">
                
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-blue">
                
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className="text-sm text-sky-blue px-4 py-2 font-semibold rounded-md hover:shadow-lg">
            Sign In
          </button>
          <button className="flex gap-2 items-center text-sm font-semibold bg-sky-blue text-white px-4 py-2 rounded-md hover:shadow-lg">
            Become a member <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full">
      <div>
        <div className="flex items-center justify-around bg-light-grey py-10">
          <h1 className="text-2xl font-bold"> Bandage </h1>
          <div className="flex gap-4 px-10 justify-center text-sky-blue">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="border border-grey-text"></div>
      </div>
      <div className=" mx-24 py-10 mob:mx-10">
        <div className="grid grid-cols-1 lap:grid-cols-5 gap-4 justify-items-center mob:justify-items-start  pr-10 ">
          <div>
            <h2 className="font-bold mb-4">Company Info</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Legal</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Features</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Get In Touch</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-2 border border-gray-300 rounded"
                />
                <button className="bg-sky-blue text-white p-2 rounded">
                  Subscribe
                </button>
              </div>
              <p>Lorem ipsum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-grey py-4">
        <div className="text-center text-grey-text mob:text-xs mob:px-10 mob:text-left">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;

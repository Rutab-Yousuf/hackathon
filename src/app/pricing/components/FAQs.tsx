import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const FAQs = () => {
  return (
    <div>
      <div className="bg-white flex flex-col items-center py-12 px-16 gap-12">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="font-bold text-4xl text-dark-blue"> Pricing FAQs</h2>
          <p className="text-grey-text text-lg">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics.
          </p>
        </div>

        {/* FAQs */}
        <div className="grid grid-cols-1 tab:grid-cols-2 gap-8 gap-x-12">
          {/* 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FaGreaterThan className="text-sky-blue" />
              <h3 className="font-bold text-lg text-dark-blue">
                The quick fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-grey-text text-base">
                Met can make your website look modern and professional. Met can
                make your website look modern and professional. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FaGreaterThan className="text-sky-blue" />
              <h3 className="font-bold text-lg text-dark-blue">
                The quick fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-grey-text text-base">
                Met can make your website look modern and professional. Met can
                make your website look modern and professional. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FaGreaterThan className="text-sky-blue" />
              <h3 className="font-bold text-lg text-dark-blue">
                The quick fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-grey-text text-base">
                Met can make your website look modern and professional. Met can
                make your website look modern and professional. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FaGreaterThan className="text-sky-blue" />
              <h3 className="font-bold text-lg text-dark-blue">
                The quick fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-grey-text text-base">
                Met can make your website look modern and professional. Met can
                make your website look modern and professional. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FaGreaterThan className="text-sky-blue" />
              <h3 className="font-bold text-lg text-dark-blue">
                The quick fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-grey-text text-base">
                Met can make your website look modern and professional. Met can
                make your website look modern and professional. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <FaGreaterThan className="text-sky-blue" />
              <h3 className="font-bold text-lg text-dark-blue">
                The quick fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-grey-text text-base">
                Met can make your website look modern and professional. Met can
                make your website look modern and professional. Lorem ipsum
                dolor sit amet.
              </p>
            </div>
          </div>
        </div>

        {/* Question */}
        <div>
          <p className="text-grey-text text-xl font-semibold text-center">
            Haven t got your answer?
            <span className="text-sky-blue"> Contact our support</span>
          </p>
        </div>
      </div>

      {/* Free Trial */}

      <div>
        <div className="bg-white flex flex-col items-center text-center gap-8 py-10 px-12">
          <h2 className="font-bold text-4xl text-dark-blue">
            Start Your 14 Days Free Trial
          </h2>
          <p className="text-grey-text text-lg">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics.
          </p>
          <button className="text-white bg-sky-blue px-4 py-4 font-medium shadow-md rounded-md">
            Get Started
          </button>
          <div className="flex gap-8 mt-2">
            <FaFacebook className="text-sky-blue text-xl" />
            <FaTwitter className="text-sky-blue text-xl" />
            <FaInstagram className="text-sky-blue text-xl" />
            <FaLinkedin className="text-sky-blue text-xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

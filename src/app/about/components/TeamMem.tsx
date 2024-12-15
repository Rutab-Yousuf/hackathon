import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import card1 from "../Assets/team-1-user-1.jpg";
import card2 from "../Assets/team-1-user-2.jpg";
import card3 from "../Assets/team-1-user-3.jpg";

const TeamMem = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-8 lap:gap-20 py-28 px-5">
          {/* text */}
          <div className="flex flex-1 flex-col gap-4 text-center items-center">
            <h3 className=" text-3xl lap:text-4xl font-bold text-dark-blue">
              MEET OUR TEAM
            </h3>
            <p className="text-grey-text text-sm font-bold">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* cards */}
          <div className="grid grid-cols-1 lap:grid-cols-3 gap-8 px-16">
            <div className="flex flex-col h-[400px]">
              <div className="flex flex-col w-[100%] h-[70%]">
                <Image
                  src={card1}
                  alt="user1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-center gap-2 pr-10 pl-6 pt-6">
                <h4 className="text-dark-blue font-bold text-xl">Username</h4>
                <p className="text-grey-text text-sm font-bold">Profession</p>
                <div className="flex gap-4 justify-center text-sky-blue text-xl mt-2">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[400px]">
              <div className="flex flex-col w-[100%] h-[70%]">
                <Image
                  src={card2}
                  alt="user2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-center gap-2 pr-10 pl-6 pt-6">
                <h4 className="text-dark-blue font-bold text-xl">Username</h4>
                <p className="text-grey-text text-sm font-bold">Profession</p>
                <div className="flex gap-4 justify-center text-sky-blue text-xl mt-2">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-[400px]">
              <div className="flex flex-col w-[100%] h-[70%]">
                <Image
                  src={card3}
                  alt="user3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-center gap-2 pr-10 pl-6 pt-6">
                <h4 className="text-dark-blue font-bold text-xl">Username</h4>
                <p className="text-grey-text text-sm font-bold">Profession</p>
                <div className="flex gap-4 justify-center text-sky-blue text-xl mt-2">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMem;

import React from "react";
import Image from "next/image";
import card1 from "../Assets/featured-1.jpeg";
import card2 from "../Assets/featured-2.jpeg";
import card3 from "../Assets/featured-3.jpeg";
import { LuAlarmClock } from "react-icons/lu";
import { FaChartBar } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-center w-full">
      <div className="flex flex-col gap-8 lap:gap-20 py-28">

{/* text */}
        <div className="flex flex-1 flex-col gap-[10px] items-center">
          <h6 className="text-sky-blue text-sm font-bold">Practice Advice</h6>
          <h3 className=" text-3xl lap:text-4xl font-bold text-dark-blue">FEATURED POSTS</h3>
          <p className="text-grey-text text-sm hidden lap:block">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

{/* cards */}
        <div className="grid grid-cols-1 lap:grid-cols-3 gap-8 px-15">

        <div className="flex flex-col h-[500px] shadow-lg">
          <div className="flex flex-col w-[100%] h-[50%]">
            <Image
              src={card1}
              alt="card1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left gap-2 pr-10 pl-6 pt-6">
                <div className='flex text-grey-text gap-4'> <a className="hover:text-sky-blue" href="#">  Google </a> <a className="hover:text-sky-blue" href="#"> Trending </a> <a className="hover:text-sky-blue" href="#"> New </a> </div>
                <h4 className="text-dark-blue text-xl">
                  Loudest à la Madison #1 (L integral)
                </h4>
                <p className="text-grey-text text-sm">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className='flex justify-between text-xs'>
                  <div className="flex gap-2"> <LuAlarmClock className='text-sky-blue' /> 22 Aug 2022</div>
                  <div className="flex gap-2"> <FaChartBar className='text-green' /> Comments </div>
                </div>
                <div className='flex gap-2 mt-5'>
                  <button> Learn More </button><IoIosArrowDropright className='text-sky-blue mt-1'/>
                </div>
          </div>
        </div>       

        <div className="flex flex-col h-[500px] shadow-lg">
          <div className="flex flex-col w-[100%] h-[50%]">
            <Image
              src={card2}
              alt="card2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left gap-2 pr-10 pl-6 pt-6">
                <div className='flex text-grey-text gap-4'> <a className="hover:text-sky-blue" href="#">  Google </a> <a className="hover:text-sky-blue" href="#"> Trending </a> <a className="hover:text-sky-blue" href="#"> New </a> </div>
                <h4 className="text-dark-blue text-xl">
                  Loudest à la Madison #1 (L integral)
                </h4>
                <p className="text-grey-text text-sm">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className='flex justify-between text-xs'>
                  <div className="flex gap-2"> <LuAlarmClock className='text-sky-blue' /> 22 Aug 2022</div>
                  <div className="flex gap-2"> <FaChartBar className='text-green' /> Comments </div>
                </div>
                <div className='flex gap-2 mt-5'>
                  <button> Learn More </button><IoIosArrowDropright className='text-sky-blue mt-1'/>
                </div>
          </div>
        </div>       


        <div className="flex flex-col h-[500px]  shadow-lg">
          <div className="flex flex-col w-[100%] h-[50%]">
            <Image
              src={card3}
              alt="card3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left gap-2 pr-10 pl-6 pt-6">
                <div className='flex text-grey-text gap-4'> <a className="hover:text-sky-blue" href="#">  Google </a> <a className="hover:text-sky-blue" href="#"> Trending </a> <a className="hover:text-sky-blue" href="#"> New </a> </div>
                <h4 className="text-dark-blue text-xl">
                  Loudest à la Madison #1 (L integral)
                </h4>
                <p className="text-grey-text text-sm">
                  We focus on ergonomics and meeting you where you work. Its
                  only a keystroke away.
                </p>
                <div className='flex justify-between text-xs'>
                  <div className="flex gap-2"> <LuAlarmClock className='text-sky-blue' /> 22 Aug 2022</div>
                  <div className="flex gap-2"> <FaChartBar className='text-green' /> Comments </div>
                </div>
                <div className='flex gap-2 mt-5'>
                  <button> Learn More </button><IoIosArrowDropright className='text-sky-blue mt-1'/>
                </div>
          </div>
        </div>       
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

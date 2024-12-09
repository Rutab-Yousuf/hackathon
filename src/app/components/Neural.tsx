import React from 'react'
import Image from 'next/image'
import bg from '../Assets/neural-sec.jpeg'

const Neural = () => {
  return (
    <div className="bg-white flex justify-center pt-20 ">


      {/* image */}
      <div className="hidden tab:block w-[20%] tab:w-[35%] lap:w-[50%]">
        <Image src={bg} alt="hero" className=" w-full h-full object-contain" />
      </div>


      {/* text */}
      <div className="w-[80%] tab:w-[65%] lap:w-[50%] flex flex-col text-start text-light-grey gap-5 mt-5 px-10 lap:px-20">
        <h5 className="font-bold text-base">Summer 2020</h5>
        <h1 className="font-bold text-dark-blue text-3xl tab:text-4xl lap:text-6xl leading-snug tracking-wide">Part of the Neural Universe </h1>
        <h4 className="font-normal text-xl text-grey-text">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </h4>
        <div className="flex mt-5 gap-[10px]">
        <button className="text-sm font-bold text-center bg-green text-white px-[40px] py-[15px] rounded-[5px]">
            BUY NOW
          </button>
          <button className="text-sm font-bold text-center text-green border border-green px-[40px] py-[15px] rounded-[5px]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Neural
import React from "react";
import HeroImg from "../../assets/images/Kitchen_3.png";

export const Hero = () => {
  return (
    <div className="relative h-screen ">
      <img
        src={HeroImg}
        alt="Background"
        className="absolute inset-0 object-right object-cover w-full h-full"
      />
      <div className="relative z-10 flex items-center justify-start h-full px-4 md:px-10 lg:px-20">
        <div className="text-center xl:text-left w-full md:w-[60%] lg:w-[40%]">
          <h1 className="text-5xl font-bold text-white  sm:text-6xl md:text-7xl lg:text-7xl">
            So fresh. <br /> So green.
          </h1>
          <p className="mt-4 text-base text-white sm:text-lg md:text-xl lg:w-[85%]">
            We believe that a more eco-friendly everyday makes a happier you and
            me. We’re on a mission to put sustainability in reach with
            better-for-the-planet wipes that are easy, effective, and
            plastic-free.
          </p>
          <button className="px-6 py-3 mt-6 text-sm font-semibold text-green bg-white rounded sm:text-base md:px-8 md:py-4 md:text-lg lg:w-[85%] hover:bg-gray-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

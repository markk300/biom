import React from "react";
import ExpirienceImg from "../../assets/images/Mask Group 12.png";
import BeautifulImg from "../../assets/images/beautiful design icon.png";
import DurableImg from "../../assets/images/durable stainless icon.png";
import ToxicImg from "../../assets/images/non toxic icon.png";

export const RedefineExpirience = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-end h-screen px-4 md:px-0">
      <img
        src={ExpirienceImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-left -z-10"
      />
      <div className="flex flex-col items-center md:items-end">
        <div className="relative z-10  p-6 md:p-8 rounded-lg mb-6 w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg text-green mb-2">THE BIOM DISPENSER</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-darkGreen">
            Redefine your experience of clean.
          </h1>
          <p className="text-green">
            A quality engineered wipes dispenser that looks beautiful in your
            home, making better habits for your home and planet always within
            reach.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-start md:items-start">
            <div className="flex items-center mb-4">
              <img src={BeautifulImg} alt="Beautiful design" className="mr-3 md:mr-5" />
              <h2 className="text-lg md:text-xl">Beautiful design, fit for your home</h2>
            </div>
            <div className="flex items-center mb-4">
              <img src={DurableImg} alt="Durable stainless steel exterior" className="mr-3 md:mr-5" />
              <h2 className="text-lg md:text-xl">Durable stainless steel exterior</h2>
            </div>
            <div className="flex items-center mb-4">
              <img src={ToxicImg} alt="Non-toxic materials" className="mr-3 md:mr-5" />
              <h2 className="text-lg md:text-xl">Non-toxic materials</h2>
            </div>
            <button className="px-6 py-3 mt-6 md:mt-10 text-sm font-semibold text-white bg-green rounded-md sm:text-base md:px-8 md:py-4 md:text-lg lg:w-[40%] hover:bg-gray-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

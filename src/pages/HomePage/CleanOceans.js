import React from "react";
import OceanCleanImg from "../../assets/images/andrzej-kryszpiniuk-4wFqHZ1ONnM-unsplash.png";

export const CleanOceans = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <img
        src={OceanCleanImg}
        alt="Clean Oceans Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-lg text-white font-light mb-4">
          CLEANING OUR OCEANS WITH EVERY WIPE
        </h1>
        <h2 className="text-4xl text-white mb-2">
          Wipes have plastic in them. We don’t.
        </h2>
        <p className="text-lg text-white mb-6 w-[95%] lg:w-[60%]">
          We reinvented wipes to cut out all the bad stuff —like single-use
          plastic that hurts the environment, and toxic chemicals that don’t
          belong in our oceans (or in our homes).
        </p>
        <button className="px-6 py-3 mt-6 md:mt-10 text-sm font-semibold bg-white text-green border-2 border-white rounded-md sm:text-base md:px-8 md:py-4 md:text-lg lg:w-[20%] hover:bg-gray-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

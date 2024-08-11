import React from "react";
import Colorimg1 from "../../assets/images/Green_1.png";
import Colorimg2 from "../../assets/images/Biom fn .20.png";
import Colorimg3 from "../../assets/images/Black_2.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const ChooseCollor = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center px-4 md:px-16">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold mb-4 w-[300px] text-center md:text-left">
            Ready to start wiping out waste?
          </h2>
          <div className="flex flex-row mt-5 group">
            <Link
              to="#"
              className="p-2 text-center w-[280px] border-2 rounded-l-md text-green border-green flex items-center justify-center"
            >
              CHOOSE YOUR VESSEL COLOR
            </Link>
            <div className="w-12 h-12 flex items-center justify-center border-2 border-l-0 text-2xl border-green text-green rounded-r-md">
              <FaArrowRight className="transition-all group-hover:translate-x-1"/>
            </div>
          </div>
        </div>
        <div className="group relative">
          <img
            src={Colorimg1}
            alt="Color 1"
            className="w-[300px] h-[300px] object-cover transform transition-transform duration-300 group-hover:translate-x-20"
          />
          <div className="absolute font-bold bottom-10 right-16 w-full text-center bg-opacity-75 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Biom Dispenser
          </div>
          <p className="absolute text-xs bottom-5 right-16 w-full text-center bg-opacity-75 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            OCEAN TEAL
          </p>
        </div>
        <div className="group relative">
          <img
            src={Colorimg2}
            alt="Color 2"
            className="w-[300px] h-[300px] object-cover transform transition-transform duration-300 group-hover:translate-x-20"
          />
          <div className="absolute font-bold bottom-10 right-16 w-full text-center bg-opacity-75 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Biom Dispenser
          </div>
          <p className="absolute text-xs bottom-5 right-16 w-full text-center bg-opacity-75 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WHITE
          </p>
        </div>
        <div className="group relative">
          <img
            src={Colorimg3}
            alt="Color 3"
            className="w-[300px] h-[300px] object-cover transform transition-transform duration-300 group-hover:translate-x-20"
          />
          <h2 className="absolute font-bold bottom-10 right-16 w-full text-center bg-opacity-75 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Biom Dispenser
          </h2>
          <p className="absolute text-xs bottom-5 right-16 w-full text-center bg-opacity-75 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            INK BLACK
          </p>
        </div>
      </div>
    </div>
  );
};

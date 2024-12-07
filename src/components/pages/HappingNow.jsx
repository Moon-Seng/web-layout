import React from "react";
// Icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import HappeningOne from "../../assets/happen/happen1.jpg";
import HappeningTwo from "../../assets/happen/happen2.jpeg";
import HappeningThree from "../../assets/happen/happen3.jpg";
import HappeningFour from "../../assets/happen/happen4.jpg";
import HappeningFive from "../../assets/happen/happen5.jpg";

import { FaRegClock } from "react-icons/fa6";

const HappingNow = () => {
  return (
    <div className="w-[90%] md:w-[70%] m-auto mt-12">
      <div className="w-full flex items-center justify-between mb-8">
        <div className="">
          <p className="mb-8 uppercase md:text-xl lg:text-3xl font-bold">
            Happening Now
          </p>
        </div>
        <div className=" w-[20%] flex items-center justify-end">
          <MdKeyboardArrowLeft className="mr-4 text-gray-400 font-bold" />
          <MdOutlineKeyboardArrowRight className="font-bold" />
        </div>
      </div>

      <div class="bg-gray-50 py-12 sm:py-24">
        <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-4">
          <div class="col-start-1 row-start-1 col-span-2 row-span-3  rounded-lg overflow-hidden ">
            <div className="relative md:h-[300px] lg:h-fit">
              <img src={HappeningOne} alt="" />
              <div className="relative  md:absolute md:bottom-0 md:left-[10%] md:transform md:translate-x-0 md:-translate-y-1/2 mt-2 md:mt-0">
                <p className="font-bold mb-2 md:text-white">
                  Large Article Title
                </p>
                <p className=" md:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, amet. Ipsa, ab!
                </p>
                <div className="flex items-center justify-start">
                  <FaRegClock className="mr-2 md:text-gray-200" />
                  <p className=" italic md:text-gray-200">2m ago</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-start-1 row-start-4 col-span-2 row-span-3  rounded-lg overflow-hidden">
            <div className="relative md:h-[300px] lg:h-fit">
              <img src={HappeningOne} alt="" />
              <div className="relative  md:absolute md:bottom-0 md:left-[10%] md:transform md:translate-x-0 md:-translate-y-1/2 mt-2 md:mt-0">
                <p className="font-bold mb-2 md:text-white">
                  Large Article Title
                </p>
                <p className=" md:text-gray-200">
                  Lorem ipsum dolor sit amet consectetur, amet. Ipsa, ab!
                </p>
                <div className="flex items-center justify-start">
                  <FaRegClock className="mr-2 md:text-gray-200" />
                  <p className=" italic md:text-gray-200">2m ago</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-start-1 md:col-start-3 md:row-start-1 row-span-2 rounded-lg overflow-hidden">
            <div className=" ">
              <img src={HappeningThree} alt="" />
            </div>
            <div className="">
              <p className="font-bold mt-4">Small title</p>
              <div className="flex items-center justify-start">
                <FaRegClock className="mr-2 text-gray-500" />
                <p className=" italic text-gray-500">
                  2m ago by <span className=" underline">Worldnews</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-start-1 md:col-start-3 md:row-start-3 row-span-2 rounded-lg overflow-hidden">
            <div className=" ">
              <img src={HappeningFour} alt="" />
            </div>
            <div className="">
              <p className="font-bold mt-4">Small title</p>
              <div className="flex items-center justify-start">
                <FaRegClock className="mr-2 text-gray-500" />
                <p className=" italic text-gray-500">
                  2m ago by <span className=" underline">Worldnews</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-start-1 md:col-start-3 md:row-start-5 row-span-2 rounded-lg overflow-hidden">
            <div className=" ">
              <img src={HappeningFive} alt="" />
            </div>
            <div className="">
              <p className="font-bold mt-4">Small title</p>
              <div className="flex items-center justify-start">
                <FaRegClock className="mr-2 text-gray-500" />
                <p className=" italic text-gray-500">
                  2m ago by <span className=" underline">Worldnews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappingNow;

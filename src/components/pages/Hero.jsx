import React from "react";
// image
import HeroBackground from "../../assets/mountain.jpg";

// Icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";

const MORE_NEWS = [
  {
    title: "Travel",
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
  },
  {
    title: "Technology",
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
  },
];

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-[100%] lg:w-[65%] relative">
          <div className="">
            <img src={HeroBackground} alt="Hero Mountain" />
          </div>
          <div className="absolute w-[90%] md:w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="mb-1 md:mb-8">
              <div className="">
                <p className="mb-1 md:mb-8 uppercase text-white md:text-xl lg:text-3xl font-bold">
                  World News
                </p>
                <hr />
              </div>
            </div>

            <div className="">
              <h2 className="text-md md:text-2xl text-white mb-4 font-bold">
                Amazing places in America to visit
              </h2>
              <p className=" text-sm md:text-lg text-white mb-4">
                For some reason this country, this city, this neighborhood, this
                particular street is the place you are living a majority of your
                life in.
              </p>
              <button className="text-sm md:text-md bg-pink font-bold text-white px-2 md:px-4 rounded-md py-1 md:py-2">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[35%] relative h-fit">
          <div className="w-[100%] md:w-[90%] lg:w-[80%] p-4 block md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="">
              <div className="flex items-center justify-between mb-8">
                <div className=" w-[70%]">
                  <h2 className="font-bold uppercase md:text-xl lg:text-2xl">
                    More News
                  </h2>
                </div>
                <div className=" w-[20%] flex items-center justify-end">
                  <MdKeyboardArrowLeft className="mr-4 text-gray-400 font-bold" />
                  <MdOutlineKeyboardArrowRight className="font-bold" />
                </div>
              </div>
              <hr />
            </div>

            <div className="mt-8">
              {MORE_NEWS.map((item, index) => {
                return (
                  <div className="mb-8" key={item.title + index}>
                    <p className=" text-pink uppercase font-bold mb-2">
                      {item.title}
                    </p>
                    <p className="font-bold mb-2">{item.subTitle}</p>
                    <p className=" text-gray-400">{item.description}</p>
                    <div className="flex items-center justify-start">
                      <FaRegClock className="mr-4 text-gray-400" />
                      <p className=" text-gray-400">{item.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

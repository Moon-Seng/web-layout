import React from "react";
import { FaRegClock } from "react-icons/fa6";

const TrandingCard = ({ item }) => {
  return (
    <div>
      <div className=" bg-white rounded-md mr-4 overflow-hidden">
        <div className=" w-full h-[180px] overflow-hidden">
          <img src={item.image} className="" alt="" />
        </div>
        <div className="p-4">
          <p className="font-bold mb-2">{item.subTitle}</p>
          <p className=" text-gray-400">{item.description}</p>
          <div className="flex items-center justify-start">
            <FaRegClock className="mr-4 text-gray-400" />
            <p className=" text-gray-400">{item.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingCard;

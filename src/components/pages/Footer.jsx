import React from "react";

const LinkOne = ["Home", "Discovery", "Photo", "Contact"];
const LinkTwo = ["About", "Help", "Terms", "Guidlines"];
const LinkThree = ["Testimonial", "Advertise", "Integration", "Careers"];

import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-gray-400">
      <div className="w-[70%] m-auto py-12 block md:flex items-start justify-between">
        <div className="block mb-4 md:flex items-start justify-start w-[100%] md:w-[60%]">
          <div className="w-[30%] mb-4">
            <p className=" text-white font-bold">LOGO</p>
          </div>
          <div className="flex w-[100%] md:w-[60%] items-start justify-between md:justify-around">
            <div className="">
              {LinkOne.map((item, index) => {
                return (
                  <p key={item + index} className=" mb-2 text-gray-50">
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="">
              {LinkTwo.map((item, index) => {
                return (
                  <p key={item + index} className=" mb-2 text-gray-50">
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="">
              {LinkThree.map((item, index) => {
                return (
                  <p key={item + index} className=" mb-2 text-gray-50">
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[50%] md:w-[20%] flex items-center justify-between md:justify-around">
          <FiInstagram className="text-white text-2xl" />

          <FiTwitter className="text-white text-2xl" />

          <FiFacebook className="text-white text-2xl" />

          <FiGlobe className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

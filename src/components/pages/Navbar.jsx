import React from "react";
import ProfileImage from "../../assets/profile.jpg";

const NAV_CONFIG = ["home", "dicovery", "photos", "contact"];

const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <div className=" p-4 flex items-center justify-between">
        <div className="">
          <p className=" text-pink font-bold">LOGO</p>
        </div>
        <div className=" flex items-center justify-start">
          <div className=" hidden md:flex  items-center justify-start mr-12">
            {NAV_CONFIG.map((item, index) => {
              return (
                <div
                  key={item + index}
                  className="mr-8 uppercase cursor-pointer"
                  style={{
                    fontWeight: item === "home" ? "bold" : "normal",
                    color: item === "home" ? "black" : "#6b7280",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div className="">
            <div className="w-[30px] h-[30px] overflow-hidden rounded-full ">
              <img src={ProfileImage} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

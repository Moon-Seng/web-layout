import React from "react";
import Slider from "react-slick";

// Image
import TrandingOne from "../../assets/tranding1.jpg";
import TrandingTwo from "../../assets/tranding2.jpg";
import TrandingThree from "../../assets/tranding3.jpg";

// Icon
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
// component
import TrandingCard from "../common/TrandingCard";

const TRANDING = [
  {
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
    image: TrandingOne,
  },
  {
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
    image: TrandingTwo,
  },
  {
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
    image: TrandingThree,
  },

  {
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
    image: TrandingOne,
  },
  {
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
    image: TrandingTwo,
  },
  {
    subTitle: "Artical Title",
    description: "Lorem ipsum dolor sit amet consectetur, amet. Ipsa,  ab!",
    time: "2 min ago",
    image: TrandingThree,
  },
];

const Tranding = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[90%] md:w-[70%] m-auto mt-12">
      <div className="w-full flex items-center justify-between mb-8">
        <div className="">
          <p className="mb-8 uppercase md:text-xl lg:text-3xl font-bold">
            Trending
          </p>
        </div>
        <div className=" w-[20%] flex items-center justify-end">
          <MdKeyboardArrowLeft className="mr-4 text-gray-400 font-bold" />
          <MdOutlineKeyboardArrowRight className="font-bold" />
        </div>
      </div>

      <div className="">
        <div className="slider-container">
          <Slider {...settings}>
            {TRANDING.map((item, index) => {
              return (
                <div className="" key={index + item.subTitle}>
                  <TrandingCard item={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Tranding;

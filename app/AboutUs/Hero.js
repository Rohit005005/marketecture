import React from "react";
import Image from "next/image";
import Vision from "./OurVision";
import Mission from "./OurMission";
import PresentDay from "./PresentDay";
function Hero() {
  return (
    <div>
      <div>
        {/* <div className=" text-center">
          <h1 className="sm:ml-24 py-3 sm:py-10 sm:text-4xl text-[28px] font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">
            ABOUT US
          </h1>
        </div> */}
        <div className="sm:ml-24 mt-12 grid grid-cols-1 md:grid-cols-10 ">
          <div className=" col-span-2  flex justify-center items-center">
            <Image
              src={"/logo-about-us.png"}
              alt="About Us"
              width={265}
              height={218}
              className="hidden sm:block"
            />
            <Image
              src={"/logo-about-us.png"}
              alt="About Us"
              width={200}
              height={218}
              className="block sm:hidden"
            />
          </div>
          <div className="ml-[15%] col-span-1 hidden sm:block">
            <svg
              width="2"
              height="310"
              viewBox="0 5 2 310"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.6875 0.99707L0.6875 316.002"
                stroke="black"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="sm:mt-6 sm:ml-[-5%] col-span-7 sm:mr-40 px-5 sm:px-0 py-2 sm:py-0 ">
            <div className="border-t-[1px] border-black my-10 w-[80%] mx-auto block sm:hidden"></div>
            <p className="text-[40px] font-[700] mb-7">
              The Story of
              <strong className="text-red-500"> Marketecture</strong>
            </p>
            <p className="text-[18px] font-[400]">
              Founded in 2021, Marketecture began as a small proprietorship
              focused solely on re-structuring the market with new architecture
              . Driven by a passion for helping businesses grow and a commitment
              to excellence, Marketecture quickly expanded its horizons,
              transforming into a full-fledged marketing and business
              development powerhouse. Today, we are proud to be a private
              limited company that offers a comprehensive range of services
              across diverse sectors.
            </p>
          </div>
        </div>
        <div className="sm:py-24 py-10 ">
          <p className="text-[40px] font-[700] mb-7 text-center">
            Our
            <strong className="text-red-500"> Journey !</strong>
          </p>
          <div className="sm:px-12 px-5 gap-8 items-center justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">
            <div className="flex items-center justify-center">
              <Vision />
            </div>
            <div className="flex items-center justify-center">
              <Mission />
            </div>
          </div>
          <div className="flex items-center justify-center sm:w-[50%] mx-5 sm:mx-auto mt-10">
            <PresentDay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

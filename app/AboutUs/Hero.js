import React from "react";
import Image from "next/image";
import Vision from "./OurVision";
import Mission from "./OurMission";
import Navbar from "../_components/Navbar";
function Hero() {

  return (
    <div>
      <Navbar />
      <div>
        <div className=" text-center sm:text-left">
          <h1 className="sm:ml-24 py-3 sm:py-10 sm:text-4xl text-[28px] font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">ABOUT US</h1>
        </div>
        <div className="sm:ml-24 grid grid-cols-1 md:grid-cols-10 ">
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
          <div className="ml-12 col-span-1 hidden sm:block">
            <svg width="2" height="317" viewBox="0 5 2 317" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.6875 0.99707L0.6875 316.002" stroke="black" stroke-linecap="round" />
            </svg>
          </div>
          <div className="sm:mt-14 sm:ml-[-5%] col-span-7 sm:mr-40 px-5 sm:px-0 py-2 sm:py-0">
            <div className="border-t-[1px] border-black my-10 w-[80%] mx-auto block sm:hidden"></div>
            <p>
              A group of creative thinkers gathered under one roof collaboratively
              striving forward with a motto to take business developments to its pinnacle.
              We know that marketing is complex. That's where we come with digital marketing strategies
              that get results and make sales. </p>
            <br></br>
            <p>We help the brands to become what they want, by recommending
              the best digital marketing services to hit your growth goals. From website design and SEO to creative
              content campaigns and social media advertising — we have better ideas and effective digital marketing
              strategies for fast growth.
            </p>
          </div>
        </div>
        <div className="sm:py-24 py-10">
          <div className="sm:px-12 px-5 gap-8 items-center justify-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Vision />
            </div>
            <div className="flex items-center justify-center">
              <Mission />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Vision from "./OurVision";
import Mission from "./OurMission";
function Hero() {

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="justify-start items-start">
          <h1 className="ml-24 py-10 text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">ABOUT US</h1>
        </div>
        <div className="ml-24 grid grid-cols-10">
          <div className="mt-12 col-span-2">
            <Image
              src={"/logo-about-us.png"}
              alt="About Us"
              width={265}
              height={218}
            />
          </div>
          <div className="ml-12 col-span-1">
            <svg width="2" height="317" viewBox="0 5 2 317" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.6875 0.99707L0.6875 316.002" stroke="black" stroke-linecap="round" />
            </svg>
          </div>
          <div className="mt-14 ml-[-5%] col-span-7 mr-40">
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
        <div className="py-24">
          <div className="grid md:grid-cols-2">
            <Vision />
            <Mission />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

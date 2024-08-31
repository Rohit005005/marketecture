import React from "react";
import Navbar from "../_components/Navbar";
function Hero() {

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="justify-start items-start">
          <h1 className="ml-24 py-10 text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">CONTACT US</h1>
        </div>
        <div className="max-w-full place-items-center justify-center items-center text-center">
          <div className="mt-10 text-red-500 text-4xl font-bold ">
            <h1>Reach Out</h1>
          </div>
          <div className="mt-4 text-black text-4xl font-bold">
            <hi>Marketecture</hi>
          </div>
          <div className="mt-8 text-black font-bold flex justify-center">
            <h1 className="w-[224px]">Please Get In Touch Let’s Talk</h1>
          </div>
          <div className="mt-6 text-gray-500 flex justify-center">
            <h1 className="w-[694px]">When, while the lovely valley teems with vapour around me, and the meridian teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

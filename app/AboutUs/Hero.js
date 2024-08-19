import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
function Hero() {

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="justify-start items-start">
          <h1 className="ml-24 py-10 text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">ABOUT US</h1>
        </div>

      </div>
    </div>
  );
}

export default Hero;

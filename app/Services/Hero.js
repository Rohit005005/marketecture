import React from "react";
import Navbar from "../_components/Navbar";
function Hero() {

    return (
        <div className="">
            <Navbar />
            <div>
                <div className="text-center flex justify-center flex-col items-center">
                    <div className="text-center ">
                        <h1 className=" mt-20  text-[38px] text-[28px] font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">OUR SERVICES</h1>
                    </div>
                    <div className="py-6">
                        <div className="text-black text-4xl font-bold">
                            <hi>We Can offer You</hi>
                        </div>
                        <div className="md:text-4xl text-black font-bold flex justify-center text-[15px] whitespace-nowrap ">
                            <h1>The Best</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

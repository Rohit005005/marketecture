import React from "react";
import HoverTile1 from "./HoverTile1";
import HoverTile2 from "./HoverTile2";
import HoverTile3 from "./HoverTile3";
import HoverTile4 from "./HoverTile4";
import HoverTile5 from "./HoverTile5";
import HoverTile6 from "./HoverTile6";

function Hero() {

    return (
        <div className="">
            <div>
                <div className="text-center mt-8 flex justify-center flex-col items-center">
                    {/* <div className="text-center ">
                        <h1 className=" mt-20  text-[38px] text-[28px] font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text inline-block text-transparent">OUR SERVICES</h1>
                    </div> */}
                    <div className="py-6">
                        <div className="text-black text-4xl font-bold">
                            <hi>We Can offer You</hi>
                        </div>
                        <div className="text-4xl text-black font-bold flex justify-center text-[15px] whitespace-nowrap ">
                            <h1>The Best</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-12 space-y-12 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center justify-center space-x-24">
                        <HoverTile1 />
                        <HoverTile2 />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-x-24 py-12">
                        <HoverTile3 />
                        <HoverTile4 />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center space-x-24 mb-12">
                        <HoverTile5 />
                        <HoverTile6 />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;

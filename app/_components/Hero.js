import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Hero() {

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="flex justify-between px-[101px] mt-[70px]">
          <div className="  w-[60%] ">
            <h1 className="text-[32px] font-[500]">
              Your one-stop solution to
            </h1>
            <h1 className="text-[40px] py-10 font-[700]">
              improve your conversions
            </h1>
            <h1 className="text-[20px] py-10 font-[400]">
              We build, grow and help you scale by bringing the best digital
              marketing initiatives that aligns with your brand’s mission.
            </h1>
            <div className="flex gap-10 items-center">
              <button className="px-8 text-[20px] font-[600] py-2 bg-[#F5DCD5] rounded-full">
                Lets Talk
              </button>
              <h1 className="text-[20px] font-[500]">Read Success Stories</h1>
            </div>
          </div>
          <div className="w-[350px] h-[350px] flex justify-center items-center rounded-full bg-[url('../public/girlbg.png')] bg-no-repeat bg-cover bg-center">
            <div className="w-[231px] h-[248px] relative">
              <Image
                src={"/girl.png"}
                width={900}
                height={100}
                className="p-5"
              />
              <Image
                src={"/lead_generation.png"}
                width={900}
                height={100}
                className="absolute -translate-y-[240px] -translate-x-[140px]"
              />
              <Image
                src={"/creative_marketing.png"}
                width={900}
                height={100}
                className="absolute -translate-y-[240px] translate-x-[130px]"
              />
              <Image
                src={"/paid_marketing.png"}
                width={900}
                height={100}
                className="absolute -translate-y-[150px] -translate-x-[180px]"
              />
              <Image
                src={"/seo_services.png"}
                width={900}
                height={100}
                className="absolute -translate-y-[90px] translate-x-[150px]"
              />
              <Image
                src={"/content_marketing.png"}
                width={900}
                height={100}
                className="absolute -translate-y-[10px] -translate-x-[180px]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-28 justify-center items-center py-20">
          <div>
            <h1 className="text-[48px] font-[600]">120+</h1>
            <h1 className="text-[20px] font-[500]">Happy Clients</h1>
          </div>
          <div>
            <h1 className="text-[48px] font-[600]">180+</h1>
            <h1 className="text-[20px] font-[500]">Successfull Projects</h1>
          </div>
          <div>
            <h1 className="text-[48px] font-[600]">15+</h1>
            <h1 className="text-[20px] font-[500]">Different Countries</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>
            <Image
                src={"/Rectangle.png"}
                width={10}
                height={100}
              />
            </div>
            <div>
            <Image
                src={"/Google.png"}
                width={90}
                height={100}
              />
              <Image
                src={"/Partner.png"}
                width={90}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

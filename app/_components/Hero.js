import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center sm:px-[101px] mt-[70px]">
          <div className="  sm:w-[60%] p-5 sm:p-0">
            <h1 className="text-[16px] sm:text-[32px] font-[500]">
              Your one-stop solution to
            </h1>
            <div class="w-max">
            <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black my-5 sm:my-10 pr-3 sm:pr-10 text-[20px] sm:text-[40px] font-[700]">improve your conversions</h1>
            </div>
            <h1 className="text-[15px] sm:text-[20px] py-5 sm:py-10 font-[400]">
              We build, grow and help you scale by bringing the best digital
              marketing initiatives that aligns with your brand’s mission.
            </h1>
            <div className="flex gap-5 sm:gap-10 items-center">
              <button className="px-5 sm:px-8 text-[13px] sm:text-[20px] font-[600] py-2 bg-[#F5DCD5] rounded-full">
                Lets Talk
              </button>
              <h1 className="text-[14px] sm:text-[20px] font-[500]">
                Read Success Stories
              </h1>
            </div>
          </div>
          <div className="w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] flex justify-center items-center rounded-full bg-[url('../public/girlbg.png')] bg-no-repeat bg-cover bg-center">
            <div className="hidden sm:block w-[231px] h-[248px] relative ">
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
                className="absolute -translate-y-[240px] -translate-x-[140px] "
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
            <div className="block sm:hidden w-[231px] h-[248px] relative">
              <Image
                src={"/girl.png"}
                width={200}
                height={100}
                className="p-5 m-auto"
              />
              <Image
                src={"/leadsmall.png"}
                width={170}
                height={100}
                className="absolute -translate-y-[200px] -translate-x-[80px] "
              />
              <Image
                src={"/creativesmall.png"}
                width={170}
                height={100}
                className="absolute -translate-y-[190px] translate-x-[130px]"
              />
              <Image
                src={"/paidsmall.png"}
                width={170}
                height={100}
                className="absolute -translate-y-[130px] -translate-x-[80px]"
              />
              <Image
                src={"/seosmall.png"}
                width={170}
                height={100}
                className="absolute -translate-y-[90px] translate-x-[150px]"
              />
              <Image
                src={"/contentsmall.png"}
                width={170}
                height={100}
                className="absolute -translate-y-[10px] -translate-x-[80px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-0 sm:gap-28 sm:justify-center sm:items-center px-1 sm:px-0 py-5 sm:py-20 ">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-28">
            <div className="flex flex-col whitespace-nowrap items-center justify-center sm:justify-start sm:items-start">
              <h1 className="text-[28px] sm:text-[48px] font-[600]">120+</h1>
              <h1 className="text-[15px] sm:text-[20px] font-[500]">
                Happy Clients
              </h1>
            </div>
            <div className="flex flex-col whitespace-nowrap items-center justify-center sm:justify-start sm:items-start">
              <h1 className="text-[28px] sm:text-[48px] font-[600]">180+</h1>
              <h1 className="text-[15px] sm:text-[20px] font-[500]">
                Successfull Projects
              </h1>
            </div>
          </div>
          <div className="flex flex-col whitespace-nowrap items-center justify-center sm:justify-start sm:items-start">
            <h1 className="text-[28px] sm:text-[48px] font-[600]">15+</h1>
            <h1 className="text-[15px] sm:text-[20px] font-[500]">
              Different Countries
            </h1>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-3">
            <div>
              <Image src={"/Rectangle.png"} width={10} height={100} />
            </div>
            <div>
              <Image src={"/Google.png"} width={90} height={100} />
              <Image src={"/Partner.png"} width={90} height={100} />
            </div>
          </div>
          <div className="flex sm:hidden justify-center items-center gap-1 ml-2">
            <div>
              <Image src={"/Rectangle.png"} width={15} height={100} />
            </div>
            <div>
              <Image src={"/Google.png"} width={95} height={100} />
              <Image src={"/Partner.png"} width={95} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

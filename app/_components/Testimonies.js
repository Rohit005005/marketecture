import Image from "next/image";
import React from "react";

function Testimonies() {
  return (
    <div className="mb-12 overflow-x-hidden">
      <div className="ml-5 sm:ml-20 mt-20 mb-10 sm:mb-0">
        <h1 className="text-[24px] sm:text-[64px] font-[800] text-red-500">
          Thier Words
          <strong className="text-[24px] sm:text-[64px] font-[800] text-black">,</strong>
        </h1>
        <h1 className="text-[24px] sm:text-[64px] font-[800] text-black italic">
          Our Delights
          <strong className="text-[24px] sm:text-[64px] font-[800] text-red-500">!</strong>
        </h1>
      </div>
      <div>
        <div className="flex flex-col justify-center sm:justify-end sm:items-end items-center gap-20  sm:gap-14 sm:pr-20 pr-0 py-10 sm:py-20">
          <div className="flex flex-col justify-center items-center border-2 border-[#94939378] w-[80%] sm:h-[350px] px-5 sm:px-0 pt-20 sm:pt-10 py-5 sm:py-10 relative ml-10 sm:ml-0">
          <div>
              <Image
                src={"/testi1.png"}
                width={150}
                height={150}
                className="absolute flex sm:hidden -translate-y-36 -translate-x-56"
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="text-[24px] font-[700]">Mr Gagan singh</p>
              <p className="sm:text-[20px] text-[15px] font-[400]">
                CEO of Planet Education Worldwide
              </p>
            </div>
            <div>
              <Image
                src={"/testi1.png"}
                width={150}
                height={150}
                className="absolute -translate-x-[580px] -translate-y-10"
              />
            </div>
            <div>
              <Image
                src={"/testilogo1.png"}
                width={100}
                height={100}
                className="hidden sm:flex absolute translate-x-[350px] -translate-y-5"
              />
            </div>
            <p className="text-[13px] sm:text-[18px] font-[350] text-center sm:w-[50%]">
              "The Spinta team have proven to be extremely passionate and
              dedicated with their work. They are highly driven and have a zeal
              for all things digital. Their business acumen par excellence is a
              force that cannot be reckoned with and we eagerly look forward to
              the uncharted journey ahead."
            </p>
            <div>
              <Image
                src={"/testilogo1.png"}
                width={100}
                height={100}
                className="flex sm:hidden mt-10"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[#94939378] w-[80%] sm:h-[350px] px-5 sm:px-0 py-5 sm:py-10  pt-20 sm:pt-10 relative mr-10 sm:mr-0">
          <div>
              <Image
                src={"/testi2.png"}
                width={150}
                height={150}
                className="absolute flex sm:hidden -translate-y-36 translate-x-20"
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="text-[24px] font-[700]">Syed Imran</p>
              <p className="text-[15px] sm:text-[20px] font-[400]">Marketing Head, Zimson</p>
            </div>
            <div>
              <Image
                src={"/testi2.png"}
                width={150}
                height={150}
                className="absolute -translate-x-[580px] -translate-y-5"
              />
            </div>
            <div>
              <Image
                src={"/testilogo2.png"}
                width={100}
                height={100}
                className="hidden sm:flex absolute translate-x-[350px] translate-y-5"
              />
            </div>
            <p className="text-[13px] sm:text-[18px] font-[350] text-center sm:w-[58%]">
              "I had an excellent experience with Sprinta Digital. Their team
              is. incredibly knowledgeable and protessional, offering top-notch
              digital marketing solutions that significantly boosted our online
              presence. Une communication was a cicar and prompt throughout the
              entire process and they truly understood our business needs. The
              results speak for themselves, our website trattic and conversions
              have increased substantially. I highly recommend spinta Digital
              for anyone looking to enhance their digital marketing"
            </p>
            <div>
              <Image
                src={"/testilogo2.png"}
                width={100}
                height={100}
                className="flex sm:hidden mt-10"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[#94939378] w-[80%] sm:h-[350px] px-5 sm:px-0 py-5 sm:py-10  pt-20 sm:pt-10 relative ml-10 sm:ml-0">
          <div>
              <Image
                src={"/testi3.png"}
                width={150}
                height={150}
                className="absolute flex sm:hidden -translate-y-36 -translate-x-56"
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="text-[24px] font-[700]">Chandan Singhi</p>
              <p className="text-[15px] sm:text-[20px] font-[400]">
                Founder & CEO, Sugar Jewellery
              </p>
            </div>
            <div>
              <Image
                src={"/testi3.png"}
                width={150}
                height={150}
                className="absolute -translate-x-[580px] -translate-y-14"
              />
            </div>
            <div>
              <Image
                src={"/testilogo3.png"}
                width={100}
                height={100}
                className="hidden sm:flex absolute translate-x-[350px] -translate-y-5"
              />
            </div>
            <p className="text-[13px] sm:text-[18px] font-[350] text-center sm:w-[50%]">
              'One of the most professional digital media company. I had a great
              experience hiring them for end to end solution for mu online
              shopping portal and digital marketing. The people are
              knowledgeable helping always available to solve any issues and
              lovely team"
            </p>
            <div>
              <Image
                src={"/testilogo3.png"}
                width={100}
                height={100}
                className="flex sm:hidden mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[95%] sm:w-[70%] mx-auto">
        <div>
          <h1 className="text-[20px] sm:text-[48px] font-[600] text-black">
            Think you can bring your
          </h1>
          <h1 className="text-[20px] sm:text-[48px] font-[600] text-black">
            <strong className="italic">A-Game</strong> to our team?
          </h1>
        </div>
        <div>
          <button
            className={`cursor-pointer border-[#000] border-[1px]  sm:mt-5 mt-0 border-solid sm:py-[14px] py-[8px] px-[20px] sm:px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border whitespace-nowrap`}
          >
            <b className="sm:text-[16px] text-[14px] font-bold">Apply Now</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;

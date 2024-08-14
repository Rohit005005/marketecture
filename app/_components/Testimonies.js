import Image from "next/image";
import React from "react";

function Testimonies() {
  return (
    <div>
      <div className="ml-20 mt-20">
        <h1 className="text-[64px] font-[800] text-red-500">
          Thier Words
          <strong className="text-[64px] font-[800] text-black">,</strong>
        </h1>
        <h1 className="text-[64px] font-[800] text-black italic">
          Our Delights
          <strong className="text-[64px] font-[800] text-red-500">!</strong>
        </h1>
      </div>
      <div>
        <div className="flex flex-col justify-end items-end gap-14 pr-20 py-20">
          <div className="flex flex-col justify-center items-center border-2 border-[#94939378] w-[80%] h-[350px] py-10 relative">
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="text-[24px] font-[700]">Mr Gagan singh</p>
              <p className="text-[20px] font-[400]">
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
                className="absolute translate-x-[350px] -translate-y-5"
              />
            </div>
            <p className="text-[18px] font-[350] text-center w-[50%]">
              "The Spinta team have proven to be extremely passionate and
              dedicated with their work. They are highly driven and have a zeal
              for all things digital. Their business acumen par excellence is a
              force that cannot be reckoned with and we eagerly look forward to
              the uncharted journey ahead."
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[#94939378] w-[80%] h-[350px] py-10 relative">
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="text-[24px] font-[700]">Syed Imran</p>
              <p className="text-[20px] font-[400]">Marketing Head, Zimson</p>
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
                className="absolute translate-x-[350px] translate-y-5"
              />
            </div>
            <p className="text-[18px] font-[350] text-center w-[58%]">
              "I had an excellent experience with Sprinta Digital. Their team
              is. incredibly knowledgeable and protessional, offering top-notch
              digital marketing solutions that significantly boosted our online
              presence. Une communication was a cicar and prompt throughout the
              entire process and they truly understood our business needs. The
              results speak for themselves, our website trattic and conversions
              have increased substantially. I highly recommend spinta Digital
              for anyone looking to enhance their digital marketing"
            </p>
          </div>

          <div className="flex flex-col justify-center items-center border-2 border-[#94939378] w-[80%] h-[350px] py-10 relative">
            <div className="flex flex-col justify-center items-center mb-5">
              <p className="text-[24px] font-[700]">Chandan Singhi</p>
              <p className="text-[20px] font-[400]">
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
                className="absolute translate-x-[350px] -translate-y-5"
              />
            </div>
            <p className="text-[18px] font-[350] text-center w-[50%]">
              'One of the most professional digital media company. I had a great
              experience hiring them for end to end solution for mu online
              shopping portal and digital marketing. The people are
              knowledgeable helping always available to solve any issues and
              lovely team"
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-[70%] mx-auto">
        <div>
          <h1 className="text-[48px] font-[600] text-black">
            Think you can bring your{" "}
          </h1>
          <h1 className="text-[48px] font-[600] text-black">
            <strong className="italic">A-Game</strong> to our team?
          </h1>
        </div>
        <div>
          <button
            className={`cursor-pointer border-[#000] border-[1px]  mt-5 border-solid py-[14px] px-[36px] bg-[transparent] rounded-[32px] flex items-center justify-center hover:bg-[rgba(51,51,51,0.09)] hover:border-[#333] hover:border-[1px] hover:border-solid hover:box-border`}
          >
            <b className="text-[16px] font-bold">Apply Now</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;

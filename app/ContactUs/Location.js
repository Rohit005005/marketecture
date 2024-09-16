"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Location() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/*<div className="relative flex flex-col sm:flex-row items-center justify-center z-20">
        <Image
          src={"/svgs/address.svg"}
          alt="First Image"
          width="348"
          height="148"
        />
        <Image
          src={"/svgs/email.svg"}
          alt="Third Image"
          width="348"
          height="148"
        />
        <Image
          src={"/svgs/phone.svg"}
          alt="Second Image"
          width="348"
          height="148"
        />
      </div>*/}

      <div className="relative flex flex-col sm:flex-row items-center justify-center z-20 gap-5 sm:gap-14 mb-10">
        <div className="flex bg-[#FFFFFF] w-[300px] h-[120px]  justify-center items-center p-5 gap-5 rounded-lg shadow-lg">
          <div className="w-[200px] flex ">
          <Image
            src={"/locLogo.png"}
            alt="location icon"
            width="100"
            height="100"
          />
          </div>
          <div>
            <h1 className="text-[14px] font-[500]">Address:</h1>
            <p className="text-[12px] font-[400]">
            39, Paddana Reddy Layout Rd, Nanjappa Garden, Horamavu, Bengaluru, Karnataka 560043
            </p>
          </div>
        </div>
        <div className="flex bg-[#FFFFFF] w-[300px] h-[120px]  justify-start items-center p-5 gap-5 rounded-lg shadow-lg">
          <div className="w-[65px] flex ">
          <Image
            src={"/phoneLogo.png"}
            alt="location icon"
            width="100"
            height="100"
          />
          </div>
          <div>
            <h1 className="text-[14px] font-[500]">Phone:</h1>
            <p className="text-[12px] font-[400]">
            9900929710
            </p>
          </div>
        </div>
        <div className="flex bg-[#FFFFFF] w-[300px] h-[120px]  justify-start items-center p-5 gap-5 rounded-lg shadow-lg">
          <div className="w-[65px] flex ">
          <Image
            src={"/emailLogo.png"}
            alt="location icon"
            width="100"
            height="100"
          />
          </div>
          <div>
            <h1 className="text-[14px] font-[500]">Email:</h1>
            <p className="text-[12px] font-[400]">
            info@marketecture.in
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[300px] flex justify-center overflow-hidden mt-[-108px] z-10">
        <div style={{ width: "100%" }}>
          {isClient && (
            <iframe
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              className="border-none -mt-[150px]"
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=39,%20Paddana%20Reddy%20Layout%20Rd,%20Nanjappa%20Garden,%20Horamavu,%20Bengaluru,%20Karnataka%20560043+(Marketecture)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          )}
        </div>
      </div>
    </div>
  );
}

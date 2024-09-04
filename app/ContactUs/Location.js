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
      <div className="relative flex flex-col sm:flex-row items-center justify-center z-20">
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
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=13%C2%B001'12.8%22N%2077%C2%B039'20.0%22E+(Marketecture)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          )}
        </div>
      </div>
    </div>
  );
}

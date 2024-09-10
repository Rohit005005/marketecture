import Image from "next/image";
import React from "react";

function GroupPhotos() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-[15px] sm:text-[24px] font-[400]">#spintersported</h1>
        <h1 className="text-[24px] sm:text-[40px] text-red-500 font-[800]">
          Garnering accolades,
        </h1>
        <h1 className="text-[24px] sm:text-[40px] italic font-[800]">Sharing expertise</h1>
      </div>
      <div className="flex text-center w-[98%] sm:w-[60%] mt-5 sm:mt-10">
        <p className="text-[12px] sm:text-[20px] font-[400]">
          Through our participation, we’ve had the privilege of being acknowledged for our
          contributions, receiving honours through various awards. These moments have deeply
          enriched us, enabling us to network with other professionals and celebrate shared
          achievements.
        </p>
      </div>
      <div className="hidden sm:flex gap-10 mt-10">
        <Image src={"/group1.png"} width={300} height={200} />
        <Image src={"/group2.png"} width={300} height={100} />
        <Image src={"/group3.png"} width={300} height={200} />
      </div>
      <div className="flex sm:hidden gap-5 mt-10">
        <Image src={"/group1.png"} width={120} height={100} />
        <Image src={"/group2.png"} width={120} height={100} />
        <Image src={"/group3.png"} width={120} height={100} />
      </div>
      <div className="hidden sm:flex gap-10 mt-10">
        <Image src={"/group4.png"} width={300} height={200} />
        <Image src={"/group5.png"} width={300} height={200} />
      </div>
      <div className="flex sm:hidden gap-5 mt-5">
        <Image src={"/group4.png"} width={120} height={100} />
        <Image src={"/group5.png"} width={120} height={100} />
      </div>
    </div>
  );
}

export default GroupPhotos;

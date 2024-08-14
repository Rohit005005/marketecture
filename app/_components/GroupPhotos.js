import Image from "next/image";
import React from "react";

function GroupPhotos() {
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-[24px] font-[400]">#spintersported</h1>
        <h1 className="text-[40px] text-red-500 font-[800]">
          Garnering accolades,
        </h1>
        <h1 className="text-[40px] italic font-[800]">Sharing expertise</h1>
      </div>
      <div className="flex text-center w-[60%] mt-10">
        <p className="text-[20px] font-[400]">
          Through our involvement, we've been honored to garner recognition for
          our efforts, earning accolades in the form of awards while witnessing
          our CEO imparting insightful expertise as a keynote speaker on
          prestigious platforms. These experiences have enriched us, allowing us
          to connect with fellow professionals and celebrate collective
          successes.
        </p>
      </div>
        <div className="flex gap-10 mt-10">
          <Image src={"/group1.png"} width={300} height={200}/>
          <Image src={"/group2.png"} width={300} height={100} />
          <Image src={"/group3.png"} width={300} height={200} />
        </div>
        <div className="flex gap-10">
        <Image src={"/group4.png"} width={300} height={200} />
        <Image src={"/group5.png"} width={300} height={200} />
        </div>
    </div>
  );
}

export default GroupPhotos;

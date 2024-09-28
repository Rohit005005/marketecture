import Image from "next/image";
import React from "react";

function GroupPhotos() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 py-8 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-[15px] sm:text-[24px] font-[400]">
          #spintersported
        </h1>
        <h1 className="text-[24px] sm:text-[40px] text-red-500 font-[800]">
          Garnering accolades,
        </h1>
        <h1 className="text-[24px] sm:text-[40px] italic font-[800]">
          Sharing expertise
        </h1>
      </div>
      <div className="flex text-center w-[98%] sm:w-[60%] mt-5 sm:mt-10">
        <p className="text-[12px] sm:text-[20px] font-[400]">
          Through our participation, we’ve had the privilege of being
          acknowledged for our contributions, receiving honours through various
          awards. These moments have deeply enriched us, enabling us to network
          with other professionals and celebrate shared achievements.
        </p>
      </div>
      {/* <div className="hidden sm:flex gap-16 mt-10">
        <Image
          className="rotate-[-17deg] rounded-lg  w-[225px] h-[186px]"
          src={"/image_1.png"}
          width={300}
          height={200}
        />
        <Image
          className="rounded-lg w-[250px] h-[220px]"
          src={"/image_2.png"}
          width={300}
          height={100}
        />
        <Image
          className="rotate-[17deg] rounded-lg w-[225px] h-[186px]"
          src={"/image_3.png"}
          width={300}
          height={200}
        />
      </div>
      <div className="flex sm:hidden gap-5 mt-10">
        <Image
          className="rotate-[-17deg] rounded-lg w-32 h-32"
          src={"/image_1.png"}
          width={120}
          height={100}
        />
        <Image
          className="rounded-lg w-32 h-32"
          src={"/image_2.png"}
          width={120}
          height={100}
        />
        <Image
          className="rotate-[17deg] rounded-lg w-32 h-32"
          src={"/image_3.png"}
          width={120}
          height={100}
        />
      </div>
      <div className="hidden sm:flex gap-20 mt-10">
        <Image
          className="rotate-[17deg] rounded-lg w-[225px] h-[186px]"
          src={"/image_4.png"}
          width={300}
          height={200}
        />
        <Image
          className="rotate-[-17deg] rounded-lg w-[225px] h-[186px]"
          src={"/image_5.png"}
          width={300}
          height={200}
        />
      </div>
      <div className="flex sm:hidden gap-10 mt-5">
        <Image
          className="rotate-[17deg] rounded-lg w-32 h-32"
          src={"/image_4.png"}
          width={120}
          height={100}
        />
        <Image
          className="rotate-[-17deg] rounded-lg w-32 h-32"
          src={"/image_5.png"}
          width={120}
          height={100}
        />
      </div> */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_1.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_2.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_3.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_4.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_5.png"}
              width={120}
              height={100}
            />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_1.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_2.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_3.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_4.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_5.png"}
              width={120}
              height={100}
            />
          </li>
        </ul>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-10">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll2">
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_1.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_2.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_3.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_4.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_5.png"}
              width={120}
              height={100}
            />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll2"
          aria-hidden="true"
        >
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_1.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_2.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_3.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_4.png"}
              width={120}
              height={100}
            />
          </li>
          <li>
            <Image
              className="w-32 h-32 sm:w-56 sm:h-56 rounded-xl"
              src={"/image_5.png"}
              width={120}
              height={100}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GroupPhotos;

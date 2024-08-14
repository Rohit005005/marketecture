"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      repeatType: "revrese",
    },
  },
});

function Companies() {
  return (
    <div className="flex border border-red-600 justify-center items-center h-[350px] w-[100%] mx-auto">
      <div>
        <Image
          src={"/comp1.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-20"
        />
      </div>
      <div>
        <Image
          src={"/comp2.png"}
          width={150}
          height={100}
          className="-translate-x-0 -translate-y-20"
        />
      </div>
      <div>
        <Image
          src={"/comp3.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-10"
        />
      </div>
      <div>
        <Image
          src={"/comp4.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-40"
        />
      </div>
      <div>
        <Image
          src={"/comp6.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-10 "
        />
      </div>
      <div>
        <Image
          src={"/comp5.png"}
          width={150}
          height={100}
          className="-translate-x-0 -translate-y-20"
        />
      </div>
      <div>
        <Image
          src={"/comp7.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-20"
        />
      </div>
    </div>
  );
}

export default Companies;

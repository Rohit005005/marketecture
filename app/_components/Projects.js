"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const boxVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { y: -100, opacity: 0 },
};

const boxVariant2 = {
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { y: -100, opacity: 0 },
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div className="box flex justify-center items-center h-[350px] w-[100%] mx-auto">
      <motion.div
        ref={ref}
        variants={boxVariant2}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp1.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-20"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp2.png"}
          width={150}
          height={100}
          className="-translate-x-0 -translate-y-20"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp3.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-10"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp4.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-40"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp6.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-10 "
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp5.png"}
          width={150}
          height={100}
          className="-translate-x-0 -translate-y-20"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <Image
          src={"/comp7.png"}
          width={150}
          height={100}
          className="-translate-x-0 translate-y-20"
        />
      </motion.div>
    </motion.div>
  );
};

function Projects() {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <Box num={1} />
    </div>
  );
}

export default Projects;

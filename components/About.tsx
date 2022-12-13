import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center"
    >
      <h3 className="absolute uppercase top-24 tracking-[20px] text-black-500 text-2xl">
        About
      </h3>
      <motion.img
        src="/profilee2.jpg"
        className="md:w-64 w-56 -mb-20 md:mb-0 flex-shrink-0 object-cover rounded-full top-"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
      />
      <div className="space-y-5 px-0 md:px-10 md:space-y-10 max-w-screen-md">
        <h4 className="md:text-4xl  text-2xl font-semibold ">
          Here's a <span className="md:text-6xl text-2xl">little</span>{" "}
          Introduction:
        </h4>
        <p className="text-sm md:text-base">
          I am Priyasnshi Raval, and I am a Fronted Developer and here are some things I
          have done so far.... <br />
          I started learning about coding in my first year of college and then I
          got all into it once I discovered Development and Web3 .{" "}
          <br />
          Currently I am building projects for learning web3.
        </p>
      </div>
    </motion.div>
  );
}

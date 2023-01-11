import React from "react";
import { motion } from "framer-motion";
import Expcard from "../components/Expcard";
import Expcard2 from "../components/Expcard2";
import Expcard3 from "../components/Expcard3";
import Expcard4 from "../components/Expcard4";
type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly max-auto items-center"
    >
      <h3 className="absolute uppercase top-24 xl:top-12 tracking-[20px] text-black-500 text-2xl">
        Projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 xl:p-0 snap-x snap-mandatory xl:mt-20 scrollbar scrollbar-track-black-400/20 scrollbar-thumb-[#7df9ff]/80 scrollbar-thin">
        <Expcard/>
        <Expcard2/>
        <Expcard3/>
        <Expcard4/>
        <Expcard/>
      </div>
    </motion.div>
  );
}

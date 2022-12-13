import React from "react";
import { motion } from "framer-motion";
import internal from "stream";

type Props = {
  directionLeft?: boolean;
  source?: string;
  per?: string;
};

export default function Skill({ directionLeft, source ,per}: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={source}
        className="rounded-full bg-white border-[#171a17]-500 w-20 h-20 md:w-28 md:h-28 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-black h-20 w-20 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-white opacity-100">{per}</p>
        </div>
      </div>
    </div>
  );
}

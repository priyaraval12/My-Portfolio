import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import  Link  from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, My name's Priyanshi Raval",
      "I am a Fronted Developer",
      "GM Frens!",

    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/profile.jpeg"
        alt="Put sanity image here"
        className="rounded-full h-32 w-32 mx-auto object-cover z-9 scale-150"
      />
      <div className="z-10">
        <h2 className="text-md uppercase text-[#020003]-500 py-2 tracking-[15px]">
          BSC.IT Undergraduate
        </h2>
        <h1 className="text-5xl text-black-500 lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#000000" />
        </h1>
        <div className="pt-4 ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

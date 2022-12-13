import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-lime-200 text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-black-400/20 scrollbar-thumb-[#7df9ff]/80">
      <Head>
        <title>Priyanshi Raval</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-0 w-full flex items-center justify-center">
          <img src="/profile.jpeg"
          className="h-10 w-10 rounded-full grayscale hover:filter-none cursor-pointer"/>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

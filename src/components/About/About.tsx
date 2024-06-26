import Image from "next/image";
import React from "react";
import GlassCard from "../GlassCard";

const About = () => {
  return (
    <div className="flex flex-col items-center pt-14 h-screen" id="about">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#24BE46] to-[#15722A]">
        Who Am I ?
      </h1>
      <Image
        src="/me.png"
        alt="atmajo"
        width={300}
        height={300}
        className="mt-10 rounded-full"
      />
      <GlassCard className="mt-10 p-5">
        <p className="text-lg md:text-center">
          Hi, I'm Atmajo 👋 - a 3rd-year Btech CSE student with a passion for
          dev't & freelancing. Currently building awesome stuff.
        </p>
      </GlassCard>
    </div>
  );
};

export default About;

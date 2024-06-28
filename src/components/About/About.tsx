import Image from "next/image";
import React from "react";
import GlassCard from "../GlassCard";

const About = () => {
  return (
    <div className="flex flex-col items-center pt-14 lg:pt-32 h-screen" id="about">
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
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-10">
        <GlassCard className="mt-10 p-5  md:w-[300px]">
          <div className="flex justify-center items-center">
            <Image src="/dev.png" alt="dev" width={100} height={100} />
          </div>
          <p>Passionate Fullstack Developer🚀 and a Freelancer💻.</p>
        </GlassCard>
        <GlassCard className="mt-10 p-5 md:w-[300px]">
          <div className="flex justify-center items-center">
            <Image src="/code.png" alt="dev" width={100} height={100} />
          </div>
          <p className="mt-1">Casual coder by day, DSA master by night💡. Achieving goals one problem at a time!</p>
        </GlassCard>
      </div>
    </div>
  );
};

export default About;

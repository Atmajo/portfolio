import React from "react";
import avatar from "../avatar.png";
import paisa from "../paisa.mp3";

const Intro = () => {
  function sPlay() {
    const audio = new Audio(paisa);
    audio.play();
  }
  return (
    <div>
      <h3 className="text-4xl py-1 text-center">Who am I ?</h3>
      <div className="relative mx-auto w-80 h-80 py-5">
        <img src={avatar} alt="avatar" draggable="false" />
      </div>
      <p className="text-2xl">
        <span className="font-semibold">Hola!</span>✌️ I am{" "}
        <span className="font-semibold">Atmajo Chowdhury</span>.{" "}
      </p>
      <p className=" text-md py-7 text-gray-800 dark:text-white">
        I am a B.Tech Undergrad in Computer Science from University of
        Engineering and Management, Kolkata. My interest lies in Full-Stack
        Development, UI/UX Design and DSA.
      </p>
      <div className="">
        <h3 className="text-2xl">Engineering why ?</h3>
        <button
          onClick={sPlay}
          className="rounded-lg bg-gradient-to-b from-purple-300 to-purple-500 p-2 my-5 px-5"
        >
          Listen
        </button>
      </div>
    </div>
  );
};

export default Intro;

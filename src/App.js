import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  MoveOut,
  Sticky,
} from "react-scroll-motion";

import deved from "./components/dev-ed-wave.png";
import Project from "./components/content/Project";
import Volunteer from "./components/content/Volunteer";
import Footer from "./components/content/Footer";
import Intern from "./components/content/Intern";
import Tools from "./components/content/Tools";
import Education from "./components/content/Education";
import Intro from "./components/content/Intro";
import Skills from "./components/content/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="select-none px-10 md:px-20 lg:px-40 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-800  dark:text-white">
        <section className="min-h-screen">
          <nav className="dark:bg-slate-750 shadow-xl p-5 sm:p-10 rounded-xl py-10 mb-12 flex justify-between ">
            <h1 className="font-burtons text-2xl">Atmajo.</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:drop-shadow-bglow dark:hover:drop-shadow-glow cursor-pointer text-2xl"
                />
              </li>
              <li className="hover:drop-shadow-bglow dark:hover:drop-shadow-glow">
                <a
                  href="https://drive.google.com/file/d/1yKwNOpAdHxcJY9ODxvetfmUEHSPKJ86b/view?usp=sharing"
                  className="hover:bg-purple-900 text-white px-4 py-2 bg-gradient-to-r from-purple-300 to-purple-500 rounded-md ml-8 "
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-purple-300 to-purple-500 rounded-full w-80 h-80 mt-20 py-5 shadow-2xl">
            <img src={deved} alt="deved" draggable="false" />
          </div>
          <div className="sm:text-center text-left sm:p-10 p-5">
            <h2 className="text-6xl py-2 text-purple-700 dark:text-white">
              Atmajo Chowdhury
            </h2>
            <h3 className="text-2xl py-2">
              Full-Stack Developer | UEMK ACM Secretary
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Student at UEMK, studying B.Tech CSE in 2nd Year. Join me down
              below and let's begin cracking
            </p>
          </div>
          <div className="flex text-5xl justify-center gap-5">
            <a href="https://twitter.com/_atmajo_">
              <AiFillTwitterCircle className="hover:drop-shadow-bglow dark:hover:drop-shadow-glow hover:rounded-full" />
            </a>
            <a href="https://linkedin.com/in/AtmajoChowdhury">
              <AiFillLinkedin className="hover:drop-shadow-bglow dark:hover:drop-shadow-glow hover:rounded-full" />
            </a>
            <a href="https://github.com/atmajo">
              <AiFillGithub className="hover:drop-shadow-bglow dark:hover:drop-shadow-glow hover:rounded-full" />
            </a>
          </div>
        </section>
        <section>
          <Intro />
        </section>
        <section>
          <Skills />
          <Education />
          <Tools />
          {/**<Intern />**/}
          <Project />
          <Volunteer />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;

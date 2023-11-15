import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import avatar from "./components/avatar.png";
import paisa from "./components/paisa.mp3";
import deved from "./components/dev-ed-wave.png";
function App() {
  function sPlay() {
    const audio = new Audio(paisa);
    audio.play();
  }
  const [darkMode, setDarkMode] = useState(false);
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
                  href="https://drive.google.com/file/d/1nq_4nZRvQLWJgEji5zayjetrEA7iQ9AG/view?usp=sharing"
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
              Engineering and Management, Kolkata. My interest lies in
              Full-Stack Development, UI/UX Design and DSA.
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
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 text-center">Skills</h3>
            <div className="dark:bg-slate-750 text-left shadow-lg p-10 rounded-xl flex gap-10 flex-col sm:flex-row md:gap-10 lg:justify-center">
              <div class="my-5">
                <h5 class="text-lg font-medium">Full-Stack Developer</h5>
                <p class="">
                  I make cool looking websites and one of the example is this
                  portfolio.
                </p>
              </div>
              <div class="my-5">
                <h5 class="text-lg font-medium">Programmer</h5>
                <p class="">
                  I solve DSA related codes everday as coding is my passion.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-4xl py-1 text-center mt-10">Education</h3>
            <div className="dark:bg-slate-750 text-left shadow-lg p-10 rounded-xl flex flex-col sm:flex-row md:gap-10 lg:justify-center">
              <div class="my-5">
                <h5 class="text-xl font-medium">2011 - 2020</h5>
                <p class="">The Aryans School, Kolkata</p>
                <p class="italic">Class 2 to Class 10</p>
              </div>
              <div class="my-5">
                <h5 class="text-xl font-medium">2020 - 2022</h5>
                <p class="">The Aryans School, Kolkata</p>
                <p class="italic">Class 11 to Class 12</p>
              </div>
              <div class="my-5">
                <h5 class="text-xl font-medium">2022 - 2026</h5>
                <p class="">University of Engineering and Managemnt, Kolkata</p>
                <p class="italic">Computer Science and Engineering</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-4xl py-1 text-center mt-10">Tools</h3>
            <p className="text-center text-md py-2 text-gray-800 dark:text-white">
              What I use generally !
            </p>
            <div className="dark:bg-slate-750 text-left shadow-lg p-10 rounded-xl">
              <div className="flex justify-around py-10">
                <div className="w-20 h-20">
                  <img src={`logos/nextjs.png`} alt="" draggable="false" />
                </div>
                <div className="w-20 h-20">
                  <img src={`logos/react.png`} alt="" draggable="false" />
                </div>
                <div className="w-20 h-20">
                  <img src={`logos/mongo.png`} alt="" draggable="false" />
                </div>
              </div>
              <div className="flex justify-around py-10">
                <div className="w-20 h-20">
                  <img src={`logos/html.png`} alt="" draggable="false" />
                </div>
                <div className="w-20 h-20">
                  <img src={`logos/css.png`} alt="" draggable="false" />
                </div>
                <div className="w-20 h-20">
                  <img src={`logos/js.png`} alt="" draggable="false" />
                </div>
              </div>
              <div className="flex justify-around py-10">
                <div className="w-20 h-20">
                  <img src={`logos/git.png`} alt="" draggable="false" />
                </div>
                <div className="w-20 h-20">
                  <img src={`logos/c.png`} alt="" draggable="false" />
                </div>
                <div className="w-20 h-20">
                  <img src={`logos/boot.png`} alt="" draggable="false" />
                </div>
              </div>
            </div>
          </div>
          {/**<div>
            <h3 className="text-4xl py-1 text-center mt-10">Internships</h3>
            <div className="dark:bg-slate-750 text-left shadow-lg p-10 rounded-xl">
              <div>
                <div className="flex justify-center gap-5">
                  <div className=" py-5">
                    <h3 className="text-2xl font-bold">2023</h3>
                  </div>
                  <div className="flex flex-col">
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">Web Dev Intern</h3>
                      <h4 className="text-lg">CodSoft</h4>
                      <p className="italic">July,10 to August,10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>**/}
          <div className="text-center">
            <h3 className="text-4xl py-1 text-center mt-10">Projects</h3>
            <div className="dark:bg-slate-750 text-left shadow-lg p-10 rounded-xl">
              <div>
                <div className="flex justify-center gap-5">
                  <div className=" py-5">
                    <h3 className="text-2xl font-bold">2023</h3>
                  </div>
                  <div className="flex flex-col">
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">Portfolio</h3>
                      <p className="italic">My personal website.</p>
                    </div>
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">WeatherApp</h3>
                      <p className="italic">An Weather App built with</p> 
                      <p className="italic">geolocation services.</p>
                    </div>
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">Login Site</h3>
                      <p className="italic">Made with MERN Stack</p> 
                      <p className="italic">to simulate basic authentication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-4xl py-1 text-center mt-10">Volunteering</h3>
            <div className="dark:bg-slate-750 text-left shadow-lg p-10 rounded-xl">
              <div>
                <div className="flex justify-center gap-5">
                  <div className=" py-5">
                    <h3 className="text-2xl font-bold">2023</h3>
                  </div>
                  <div className="flex flex-col">
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">Volunteer</h3>
                      <h4 className="text-lg">Eutopia, UEM Kolkata</h4>
                      <p className="italic">January, 2023</p>
                    </div>
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">Photography Team</h3>
                      <h4 className="text-lg">Ureckon, UEM Kolkata</h4>
                      <p className="italic">February, 2023</p>
                    </div>
                    <div className=" py-5">
                      <h3 className="text-2xl font-bold">Co-ordinator</h3>
                      <h4 className="text-lg">Ecstacia, UEM Kolkata</h4>
                      <p className="italic">March, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <footer className="py-5 text-center hover:drop-shadow-bglow dark:hover:drop-shadow-glow">
            <h3>
              Copyright ©️
              <span>
                <a href="/">Atmajo Chowdhury</a>
              </span>
            </h3>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;

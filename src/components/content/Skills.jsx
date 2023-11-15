import React from "react";

const Skills = () => {
  return (
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
  );
};

export default Skills;

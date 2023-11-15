import React from "react";

const Education = () => {
  return (
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
  );
};

export default Education;

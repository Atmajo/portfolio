import React from "react";

const Project = () => {
  return (
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
  );
};

export default Project;

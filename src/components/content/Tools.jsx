import React from "react";

const Tools = () => {
  return (
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
            <img src={`logos/js.jpg`} alt="" draggable="false" />
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
  );
};

export default Tools;

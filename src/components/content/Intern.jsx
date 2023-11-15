import React from "react";

const Intern = () => {
  return (
    <div>
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
    </div>
  );
};

export default Intern;

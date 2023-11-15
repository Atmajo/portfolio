import React from "react";

const Volunteer = () => {
  return (
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
  );
};

export default Volunteer;

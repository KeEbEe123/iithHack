import React from "react";
import { useLocation } from "react-router-dom";
import healthysample1 from "../images/healthysample1.jpg";

function Bento() {
  const location = useLocation();
  const imageURL = location.state?.imageURL;
  return (
    <div className="bg-gradient-to-t from-black to-green-800 h-screen w-full flex justify-center items-center p-2">
      <div className="grid h-full w-full grid-cols-12 grid-rows-4 gap-4">
        <div className="col-span-4 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          <img
            src={imageURL}
            className="w-full h-full object-cover rounded-3xl"
          ></img>
        </div>
        <div className="col-span-4 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute font-mono ">Your plant is:</h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-800 to-green-600 text-slate-200 mt-[65px] font-mono text-[115px] font-extrabold ml-2 object-cover w-full h-full">
            HEALTHY!
          </h1>
        </div>
        <div className="col-span-4 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          <img
            src={healthysample1}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">HOW TO MAINTAIN</h1>
          <ol className="font-mono text-3xl block mt-14 list-disc list-inside">
            <li>
              Avoid overwatering; focus on watering the soil, not the leaves.
            </li>
            <li>Use balanced nutrients to support strong leaf growth.</li>
            <li>Remove dead or diseased leaves to improve airflow.</li>
          </ol>
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">MORE ABOUT HEALTHY PLANTS</h1>
          <ol className="font-mono text-3xl block mt-14 list-disc list-inside">
            <li>Rust is a plant disease caused by various fungal pathogens.</li>
            <li>
              It spreads through airborne spores, often in humid conditions.
            </li>
            <li>
              Rust primarily affects leaves, causing yellow, orange, or brown
              spots.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Bento;

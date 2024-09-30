import React from "react";
import { useLocation } from "react-router-dom";
import mulimg1 from "../images/multiplesample1.jpg";

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
          <h1 className="absolute font-mono ">Your plant is affected with:</h1>
          <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-slate-800 to-amber-600 text-slate-200 mt-[-10px] font-mono text-[100px]   font-extrabold ml-1">
            MULTIPLE
          </h1>
          <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-slate-800 to-amber-600 text-slate-200 mt-[75px] font-mono text-[100px]  font-extrabold ml-1">
            DISEASES
          </h1>
          <p className="mt-[200px]">
            "Plants affected by multiple diseases show symptoms like wilting,
            yellowing leaves, stunted growth, leaf spots, and reduced yield.
            These combined effects complicate treatment and recovery,
            necessitating integrated pest management and resistant varieties for
            effective control and prevention."
          </p>
        </div>
        <div className="col-span-4 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          <img
            src={mulimg1}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">WHAT TO DO</h1>
          <ol className="font-mono text-3xl block mt-14 list-disc list-inside">
            <li>Prune all visibly diseased leaves and dispose of them.</li>
            <li>
              Apply a fungicide or insecticide preferably neem oil or sulfur
              based.
            </li>
            <li>
              Optimize watering, provide nutrients, and ensure good airflow.
            </li>
          </ol>
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">
            MORE ABOUT PLANTS AFFECTED WITH MULTIPLE DISEASES
          </h1>
          <ol className="font-mono text-3xl block mt-[80px] list-disc list-inside">
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

import React from "react";
import { useLocation } from "react-router-dom";
import rustimg1 from "../images/rustsample1.jpg";

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
          <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-800 to-amber-600 text-slate-200 mt-3 font-mono text-[200px] font-extrabold ml-1">
            RUST
          </h1>
        </div>
        <div className="col-span-4 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          <img
            src={rustimg1}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">WHAT TO DO</h1>
          <ol className="font-mono text-3xl block mt-14 list-disc list-inside">
            <li>
              Prune and dispose of infected leaves to stop rust from spreading.
            </li>
            <li>
              Increase airflow around the plant and avoid wetting the leaves.
            </li>
            <li>Use neem oil or a sulfur-based fungicide to treat the rust.</li>
          </ol>
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">MORE ABOUT RUST</h1>
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

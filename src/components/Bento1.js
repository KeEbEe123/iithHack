import React from "react";
import { useLocation } from "react-router-dom";
import scabimg1 from "../images/scabsample1.jpg";

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
          <h1 className="absolute text-transparent bg-clip-text bg-gradient-to-t from-slate-800 to-amber-600 text-slate-200 mt-[-40px] font-mono text-[200px] font-extrabold ml-1">
            SCAB
          </h1>
          <p className="mt-[220px] justify-center font-mono">
            "Scab, in botany, any of several bacterial or fungal plant diseases
            characterized by crustaceous lesions on fruits, tubers, leaves, or
            stems. The term is also used for the symptom of the disease"
          </p>
        </div>
        <div className="col-span-4 row-span-2 bg-indigo-200 rounded-3xl flex justify-center items-center">
          <img
            src={scabimg1}
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
              Increase airflow, avoid overhead watering, and keep plants
              healthy.
            </li>
            <li>Use sulfur or copper-based fungicides as directed.</li>
          </ol>
        </div>
        <div className="font-mono font-bold text-3xl col-span-6 row-span-2 bg-indigo-200 rounded-3xl flex justify-start items-start p-5">
          <h1 className="absolute">MORE ABOUT SCAB</h1>
          <ol className="font-mono text-2xl block mt-14 list-disc list-inside">
            <li>
              Scab is a fungal disease that creates dark, velvety spots on
              leaves, stems, and fruits.
            </li>
            <li>
              It thrives in moist and humid conditions and can cause leaves to
              yellow and drop prematurely.
            </li>
            <li>
              Commonly affects fruit trees like apples and pears, but can also
              infect ornamental plants and vegetables
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Bento;

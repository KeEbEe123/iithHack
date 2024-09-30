import React from "react";
import Hero from "../components/Hero";
import bgLanding from "../images/PLANT11.png";
import { Link } from "react-router-dom";
import BotpressChat from "../components/BotpressChat";

function Landing() {
  return (
    <>
      <BotpressChat />
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bgLanding})` }}
      >
        <Hero />
        <Link to="/main">
          <button className="absolute text-3xl mt-[140px] left-[43.5%] bg-white p-3 border rounded-full hover:rounded-none hover:bg-green-800 font-spicy transition-all ease-in-out duration-300">
            Detect Now
          </button>
        </Link>
      </div>

      <div className="flex justify-center align-bottom items-baseline mt-[-60px]">
        <h1 className="text-white absolute mt-[-50px] text-xl font-bold font-mono animate-pulse">
          Learn More
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="white"
          class="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
          />
        </svg>
      </div>
    </>
  );
}

export default Landing;

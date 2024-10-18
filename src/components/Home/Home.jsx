import React from "react";
import bg from "../../assets/app-home-bg.mp4";
import "../../index.css";
import MarketInsights from "../MarketInsights/MarketInsights";
const Home = () => {
  return (
    <>
      <div className="h-full md:mb-20 relative md:min-h-screen w-full flex justify-center bg-primary">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="hidden md:block absolute w-full h-full object-cover"
        >
          <source src={bg} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="  md:absolute top-1/4 md:top-1/3 flex flex-col items-center text-center p-4 md:justify-start justify-center  min-h-screen md:max-h-screen">
          <h1 className="text-[28px] md:text-[64px] font-semibold text-white word ">
            When Innovation
            <br /> Meets
            <span className="m-2 md:mt-4 bg-buttonBg shadow-custom-1 px-4 py-2 md:px-6 md:py-1 rounded-full text-[#00161D] font-medium">
              Investment
            </span>
          </h1>
          <p className="text-[14px] md:text-[20px] text-primary p-4 md:pt-6">
            Empowering Trading Through Advanced Technology
          </p>

          <div className="flex justify-center p-4">
            <button className="bg-black box text-white px-6 py-2 text-center font-medium text-md rounded-md  focus:outline-none">
              Open DApp
            </button>
          </div>
        </div>
      </div>
      <MarketInsights />
    </>
  );
};

export default Home;

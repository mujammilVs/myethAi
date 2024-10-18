import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import roadmap1 from "../../assets/roadmap-1.mp4";
import roadmap2 from "../../assets/roadmap2.mp4";
import roadmap3 from "../../assets/roadmap3.mp4";
import "../../index.css";
const Roadmap = () => {
  return (
    <>
      <div className="card bg-secondary flex flex-col items-center text-white">
        <h1 className="text-4xl p-4">Roadmap</h1>

        <div className="flex flex-col lg:flex-row justify-between items-center  p-6 gap-6 w-full ">
          <div className="  w-full   flex flex-col justify-between bg-secondary p-6 ">
            <button className="w-fit bg-[#f7f7f7] text-[#001651] px-2 py-1 rounded-md">
              Phase 1
            </button>
            <h1 className="text-[32px] pb-4 font-semibold">Kicking Off</h1>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle style={{ color: "blue" }} />
                <h2 className="text-xl">Launch of EthAi: Officially</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">Development of Core AI Agents</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">User Onboarding Campaign</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">Community Engagement Initiatives</h2>
              </div>
            </div>
          </div>

          <video
            autoPlay
            muted
            loop
            className="card opacity-30   w-full lg:w-1/2"
          >
            <source src={roadmap1} type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center  p-6 gap-6 w-full ">
          <video
            autoPlay
            muted
            loop
            className="card opacity-30 w-full lg:w-1/2 order-last lg:order-first "
          >
            <source src={roadmap2} type="video/mp4" />
          </video>

          <div className=" w-full lg:w-1/2 flex flex-col justify-between  bg-secondary p-6 ">
            <button className="w-fit bg-[#f7f7f7] text-[#001651] px-2 py-1 rounded-md">
              Phase 2
            </button>
            <h1 className="text-[32px] pb-4 font-semibold">Bigger Insights</h1>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle style={{ color: "blue" }} />
                <h2 className="text-xl">Introduction of Advanced AI Agents</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">Strategic Partnerships</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">User Interface Optimization</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">Comprehensive Marketing Campaign</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center m-4 p-6 gap-6 w-full ">
          <div className="shadow-custom-inner w-full lg:w-1/2 flex flex-col justify-between border border-none   p-6">
            <button className="w-fit bg-[#f7f7f7] text-[#001651] px-2 py-1 rounded-md">
              Phase 3
            </button>
            <h1 className="text-[32px] pb-4 font-semibold">Full Power</h1>
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FaRegCheckCircle style={{ color: "blue" }} />
                <h2 className="text-xl">Introduction of Enhanced Features</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">API Integration for Data Access</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">Community-Driven Initiatives</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCheckCircle />
                <h2 className="text-xl">Continuous Improvement and Updates</h2>
              </div>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            className="shadow-2xl w-full lg:w-1/2 card opacity-30"
          >
            <source src={roadmap3} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

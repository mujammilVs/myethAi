import React from "react";
import { FaTools } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { BiSolidWallet } from "react-icons/bi";

const About = () => {
  return (
    <div className="pt-6 md:min-h-screen w-full bg-primary flex flex-col justify-center items-center ">
      <div className="flex flex-col gap-3 justify-center items-center mb-3 mt-16">
        <h1 className="text-4xl font-bold p-2">About EthAi</h1>
        <p className="text-primary w-1/2 text-center p-2">
          At EthAi, we’re all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders’ movements.
        </p>
        <button className="bg-white btn  p-2 rounded-lg text-[#00161D] font-medium">
          Read more
        </button>
      </div>

      <div className="w-[90%] md:w-[80%] lg:w-[60%] bg-secondary p-4 flex flex-col md:flex-row justify-center items-center rounded-xl mx-auto mb-4">
        <div className="w-full md:w-1/2 ">
          <div className="p-4 flex flex-col gap-12 ">
            <div className="flex flex-col gap-2">
              <MdInsights className="text-4xl text-primary" />
              <h2 className="text-xl font-bold">Stay Ahead</h2>
              <p className="text-primary">
                No more guesswork - get clear, trustable insights.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <FaTools className="text-4xl text-primary " />
              <h2 className="text-xl font-bold">Know Your Assets</h2>
              <p className="text-primary">
                Always stay on top of how your investments are performing.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 ">
          <div className="p-4 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
              <BiSolidWallet className="text-4xl  text-primary" />
              <h2 className="text-xl font-bold">Simple, Not Overwhelming</h2>
              <p className="text-primary">
                Our tools are designed to make complex market analysis easy to
                understand and act on.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <FaTools className="text-4xl text-primary" />
              <h2 className="text-xl font-bold">Future-Proof</h2>
              <p className="text-primary">
                We’re constantly improving, adding new features to help you make
                the most informed decisions possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

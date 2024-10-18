import React from "react";
import logo from "../../assets/ethai.logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import "../../index.css";
const Footer = () => {
  const socialIcons = "bg-secondary rounded-full p-[3px] text-4xl sm:text-4xl ";

  return (
    <div className="bg-footer p-6 md:p-4 flex flex-col md:flex-row justify-between items-center text-white h-[40vh]">
      <div className="mb-4 md:mb-0 p-4">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="" className="w-12" />
          <h1 className="text-white text-4xl md:text-2xl font-bold">EthAi</h1>
        </div>
        <div className="flex gap-3 justify-center md:justify-start">
          <FaTelegramPlane className={socialIcons} />
          <FaInstagram className={socialIcons} />
          <FaXTwitter className={socialIcons} />
          <FaFacebookF className={socialIcons} />
          <FaDiscord className={socialIcons} />
        </div>
      </div>

      <div className="w-full md:w-1/3 hidden md:block flex-col gap-4">
        <h1 className="text-white font-bold text-3xl md:text-4xl text-center md:text-left font-space">
          "Designed for traders of today, just like you"
        </h1>

        <div className="border-2 border-color p-1 rounded-xl flex flex-col md:flex-row gap-2 items-center">
          <input
            type="text"
            placeholder="What's your work email?"
            className="w-full md:w-auto flex-grow border-none bg-transparent outline-none text-white placeholder-slate-400 p-2"
          />
          <button className="w-full md:w-auto bg-secondary  search-btn  text-white px-6 py-2 text-center font-medium text-md rounded-md  focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

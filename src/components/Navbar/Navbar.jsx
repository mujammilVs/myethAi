import React, { useState } from "react";
import logo from "../../assets/ethai.logo.png";
import { HiBars2 } from "react-icons/hi2";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility
  const navigate = useNavigate();

  
  return (
    <nav className="h-14 md:m-0 m-1 md:h-20 md:rounded rounded-full bg-secondary md:bg-primary  z-20 md:z-30 left-0 right-0 p-4 flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <Link to="/" className="flex gap-2 items-center">
          <img src={logo} alt="" className="md:w-1/3 w-1/5" />
          <h1 className="text-white text-xl font-bold">EthAi</h1>
        </Link>
      </div>

      {/* Navigation Links (hidden on medium screens) */}
      <div className="hidden md:flex items-center gap-6 bg-secondary rounded-full">
        <ul className="flex gap-8 rounded-full  px-8 py-3">
          <li
            onClick={() => {
              navigate("/features");
            }}
            className="text-primary transition-colors"
          >
            Features
          </li>
          <li
            onClick={() => {
              navigate("/whyus");
            }}
            className="text-primary transition-colors"
          >
            Why Us
          </li>
          <li
            onClick={() => {
              navigate("/tokenomics");
            }}
            className="text-primary transition-colors"
          >
            Tokenomics
          </li>
          <li
            onClick={() => {
              navigate("/roadmaps");
            }}
            className="text-primary transition-colors"
          >
            Roadmap
          </li>
        </ul>
      </div>

      {/* Menu Icon (visible on medium screens and below) */}
      <div className=" md:hidden p-2">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <HiBars2 className="text-white text-2xl" />
        </button>
      </div>

      <div className=" items-center gap-4 hidden md:flex ">
        <button className="text-white border-none hover:text-primary hover:bg-secondary hover:px-3 py-2 hover:rounded-lg">
          Log in
        </button>
        <button className="bg-white btn p-2 rounded-lg text-[#00161D] font-semibold ">
          Whitepaper
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-14 right-0  w-1/2 bg-secondary md:hidden z-10">
          <ul className="flex flex-col items-center py-4">
            <li
              onClick={() => {
                navigate("/features");
              }}
              className="text-primary py-2 transition-colors"
            >
              Features
            </li>
            <li
              onClick={() => {
                navigate("/whyus");
              }}
              className="text-primary py-2 transition-colors"
            >
              Why Us
            </li>
            <li
              onClick={() => {
                navigate("/tokenomics");
              }}
              className="text-primary py-2 transition-colors"
            >
              Tokenomics
            </li>
            <li
              onClick={() => {
                navigate("/roadmaps");
              }}
              className="text-primary py-2 transition-colors"
            >
              Roadmap
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

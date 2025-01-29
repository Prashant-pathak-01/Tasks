import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "./../../Assets/Logo/logo.svg";
import "./navbar.css";
function Navbar() {
  const [isopen, setopen] = useState(false);

  return (
    <nav className="flex flex-row justify-between h-20 pl-10 pr-10 items-center bg-[#171717] text-gray-200 drop-shadow-md  ">
      <Link to="/">
        <img src={LOGO} className="w-32 cursor-pointer"></img>
      </Link>
      <div
        className="
      flex flex-row justify-between items-center text-xl 
      "
      >
        <ul className="hidden xl:flex items-center gap-12 font-semibold ">
          <Link to="/discussion">
            <li className="p-3 hover:text-blue-400 hover:scale-95 rounded-md transition-all cursor-pointer">
              Discussion
            </li>
          </Link>
          <Link to="/trending">
            <li className="p-3 hover:text-blue-400 hover:scale-95 rounded-md transition-all cursor-pointer">
              Trending
            </li>
          </Link>
          <Link to="/explore">
            <li className="p-3 hover:text-blue-400 hover:scale-95 rounded-md transition-all cursor-pointer">
              Explore
            </li>
          </Link>
        </ul>

        <div className="relative hidden md:flex ml-20">
          <i className="bx bx-search text-grey-400 text-2xl left-4 opacity-75 top-2  absolute "></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-lg bg-opacity-10 text-white pl-12 py-2 px-3 rounded-full focus:outline-sky-300 focus:ring-2 border-blue-300 focus:ring-sky-500 "
          />
        </div>
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer "
          onClick={() => setopen(!isopen)}
        ></i>
      </div>
      <div className="md:flex hidden">
        <Link to="/auth">
          <button className="button">Login</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

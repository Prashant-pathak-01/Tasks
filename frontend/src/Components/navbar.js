import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isopen, setopen] = useState(false);

  return (
    <nav>
      <div
        className="bg-[#171717] text-gray-200 py-3 px-8
      drop-shadow-md  flex justify-between items-center text-xl 
      "
      >
        <Link to="/">
          <h1 className="text-3xl transition-all  font-serif cursor-pointer">
            DisCuss
          </h1>
        </Link>
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

        <div className="relative hidden md:flex items-center gap-2">
          <i className="bx bx-search text-grey-400 text-2xl left-2  absolute "></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-white bg-opacity-10 text-white pl-10 py-2 px-3 rounded-2xl focus:outline-sky-300 focus:ring-2 border-blue-300 focus:ring-sky-500 "
          />
        </div>

        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer "
          onClick={() => setopen(!isopen)}
        ></i>
      </div>
    </nav>
  );
}

export default Navbar;

import { User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div className="flex justify-between bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-100">
          {title}
        </h1>
      </div>

      <div className="p-4 mr-10">
        <ul className="flex flex-row gap-8">
          <li className="cursor-pointer p-1 text-xs md:text-sm md:font-semibold lg:text-base hover:text-yellow-300">
            AI Mail
          </li>
          <Link to={"/ondemand-loading"}>
            <li className="cursor-pointer hover:text-yellow-300 p-1 text-xs md:text-sm lg:text-base md:font-semibold">
              Lazy Load
            </li>
          </Link>
          <Link to={"/login"}>
            <li className="bg-slate-900 rounded-full p-0 md:p-1.5 cursor-pointer">
              {" "}
              <User className="text-amber-300 size-4 md:size-6" />{" "}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;

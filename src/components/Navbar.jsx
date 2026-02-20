import React from "react";
import { Link } from "react-router-dom";
 
export default function Navbar() {
  return (
    <header className="w-full flex justify-center">
      <div className="w-[1216px] flex items-center justify-between mt-4">
 
        {/* LOGO */}
        <Link to="/">
          <img
            src="/Logo.png"
            alt="BEAST"
            className="w-[150px] cursor-pointer"
          />
        </Link>
 
        <div className="flex items-center">
 
          {/* FIXED: Only ONE ul */}
          <ul className="flex items-center gap-6 text-sm font-medium text-white mr-8">
            <li className="hover:text-red-500 transition duration-300">
              <Link to="./Blog">BLOG</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="./Facilities">FACILITIES</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/bmi">BMI</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/schedule">SCHEDULE</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/reviews">REVIEWS</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="/coaches">COACHES</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="./Blog">ss</Link>
            </li>
            <li className="hover:text-red-500 transition duration-300">
              <Link to="./Blog">ssa</Link>
            </li>
          </ul>
 
          {/* Better: Style Link instead of Button inside Link */}
          <Link
            to="/join"
            className="w-[149px] h-[50px] flex items-center justify-center bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold rounded-md"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </header>
  );
}
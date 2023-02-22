import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const { isDarkMode, toggleDarkMode } = props;

  const navbarClasses = `bg-${isDarkMode ? "gray-800" : "white"} shadow`;

  const linkClasses = `rounded-md px-3 py-2 text-sm font-medium text-${
    isDarkMode ? "gray-300" : "gray-700"
  } hover:bg-${isDarkMode ? "gray-700" : "gray-200"} hover:text-inherit`;

  return (
    <nav className={navbarClasses}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className={linkClasses}>
                  Home
                </Link>
                <Link to="/electricityprices" className={linkClasses}>
                  Electricity Prices
                </Link>
                <Link to="/predict" className={linkClasses}>
                  Predict Electricity Usage
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-md py-2 px-4"
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <nav className="bg-gray-800 shadow">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <Link
                    to="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    to="/projects"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </Link>
                  <Link
                    to="/reports"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex-grow bg-gray-200">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { todayAvgP, tomorrowAvgP, NOKkWh } from "../constants";

function Home() {
  return (
    <div className="banner flex-grow bg-gray-200">
      <div className="content">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Technical Assessment
        </h1>
        <div className="flex justify-center flex-wrap gap-4">
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">{todayAvgP}</h2>
            <p className="mt-1 text-sm text-gray-500">{NOKkWh}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">
              {tomorrowAvgP}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{NOKkWh}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">Hour price</h2>
            <p className="mt-1 text-sm text-gray-500">{NOKkWh}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">
              Placeholder for Company
            </h2>
            <p className="mt-1 text-sm text-gray-500">{NOKkWh}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">
              Placeholder for Company
            </h2>
            <p className="mt-1 text-sm text-gray-500">{NOKkWh}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">
              Placeholder for Company
            </h2>
            <p className="mt-1 text-sm text-gray-500">asd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

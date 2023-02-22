import React from "react";
import providers from "../data/providers.json";
import { todayAvgP, tomorrowAvgP, NOKkWh } from "../constants";

function Home() {
  return (
    <div className="banner flex-grow bg-gray-200">
      <div className="content">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Technical Assessment
        </h1>
        <div className="flex justify-center flex-wrap gap-4">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28"
            >
              <h2 className="text-lg font-medium text-gray-900">
                {provider.name}
              </h2>
              {provider.pricingModel === "fixed" && provider.fixedPrice && (
                <>
                  <p className="mt-1 text-sm text-gray-500">
                    {provider.fixedPrice.toFixed(2)}
                    {NOKkWh}
                  </p>
                  <p className="text-sm text-gray-500">
                    {provider.pricingModel} for {provider.fixedPricePeriod}{" "}
                    months
                  </p>
                </>
              )}
              {provider.pricingModel === "variable" &&
                provider.variablePrice && (
                  <>
                    <p className="mt-1 text-sm text-gray-500">
                      {provider.variablePrice.toFixed(2)}
                      {NOKkWh}
                    </p>
                    <p className="text-sm text-gray-500">
                      {provider.pricingModel} for {provider.variablePricePeriod}{" "}
                      months
                    </p>
                  </>
                )}
              {provider.pricingModel === "spot-hourly" &&
                provider.spotPrice && (
                  <>
                    <p className="mt-1 text-sm text-gray-500">
                      {provider.spotPrice.toFixed(2)}
                      {NOKkWh}
                    </p>
                    <p className="text-sm text-gray-500">
                      {provider.pricingModel}
                    </p>
                  </>
                )}
              {provider.pricingModel === "spot-monthly" &&
                provider.spotPrice && (
                  <>
                    <p className="mt-1 text-sm text-gray-500">
                      {provider.spotPrice.toFixed(2)}
                      {NOKkWh}
                    </p>
                    <p className="text-sm text-gray-500">
                      {provider.pricingModel}
                    </p>
                  </>
                )}
            </div>
          ))}
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">{todayAvgP}</h2>
            <p className="mt-1 text-sm text-gray-500">
              Check the electricity price page
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900">
              {" "}
              {tomorrowAvgP}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Check the electricity price page
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
            <h2 className="text-lg font-medium text-gray-900 text-center">
              Infobox ¯\_(ツ)_/¯
            </h2>
            <p className="mt-1 text-sm text-gray-500 text-center">
              Hi, and welcome to my technical assessment task!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

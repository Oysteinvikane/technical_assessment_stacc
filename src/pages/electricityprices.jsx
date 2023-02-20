import React, { useState, useEffect } from "react";
import LineChart from "../components/charts/linechart";
import PriceAreaData from "../components/priceareadata";
import {
  choosePriceAreaLabel,
  East,
  South,
  Mid,
  North,
  West,
  todayAvgP,
  tomorrowAvgP,
  waitingForNextDay,
  loadingDataText,
  NOKkWh,
} from "../constants";

function ElectricityPrices({ colorTheme }) {
  useEffect(() => {
    const root = window.document.documentElement;
    if (colorTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [colorTheme]);

  const [pricearea, setPriceArea] = useState("_NO5");

  const handlePriceAreaChange = (event) => {
    setPriceArea(event.target.value);
  };

  const { todayData, tomorrowData } = PriceAreaData({ pricearea });

  // Calculate today's average price
  const todayAvgPrice =
    todayData.reduce((sum, data) => sum + data.NOK_per_kWh, 0) /
    todayData.length;

  // Calculate tomorrow's average price
  const tomorrowAvgPrice =
    tomorrowData.reduce((sum, data) => sum + data.NOK_per_kWh, 0) /
    tomorrowData.length;

  return (
    <div className="w-full h-full p-4">
      <div className="mb-4">
        <label htmlFor="pricearea">{choosePriceAreaLabel} </label>
        <select
          id="pricearea"
          value={pricearea}
          onChange={handlePriceAreaChange}
          className={`appearance-none bg-white border border-gray-400 hover:border-gray-500
             px-2 py-1 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline
             ${colorTheme === "dark" ? "text-white" : ""}`}
        >
          <option value="_NO1">{East}</option>
          <option value="_NO2">{South}</option>
          <option value="_NO3">{Mid}</option>
          <option value="_NO4">{North}</option>
          <option value="_NO5">{West}</option>
        </select>
      </div>
      <p>
        {todayAvgP} {todayAvgPrice.toFixed(2)} {NOKkWh}
      </p>
      <p>
        {tomorrowAvgP} {tomorrowAvgPrice.toFixed(2)} {NOKkWh}
      </p>
      {todayData.length > 0 ? (
        <LineChart
          data={todayData}
          pricearea={pricearea}
          title="Electricity prices today"
        />
      ) : (
        <p>{loadingDataText}</p>
      )}
      {tomorrowData.length > 0 ? (
        <LineChart
          data={tomorrowData}
          pricearea={pricearea}
          title="Electricity prices tomorrow"
        />
      ) : (
        <p>{waitingForNextDay}</p>
      )}
    </div>
  );
}

export default ElectricityPrices;

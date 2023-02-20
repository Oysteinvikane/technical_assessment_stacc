import React, { useState } from "react";
import LineChart from "../components/charts/linecharts";
import PriceAreaData from "../components/priceareadata";

function Reports() {
  const [pricearea, setPriceArea] = useState("_NO5");

  const handlePriceAreaChange = (event) => {
    setPriceArea(event.target.value);
  };

  const { todayData, tomorrowData } = PriceAreaData({ pricearea });

  return (
    <div className="w-full h-full p-4">
      <div className="mb-4">
        <label htmlFor="pricearea">Choose price area:</label>
        <select
          id="pricearea"
          value={pricearea}
          onChange={handlePriceAreaChange}
        >
          <option value="_NO1">NO1</option>
          <option value="_NO2">NO2</option>
          <option value="_NO3">NO3</option>
          <option value="_NO4">NO4</option>
          <option value="_NO5">NO5</option>
        </select>
      </div>
      {todayData.length > 0 ? (
        <LineChart data={todayData} />
      ) : (
        <p>Loading data...</p>
      )}
      {tomorrowData.length > 0 ? (
        <LineChart data={tomorrowData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default Reports;

import React, { useEffect, useState } from "react";
import LineChart from "../components/charts/linecharts";
import axios from "axios";

function Reports() {
  const [myData, setMyData] = useState([]);
  const [pricearea, setPriceArea] = useState("_NO5");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const date_string = `${year}/${month}-${day}`;
    const baseurl = "https://www.hvakosterstrommen.no/api/v1/prices/";

    const apiUrl = baseurl + date_string + pricearea + ".json";

    axios
      .get(apiUrl)
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pricearea]);

  const handlePriceAreaChange = (event) => {
    setPriceArea(event.target.value);
  };

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
      {myData.length > 0 ? <LineChart data={myData} /> : <p>Loading data...</p>}
    </div>
  );
}

export default Reports;

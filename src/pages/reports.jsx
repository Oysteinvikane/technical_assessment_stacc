import React, { useEffect, useState } from "react";
import LineChart from "../components/charts/linecharts";
import axios from "axios";

function Reports() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const date_string = `${year}/${month}-${day}`;
    const baseurl = "https://www.hvakosterstrommen.no/api/v1/prices/";
    const pricearea = "_NO5";

    const apiUrl = baseurl + date_string + pricearea + ".json";

    axios
      .get(apiUrl)
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full p-4">
      {myData.length > 0 && <LineChart data={myData} />}
    </div>
  );
}

export default Reports;

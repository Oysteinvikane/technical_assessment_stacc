import { useState, useEffect } from "react";
import axios from "axios";

function PriceAreaData({ pricearea }) {
  const [todayData, setTodayData] = useState([]);
  const [tomorrowData, setTomorrowData] = useState([]);

  useEffect(() => {
    // Constants for date and API url for todays data.
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const todayDateString = `${year}/${month}-${day}`;

    // Constants for date and API url for tomorrows data.
    const tomorrowDate = new Date(now);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowYear = tomorrowDate.getFullYear();
    const tomorrowMonth = String(tomorrowDate.getMonth() + 1).padStart(2, "0");
    const tomorrowDay = String(tomorrowDate.getDate()).padStart(2, "0");
    const tomorrowDateString = `${tomorrowYear}/${tomorrowMonth}-${tomorrowDay}`;
    const baseurl = "https://www.hvakosterstrommen.no/api/v1/prices/";

    // API urls to pass api data to reports page for the graphs.
    const todayApiUrl = baseurl + todayDateString + pricearea + ".json";
    const tomorrowApiUrl = baseurl + tomorrowDateString + pricearea + ".json";

    axios
      .get(todayApiUrl)
      .then((response) => {
        setTodayData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(tomorrowApiUrl)
      .then((response) => {
        setTomorrowData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pricearea]);

  return { todayData, tomorrowData };
}

export default PriceAreaData;

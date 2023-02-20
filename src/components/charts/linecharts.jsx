import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      new Chart(chartContainer.current, {
        type: "line",
        data: {
          labels: data.map((d) => d.time_start),
          datasets: [
            {
              label: "NOK_per_kWh",
              data: data.map((d) => d.NOK_per_kWh),
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              tension: 0.1,
            },
            {
              label: "EUR_per_kWh",
              data: data.map((d) => d.EUR_per_kWh),
              fill: false,
              borderColor: "rgba(192,75,192,1)",
              tension: 0.1,
            },
          ],
        },
      });
    }
  }, [data]);

  return <canvas className="w-full h-64" ref={chartContainer} />;
};

export default LineChart;

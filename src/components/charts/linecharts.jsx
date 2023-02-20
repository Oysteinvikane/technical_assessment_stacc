import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data, pricearea }) => {
  const chartContainer = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    if (chartContainer && chartContainer.current) {
      chartRef.current = new Chart(chartContainer.current, {
        type: "line",
        data: {
          labels: data.map((d) =>
            new Date(d.time_start).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          ),
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
        options: {
          plugins: {
            title: {
              display: true,
              text: "Electricity prices",
              font: {
                size: 20,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Time",
                font: {
                  size: 16,
                },
              },
            },
            y: {
              title: {
                display: true,
                text: "Price (NOK/kWh or EUR/kWh)",
                font: {
                  size: 16,
                },
              },
            },
          },
        },
      });
    }
  }, [data, pricearea]);

  return <canvas className="w-full h-64" ref={chartContainer} />;
};

export default LineChart;

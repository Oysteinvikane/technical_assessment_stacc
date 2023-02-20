import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data, pricearea, title, isDarkMode }) => {
  const chartContainer = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    if (chartContainer && chartContainer.current) {
      const axisColor = isDarkMode ? "#fff" : "#000";
      const gridColor = isDarkMode ? "#ccc" : "#ddd";

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
              label: "NOK/kWh",
              data: data.map((d) => d.NOK_per_kWh),
              fill: false,
              borderColor: "rgba(75,192,192,1)",
              tension: 0.1,
            },
            {
              label: "EUR/kWh",
              data: data.map((d) => d.EUR_per_kWh),
              fill: false,
              borderColor: "rgba(192,75,192,1)",
              tension: 0.1,
            },
          ],
        },
        options: {
          aspectRatio: 5,
          plugins: {
            title: {
              display: true,
              text: title,
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
              grid: {
                color: gridColor,
              },
              ticks: {
                color: axisColor,
              },
            },
            y: {
              title: {
                display: true,
                text: "NOK/kWh or EUR/kWh",
                font: {
                  size: 16,
                },
              },
              grid: {
                color: gridColor,
              },
              ticks: {
                color: axisColor,
              },
            },
          },
        },
      });
    }
  }, [data, pricearea, title, isDarkMode]);

  return (
    <canvas
      className="w-full"
      style={{ height: "100%", width: "75%" }}
      ref={chartContainer}
    />
  );
};

export default LineChart;

// This linechart was used to put together today and tomorrows data from the API to 1 graph spanning 2 days.
// This was dropped because of the length of the graph.

// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const LineChartDuo = ({ todayData, tomorrowData }) => {
//   const chartContainer = useRef(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }
//     if (chartContainer && chartContainer.current) {
//       chartRef.current = new Chart(chartContainer.current, {
//         type: "line",
//         data: {
//           labels: [...todayData, ...tomorrowData].map((d) =>
//             new Date(d.time_start).toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             })
//           ),
//           datasets: [
//             {
//               label: "NOK_per_kWh - Today",
//               data: todayData.map((d) => d.NOK_per_kWh),
//               fill: false,
//               borderColor: "rgba(75,192,192,1)",
//               tension: 0.1,
//             },
//             {
//               label: "EUR_per_kWh - Today",
//               data: todayData.map((d) => d.EUR_per_kWh),
//               fill: false,
//               borderColor: "rgba(192,75,192,1)",
//               tension: 0.1,
//             },
//             {
//               label: "NOK_per_kWh - Tomorrow",
//               data: tomorrowData.map((d) => d.NOK_per_kWh),
//               fill: false,
//               borderColor: "rgba(75,192,192,0.5)",
//               tension: 0.1,
//             },
//             {
//               label: "EUR_per_kWh - Tomorrow",
//               data: tomorrowData.map((d) => d.EUR_per_kWh),
//               fill: false,
//               borderColor: "rgba(192,75,192,0.5)",
//               tension: 0.1,
//             },
//           ],
//         },
//         options: {
//           plugins: {
//             title: {
//               display: true,
//               text: "Electricity prices",
//               font: {
//                 size: 20,
//               },
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: "Time",
//                 font: {
//                   size: 16,
//                 },
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: "Price (NOK/kWh or EUR/kWh)",
//                 font: {
//                   size: 16,
//                 },
//               },
//             },
//           },
//         },
//       });
//     }
//   }, [todayData, tomorrowData]);

//   return <canvas className="w-full h-64" ref={chartContainer} />;
// };

// export default LineChartDuo;

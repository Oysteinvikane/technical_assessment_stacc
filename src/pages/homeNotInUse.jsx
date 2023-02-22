// This home class is not in use because of the CORS errors when trying to fetch
// data from the API, i have instead created a new home which takes the api data
// from a folder called API.

// import React, { useState, useEffect } from "react";
// import PriceAreaData from "../components/priceareadata";
// import {
//   todayAvgP,
//   tomorrowAvgP,
//   NOKkWh,
//   choosePriceAreaLabel,
//   East,
//   South,
//   North,
//   Mid,
//   West,
// } from "../constants";

// // When you use the same functions / constants like here and in electricityprices
// // the best thing would to take them out of both and make a component for all of this
// // but this Home was last second ¯\_(ツ)_/¯

// function Home() {
//   const [providers, setProviders] = useState([]);

//   useEffect(() => {
//     fetch("https://future-of-fintech-v2023.vercel.app/api/providers")
//       .then((response) => response.json())
//       .then((data) => {
//         setProviders(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const [pricearea, setPriceArea] = useState("_NO5");

//   const handlePriceAreaChange = (event) => {
//     setPriceArea(event.target.value);
//   };

//   const { todayData, tomorrowData } = PriceAreaData({ pricearea });

//   // Calculate today's average price
//   const todayAvgPrice =
//     todayData.reduce((sum, data) => sum + data.NOK_per_kWh, 0) /
//     todayData.length;

//   // Calculate tomorrow's average price
//   const tomorrowAvgPrice =
//     tomorrowData.reduce((sum, data) => sum + data.NOK_per_kWh, 0) /
//     tomorrowData.length;

//   return (
//     <div className="banner flex-grow bg-gray-200">
//       <div className="content">
//         <h1 className="text-3xl font-bold text-gray-800 text-center">
//           Technical Assessment
//         </h1>
//         <div className="mb-4">
//           <label htmlFor="pricearea">{choosePriceAreaLabel} </label>
//           <select
//             id="pricearea"
//             value={pricearea}
//             onChange={handlePriceAreaChange}
//             className={`appearance-none bg-white border border-gray-400 hover:border-gray-500
//              px-2 py-1 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline
//              `}
//           >
//             <option value="_NO1">{East}</option>
//             <option value="_NO2">{South}</option>
//             <option value="_NO3">{Mid}</option>
//             <option value="_NO4">{North}</option>
//             <option value="_NO5">{West}</option>
//           </select>
//         </div>
//         <div className="flex justify-center flex-wrap gap-4">
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
//             <h2 className="text-lg font-medium text-gray-900">{todayAvgP}</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               {todayAvgPrice.toFixed(2)}
//               {NOKkWh}
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
//             <h2 className="text-lg font-medium text-gray-900">
//               {tomorrowAvgP}
//             </h2>
//             <p className="mt-1 text-sm text-gray-500">
//               {tomorrowAvgPrice.toFixed(2)}
//               {NOKkWh}
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
//             <h2 className="text-lg font-medium text-gray-900">
//               {providers.length > 0 && providers[0].name}
//             </h2>
//             <p className="mt-1 text-sm text-gray-500">
//               {providers.length > 0 && providers[0].pricingModel}
//               {NOKkWh}
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
//             <h2 className="text-lg font-medium text-gray-900">
//               {providers.length > 0 && providers[1].name}
//             </h2>
//             <p className="mt-1 text-sm text-gray-500">
//               {providers.length > 0 && providers[1].pricingModel}
//               {NOKkWh}
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
//             <h2 className="text-lg font-medium text-gray-900">
//               {providers.length > 1 && providers[2].name}
//             </h2>
//             <p className="mt-1 text-sm text-gray-500">
//               {providers.length > 1 && providers[2].pricingModel}
//               {NOKkWh}
//             </p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg flex-grow mt-12 w-64 h-28">
//             <h2 className="text-lg font-medium text-gray-900">
//               {providers.length > 2 && providers[3].name}
//             </h2>
//             <p className="mt-1text-sm text-gray-500">
//               {providers.length > 2 && providers[3].pricingModel}
//               {NOKkWh}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

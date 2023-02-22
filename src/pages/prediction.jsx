import React, { useState } from "react";

function Prediction() {
  const [inputs, setInputs] = useState({
    Global_active_power: "",
    Global_reactive_power: "",
    Voltage: "",
    Global_intensity: "",
    Sub_metering_1: "",
    Sub_metering_2: "",
    Sub_metering_3: "",
  });

  const [prediction, setPrediction] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/predict", {
      // const response = await fetch(
      //   "https://flask-api-oysteinvikane.vercel.app/predict",
      //   {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: Object.values(inputs).map(parseFloat) }),
    });
    const result = await response.json();
    const prediction = result.prediction;
    setPrediction(prediction);
    setResults([...results, prediction]);
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    setPrediction("");
  };

  return (
    <div className="container grid grid-cols-2 gap-10">
      <div className="left mr-5 mt-10">
        <div className="prediction-container">
          <h1 style={{ fontWeight: "bold" }}>Predict kW Usage Per Minute</h1>
          <form onSubmit={handleSubmit} className="prediction-form">
            <div className="form-row">
              <div className="input-container">
                <label htmlFor="Global_active_power">
                  Global_active_power:
                </label>
                <input
                  type="text"
                  name="Global_active_power"
                  value={inputs.Global_active_power}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Global_reactive_power">
                  Global_reactive_power:
                </label>
                <input
                  type="text"
                  name="Global_reactive_power"
                  value={inputs.Global_reactive_power}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Voltage">Voltage:</label>
                <input
                  type="text"
                  name="Voltage"
                  value={inputs.Voltage}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Global_intensity">Global_intensity:</label>
                <input
                  type="text"
                  name="Global_intensity"
                  value={inputs.Global_intensity}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-container">
                <label htmlFor="Sub_metering_1">Sub_metering_1:</label>
                <input
                  type="text"
                  name="Sub_metering_1"
                  value={inputs.Sub_metering_1}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Sub_metering_2">Sub_metering_2:</label>
                <input
                  type="text"
                  name="Sub_metering_2"
                  value={inputs.Sub_metering_2}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="Sub_metering_3">Sub_metering_3:</label>
                <input
                  type="text"
                  name="Sub_metering_3"
                  value={inputs.Sub_metering_3}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button type="submit">Predict</button>
          </form>
          {prediction && (
            <div className="prediction-result">
              <p>Predicted kW usage per minute: {prediction}</p>
            </div>
          )}
        </div>
      </div>
      <div className="right">
        <h1 className="text-center mt-10 mb-5">
          The first 3 predictions will be shown here:
        </h1>
        <div className="flex justify-center space-x-4">
          <div className="bg-white p-4 rounded-lg shadow-lg w-64 h-64">
            <h2 className="text-lg font-medium text-gray-900">Prediction 1</h2>
            {results.length >= 1 ? (
              <p className="mt-1 text-sm text-gray-500">{`Predicted kW usage per minute: ${results[0]}`}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-500">No predictions yet</p>
            )}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-64 h-64">
            <h2 className="text-lg font-medium text-gray-900">Prediction 2</h2>
            {results.length >= 2 ? (
              <p className="mt-1 text-sm text-gray-500">{`Predicted kW usage per minute: ${results[1]}`}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-500">No predictions yet</p>
            )}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-64 h-64">
            <h2 className="text-lg font-medium text-gray-900">Prediction 3</h2>
            {results.length >= 3 ? (
              <p className="mt-1 text-sm text-gray-500">{`Predicted kW usage per minute: ${results[2]}`}</p>
            ) : (
              <p className="mt-1 text-sm text-gray-500">No predictions yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;

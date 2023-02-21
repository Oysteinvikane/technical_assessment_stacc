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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: Object.values(inputs).map(parseFloat) }),
    });
    const prediction = await response.json();
    console.log(prediction);
    // Update the state with the prediction value
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="prediction-container">
      <h1>Predict kW Usage Per Minute</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Global_active_power:
          <input
            type="text"
            name="Global_active_power"
            value={inputs.Global_active_power}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Global_reactive_power:
          <input
            type="text"
            name="Global_reactive_power"
            value={inputs.Global_reactive_power}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Voltage:
          <input
            type="text"
            name="Voltage"
            value={inputs.Voltage}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Global_intensity:
          <input
            type="text"
            name="Global_intensity"
            value={inputs.Global_intensity}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Sub_metering_1:
          <input
            type="text"
            name="Sub_metering_1"
            value={inputs.Sub_metering_1}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Sub_metering_2:
          <input
            type="text"
            name="Sub_metering_2"
            value={inputs.Sub_metering_2}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Sub_metering_3:
          <input
            type="text"
            name="Sub_metering_3"
            value={inputs.Sub_metering_3}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Predict</button>
      </form>
    </div>
  );
}

export default Prediction;

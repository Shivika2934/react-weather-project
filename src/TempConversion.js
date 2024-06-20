import React, { useState } from "react";
export default function TempConversion(props) {
  const [unit, setUnit] = useState("celcius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <span>
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temp">{Math.round((props.celcius * 9) / 5 + 32)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}

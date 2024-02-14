import React from "react";
import "./Display.css";
import bmi from "../assets/bmichart.jpg";
const Display = ({ result }) => {
  return (
    <div className="display">
      <span>Your BMI is : {result}</span>
      <img src={bmi} alt="bmi chart" />
    </div>
  );
};

export default Display;

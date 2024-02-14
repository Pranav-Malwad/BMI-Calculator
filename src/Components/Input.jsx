import React from "react";
import "./Input.css";
const Input = ({ handleHeight, handleWeight, handleSubmit }) => {
  return (
    <div className="input-holder">
      <input
        type="number"
        maxLength={3}
        placeholder="Enter weight in Kg"
        className="w-input"
        onChange={handleWeight}
      />
      <input
        type="number"
        placeholder="Enter height in Cm"
        className="h-input"
        maxLength={3}
        onChange={handleHeight}
      />

      <div className="btn-container">
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Input;

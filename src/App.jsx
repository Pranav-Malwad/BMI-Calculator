import "./App.css";
import Display from "./Components/Display";
import Input from "./Components/Input";
import Heading from "./Components/Heading";
import { useState } from "react";

function App() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [result, setResult] = useState(0);
  const handleHeight = (e) => {
    let given_height = e.target.value;
    let required_height = given_height / 100;
    let final_value = required_height * required_height;
    setHeight(final_value.toFixed(4));
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = () => {
    let bmi_ratio = weight / height;
    setResult(bmi_ratio.toFixed(3));
  };

  return (
    <div className="container">
      <Heading></Heading>
      <Input
        handleHeight={handleHeight}
        handleWeight={handleWeight}
        handleSubmit={handleSubmit}
      ></Input>
      <Display result={result}></Display>
    </div>
  );
}

export default App;

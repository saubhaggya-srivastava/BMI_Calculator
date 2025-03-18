import { useState } from "react";
import "./App.css";
function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters

    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
      setBmi(bmiValue);
      determineCategory(bmiValue);
    } else {
      setBmi("Invalid Input");
      setCategory("");
    }
  };

  const determineCategory = (bmi) => {
    if (bmi < 18.5) setCategory("Underweight");
    else if (bmi >= 18.5 && bmi < 24.9) setCategory("Normal Weight");
    else if (bmi >= 25 && bmi < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div>
      <h1>BMI CALCULATOR</h1>

      <form onSubmit={calculateBMI}>
  <div className="input-group">
    <label>Weight (kg):</label>
    <input
      type="number"
      value={weight}
      onChange={(e) => setWeight(e.target.value)}
    />
  </div>

  <div className="input-group">
    <label>Height (cm):</label>
    <input
      type="number"
      value={height}
      onChange={(e) => setHeight(e.target.value)}
    />
  </div>

  <button type="submit">Calculate BMI</button>
</form>

      {bmi !== null && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;

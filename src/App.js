import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={disabled ? {backgroundColor: 'gray'}:{backgroundColor: buttonColor }}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input id="disable-button-checkbox" type="checkbox" onChange={() => setDisabled(!disabled)} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

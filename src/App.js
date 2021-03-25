import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={disabled ? {backgroundColor: 'gray'}:{backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input id="disable-button-checkbox" type="checkbox" onChange={() => setDisabled(!disabled)} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

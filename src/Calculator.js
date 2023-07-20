import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    // check if the current prevDisplay is '0', and if so, we set the display to the value as a string. Otherwise, concatenate the value with the current prevDisplay.
    setDisplay((prevDisplay) =>
      prevDisplay === "0" ? String(value) : prevDisplay + value
    );
  };
  const handleClearClick = () => {
    setDisplay("0");
    console.log("Display has been cleared");
  };
  const handleCalculateClick = () => {
    try {
      setDisplay(eval(display).toString());
      // JavaScript eval() function to evaluate the expression stored in the display state and after this we are converting to a string
      console.log("Result has been displayed");
    } catch (error) {
      setDisplay("Error");
      console.log("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleClearClick()}>C</button>
        <button onClick={() => handleCalculateClick()}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
      </div>
    </div>
  );
};

export default Calculator;

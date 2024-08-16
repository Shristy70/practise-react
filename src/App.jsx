import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const updateNumber = (newNum) => {
    if (newNum >= 0 && newNum <= 150) {
      const newHistory = history.slice(0, currentStep + 1);
      setNum(newNum);
      setHistory([...newHistory, newNum]);
      setCurrentStep(newHistory.length);
    }
  };

  const increment = () => updateNumber(num + 1);
  const decrement = () => updateNumber(num - 1);

  const undo = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setNum(history[currentStep - 1]);
    }
  };

  const redo = () => {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setNum(history[currentStep + 1]);
    }
  };

  const progressBarStyle = {
    width: `${(num / 150) * 100}%`,
    transition: "width 0.5s ease-in-out", // Adding animation
  };

  return (
    <>
      <h1 id="h1">MY First Task :-</h1>
      <div className="App">
        <h1>Number:  {num}</h1>
        <div className="buttons">
          <button onClick={decrement}>-1</button>
          <button onClick={increment}>+1</button>
        </div>
        <div className="undo-redo">
          <button onClick={undo} disabled={currentStep === 0}>
            Undo
          </button>
          <button onClick={redo} disabled={currentStep === history.length - 1}>
            Redo
          </button>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={progressBarStyle}></div>
        </div>
      </div>
    </>
  );
};

export default App;

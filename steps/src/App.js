import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  /*function disappear() {
    setIsOpen(false);
  }*/

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    // if (step > 1) setStep(step - 1); updating state from initial value (state)
    if (step > 1) setStep((prevStep) => prevStep - 1); // updating state from the current state
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1); updating state from initial value (state) // updating state from initial value (initial state)
    if (step < 3) setStep((nextStep) => nextStep + 1); // updating state from the current state
    if (step < 3) setStep((nextStep) => nextStep + 1); // // updating state from the current state
  }

  return (
    <div>
      <button
        className="close"
        onClick={
          () => setIsOpen((is) => !is)
          //setIsOpen(!isOpen)
        }
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

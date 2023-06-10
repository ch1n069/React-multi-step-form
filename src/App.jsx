import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStepForm from "./components/SeconStepForm";
import ThirdStepForm from "./components/ThirdStepForm";
import { Stepper, StepLabel, Step } from "@mui/material";
function App() {
  const [count, setCount] = useState(0);

  // function to conditionally render the steps form
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStepForm />;
      case 3:
        return <ThirdStepForm />;

      default:
        break;
    }
  };
  return (
    <>
      <div className="App" style={{}}>
        <Stepper
          style={{ width: "18%" }}
          activeStep="1"
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {showStep(1)}
      </div>
    </>
  );
}

export default App;

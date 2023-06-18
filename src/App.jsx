import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStepForm from "./components/SeconStepForm";
import ThirdStepForm from "./components/ThirdStepForm";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./context/StepContext";
function App() {
  const [count, setCount] = useState(0);
  const { currentStep, finalData } = useContext(multiStepContext);
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
      <div className="form" style={{}}>
        <div className="stepper">
          <Stepper
            style={{ width: "18%" }}
            activeStep={currentStep - 1}
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
        </div>

        {showStep(currentStep)}
      </div>
    </>
  );
}

export default App;

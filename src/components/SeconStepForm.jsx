import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../context/StepContext";
const SecondStepForm = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const submitData = () => {
    setStep(3);
  };
  const backButton = () => {
    setStep(1);
  };
  return (
    <div style={{}}>
      <div>
        <TextField
          margin="normal"
          label="Email"
          variant="outlined"
          color="secondary"
        />
      </div>

      <div>
        <TextField
          margin="normal"
          label="Country"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="District"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={backButton}>
          Back
        </Button>
        <span> </span>
        <Button variant="contained" color="secondary" onClick={submitData}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStepForm;

import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../context/StepContext";
const ThirdStepForm = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const backButton = () => {
    setStep(2);
  };
  return (
    <div style={{}}>
      <div>
        <TextField
          margin="normal"
          label="County"
          variant="outlined"
          color="secondary"
        />
      </div>

      <div>
        <TextField
          margin="normal"
          label="Landmark"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="Postal Code"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={backButton}>
          Back
        </Button>
        <span> </span>
        <Button variant="contained" color="secondary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default ThirdStepForm;

import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../context/StepContext";
const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const submitData = () => {
    setStep(2);
  };
  return (
    <div style={{}}>
      <div>
        <TextField
          margin="normal"
          label="First Name"
          variant="outlined"
          color="secondary"
          value={userData["firstName"]}
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
        />
      </div>

      <div>
        <TextField
          margin="normal"
          label="Second Name"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          margin="normal"
          label="Contact info"
          variant="outlined"
          color="secondary"
        />
      </div>
      <Button variant="contained" color="secondary" onClick={submitData}>
        Next
      </Button>
    </div>
  );
};

export default FirstStep;

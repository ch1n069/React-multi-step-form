import React from "react";
import { Button, TextField } from "@mui/material";
const SecondStepForm = () => {
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
      <Button variant="contained" color="secondary">
        Next
      </Button>
    </div>
  );
};

export default SecondStepForm;

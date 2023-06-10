import React from "react";
import { Button, TextField } from "@mui/material";
const SecondStepForm = () => {
  return (
    <div style={{}}>
      <div>
        <TextField
          margin="normal"
          label="First Name"
          variant="outlined"
          color="secondary"
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
      <Button variant="contained" color="secondary">
        Next
      </Button>
    </div>
  );
};

export default SecondStepForm;

import React from "react";
import { Button, TextField } from "@mui/material";
const ThirdStepForm = () => {
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
      <Button variant="contained" color="secondary">
        Next
      </Button>
    </div>
  );
};

export default ThirdStepForm;

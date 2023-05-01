import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepButton from "@mui/material/StepButton";

export default function SignUpStepper({ activeStep, steps, handleStep }) {
  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} onClick={handleStep(index)}>
              <StepButton color="inherit">
                <StepLabel {...labelProps}>{label}</StepLabel>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

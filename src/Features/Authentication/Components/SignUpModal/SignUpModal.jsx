import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import SendIcon from "@mui/icons-material/Send";
import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";
import SignUpStepper from "../SignUpStepper/SignUpStepper";
import SignUpModalScreen1 from "../SignUpModalScreen1/SignUpModalScreen1";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const steps = ["Personal Information", "Pin number"];

export default function SignUpModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % 2);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Sign up</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: "3rem",
              color: "#2196f3",
              textAlign: "center",
            }}
          >
            Sign up
          </Typography>
          <SignUpStepper
            steps={steps}
            activeStep={activeStep}
            handleStep={handleStep}
          />
        </BootstrapDialogTitle>
        <DialogContent>
          {activeStep === 0 && <SignUpModalScreen1 />}
          {activeStep === 1 && <h1>Step 2</h1>}
          {activeStep === 2 && <h1>Step 3</h1>}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleNext}
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ width: "50%", margin: "0 auto 10px auto" }}
          >
            Continue
          </Button>
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box> */}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
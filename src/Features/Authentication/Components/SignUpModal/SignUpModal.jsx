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
import SignUpModalScreen2 from "../SignUpModalScreen2/SignUpModalScreen2";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { CircularProgress } from "@mui/material";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { green } from "@mui/material/colors";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const SignUpFinalScreen = () => {
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();

  React.useEffect(() => {
    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setQuery("success");
    }, 2000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {query === "success" ? (
        <CheckCircleOutlineTwoToneIcon
          sx={{ color: green[500], fontSize: 100 }}
        />
      ) : (
        <Fade
          in={query === "progress"}
          style={{
            transitionDelay: query === "progress" ? "800ms" : "0ms",
          }}
          unmountOnExit
        >
          <CircularProgress sx={{ fontSize: 200 }} />
        </Fade>
      )}
    </Box>
  );
};

const steps = ["Personal Information", "Pin number"];

export default function SignUpModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
          {activeStep === 1 && <SignUpModalScreen2 />}
          {activeStep === 2 && <SignUpFinalScreen />}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleNext}
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ width: "50%", margin: "0 auto 10px auto" }}
          >
            {activeStep === steps.length - 1 ? "Sign up" : "Continue"}
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

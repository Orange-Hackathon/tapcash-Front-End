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
import { StyledSubmitButton } from "../UI/FormControls.styled";
import {
  BootstrapDialog,
  DotIcon,
  DotPagination,
  DialogTitle,
} from "../UI/ModalControls.styled";

const SignUpFinalScreen = () => {
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
  const [page, setPage] = React.useState(1);
  const handleChange = (event) => {
    setPage(page + 1);
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
        width="548px"
        height="682px"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Box>
            <DotPagination
              count={2}
              page={page}
              onChange={handleChange}
              hidePrevButton
              hideNextButton
              renderItem={(item) => <DotIcon item={item} />}
            />
          </Box>
          <DialogTitle>Sign up</DialogTitle>
          {/* <SignUpStepper
            steps={steps}
            activeStep={activeStep}
            handleStep={handleStep}
          /> */}
        </BootstrapDialogTitle>
        <DialogContent>
          {page === 1 && <SignUpModalScreen1 />}
          {page === 2 && <SignUpModalScreen2 />}
          {page === 3 && <SignUpFinalScreen />}
        </DialogContent>

        <DialogActions>
          <StyledSubmitButton
            autoFocus
            onClick={handleChange}
            variant="contained"
          >
            {activeStep === steps.length - 1 ? "Sign up" : "Next"}
          </StyledSubmitButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

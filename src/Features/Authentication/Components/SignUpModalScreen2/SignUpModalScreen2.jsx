import Box from "@mui/material/Box";
import { useEffect, useRef, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { DialogTitle } from "../UI/ModalControls.styled";
import { Alert, useTheme } from "@mui/material";
import { StyledSubmitButton } from "../UI/FormControls.styled";
import { useNavigate } from "react-router-dom";

const SignUpModalScreen2 = ({ handlePageChange }) => {
  const navigate = useNavigate();
  const [pinError, setPinError] = useState(null);
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [step, setStep] = useState(1);
  const theme = useTheme();
  const ref = useRef("");
  const handlePinChange = (e) => {
    if (ref.current.length === 4) return;
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      if (step === 1) setPin((prev) => prev + e.key);
      else setConfirmPin((prev) => prev + e.key);
      ref.current = ref.current + String(e.keyCode - 48);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlePinChange);
    return () => {
      document.removeEventListener("keydown", handlePinChange);
    };
  }, []);

  const handleStepChange = () => {
    setStep((prev) => prev + 1);
    setConfirmPin(pin);
    setPin("");
    ref.current = "";
    if (step === 2) {
      if (pin === confirmPin) navigate("/dashboard");
      else {
        setStep(1);
        setPinError("Pin does not match");
      }
    }
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
          width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
          width: "600px",
        },
        width: "600px",
        height: "400px",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <DialogTitle>Create PIN</DialogTitle>
        <Box
          sx={{
            marginTop: "24px",
          }}
        >
          {pinError && <Alert severity="error">{pinError}</Alert>}
        </Box>
        <Box
          sx={{
            marginTop: "40px",
            paddingBottom: "18px",
            display: "flex",
            justifyContent: "space-between",
            width: "194px",
            borderBottom: `1px solid ${theme.palette.gray.gray3}`,
          }}
        >
          <FiberManualRecordIcon
            sx={{
              fontSize: "30px",
              padding: "0",
              color:
                pin.length >= 1
                  ? theme.typography.body1.color
                  : theme.typography.disabled.color,
            }}
          />
          <FiberManualRecordIcon
            sx={{
              fontSize: "30px",
              padding: "0",
              color:
                pin.length >= 2
                  ? theme.typography.body1.color
                  : theme.typography.disabled.color,
            }}
          />
          <FiberManualRecordIcon
            sx={{
              fontSize: "30px",
              padding: "0",
              color:
                pin.length >= 3
                  ? theme.typography.body1.color
                  : theme.typography.disabled.color,
            }}
          />
          <FiberManualRecordIcon
            sx={{
              fontSize: "30px",
              padding: "0",
              color:
                pin.length >= 4
                  ? theme.typography.body1.color
                  : theme.typography.disabled.color,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "62px",
        }}
      >
        <StyledSubmitButton
          autoFocus
          variant="contained"
          disabled={!pin || pin.length < 4}
          onClick={handleStepChange}
        >
          {step === 1 ? "Confirm" : "Sign Up"}
        </StyledSubmitButton>
      </Box>
    </Box>
  );
};

export default SignUpModalScreen2;

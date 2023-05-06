import { Box, Button, useTheme } from "@mui/material";
import { StyledSubmitButton, StyledTextField } from "../UI/FormControls.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";
import { DialogTitle } from "../UI/ModalControls.styled";

const ForgetPinScreen2 = ({ handlePageBack,handlePageChange }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [pinError, setPinError] = useState(null);
  const [pin, setPin] = useState("");
  const [confirmPinError, setConfirmPinError] = useState(null);
  const [confirmPin, setConfirmPin] = useState("");

  const handlePinChange = (e) => {
    if (e.target.value.length > 4) return;
    if (e.target.value.length < 4)
      setPinError("Password must be 4 characters long");
    else if (!/^\d+$/.test(e.target.value))
      setPinError("Password must contain numbers only");
    else setPinError(null);
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    if (e.target.value.length > 4) return;
    if (e.target.value.length < 4)
      setConfirmPinError("Password must be 4 characters long");
    else if (!/^\d+$/.test(e.target.value))
      setConfirmPinError("Password must contain numbers only");
    else if (
      e.target.value !== pin &&
      e.target.value.length === 4 &&
      pin.length === 4
    ) {
      setConfirmPinError("PINs do not match");
    } else setConfirmPinError(null);

    setConfirmPin(e.target.value);
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        [theme.breakpoints.up("xs")]: {
          width: "300px",
        },
        [theme.breakpoints.up("sm")]: {
          width: "550px",
        },
        [theme.breakpoints.up("md")]: {
          width: "600px",
        },
        height: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        <DialogTitle>Create a new PIN</DialogTitle>
      </BootstrapDialogTitle>
      <Box
        className="email"
        sx={{
          [theme.breakpoints.up("xs")]: {
            width: "80%",
          },
          [theme.breakpoints.up("sm")]: {
            width: "400px",
          },
        }}
      >
        <StyledTextField
          error={pinError}
          isError={pinError}
          label="PIN"
          helperText={pinError && pinError}
          variant="filled"
          onChange={handlePinChange}
          value={pin}
          type="password"
        />
        <StyledTextField
          error={confirmPinError}
          isError={confirmPinError}
          label="PIN"
          helperText={confirmPinError && confirmPinError}
          variant="filled"
          onChange={handleConfirmPinChange}
          value={confirmPin}
          type="password"
        />
      </Box>
      <Box
        className="email"
        sx={{
          [theme.breakpoints.up("xs")]: {
            width: "80%",
          },
          [theme.breakpoints.up("sm")]: {
            width: "400px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledSubmitButton
          onClick={handlePageChange}
          autoFocus
          variant="contained"
        >
          Reset PIN
        </StyledSubmitButton>
        <Button
          onClick={handlePageBack}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "36px",
            },
          }}
        >
          <ArrowBackIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ForgetPinScreen2;

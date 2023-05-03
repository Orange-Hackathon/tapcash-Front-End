import { Button, styled } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    top: "29%",
  },
  "& .MuiInputBase-root": {
    borderRadius: "16px",
    height: "64px",
    backgroundColor: theme.palette.background.body1,
    margin: "auto",
    marginTop: "20px",
    "&:hover:before": {
      border: "0px",
    },
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
}));
const StyledLoginButton = styled(Button)(({ theme }) => ({
  marginTop: "64px !important",
  [theme.breakpoints.up("xs")]: {
    width: "80%",
    margin: "auto",
    borderRadius: "16px",
    height: "64px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "400px",
    height: "64px",
    margin: "auto",
    borderRadius: "16px",
  },
}));
const LoginFormContainer = styled(Box)(({ theme }) => ({
  "& .MuiTextField-root": { m: 1, width: "80%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
}));

const LoginForm = ({ handleChange }) => {
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [pinError, setPinError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");

  const handlePhoneNumberChange = (e) => {
    if (e.target.value.length < 3)
      setPhoneNumberError("Password must be at least 3 characters long");
    else if (!/^(01)[0125][0-9]{8}$/.test(e.target.value))
      setPhoneNumberError("Password must be a valid phone number");
    else setPhoneNumberError(null);
    setPhoneNumber(e.target.value);
  };
  const handlePinChange = (e) => {
    if (e.target.value.length > 4) return;
    if (e.target.value.length < 4)
      setPinError("Password must be 4 characters long");
    else if (!/^\d+$/.test(e.target.value))
      setPinError("Password must contain numbers only");
    else setPinError(null);
    setPin(e.target.value);
  };

  return (
    <LoginFormContainer component="form" noValidate autoComplete="off">
      <StyledTextField
        error={phoneNumberError}
        label="Phone Number"
        defaultValue=""
        helperText={phoneNumberError && phoneNumberError}
        variant="outlined"
        onChange={handlePhoneNumberChange}
        value={phoneNumber}
      />
      <StyledTextField
        error={pinError}
        label="PIN"
        defaultValue=""
        helperText={pinError && pinError}
        variant="outlined"
        onChange={handlePinChange}
        value={pin}
      />
      <StyledLoginButton
        autoFocus
        onClick={handleChange}
        variant="contained"
        disabled={phoneNumberError || pinError || !phoneNumber || !pin}
      >
        Login
      </StyledLoginButton>
    </LoginFormContainer>
  );
};

export default LoginForm;

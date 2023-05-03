import { Button, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const StyledTextField = styled(TextField)(({ theme, isError }) => ({
  "& label": {
    top: "29%",
    color: !isError
      ? `${theme.typography.muted.color} !important`
      : theme.palette.text.danger,
  },
  "& .MuiInputBase-root": {
    border: "0px",
    borderRadius: "16px",
    height: "64px",
    backgroundColor: `${theme.palette.background.muted} !important`,
    margin: "auto",
    marginTop: "20px",
    "&:hover:before": {
      border: "0px",
    },
    "&:before": {
      border: "0px",
    },
    "&:hover:after": {
      border: "0px",
    },
    "&:after": {
      border: "0px",
    },
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  "&.MuiFormControl-root ": {
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
  },
}));
const StyledLoginButton = styled(Button)(({ theme }) => ({
  marginTop: "64px !important",
  [theme.breakpoints.up("xs")]: {
    width: "100%",
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
}));
const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: "-4px",
  [theme.breakpoints.up("xs")]: {
    width: "80%",
  },
}));

const StyledForgotPin = styled(Typography)(({ theme }) => ({
  marginTop: "8px",
  marginLeft: "auto",
  width: "fit-content",
  display: "block",
  "&:hover": {
    cursor: "pointer",
  },
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
      <StyledBox>
        <StyledTextField
          error={phoneNumberError}
          isError={phoneNumberError}
          label="Phone Number"
          helperText={phoneNumberError && phoneNumberError}
          variant="filled"
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <StyledTextField
          error={pinError}
          isError={pinError}
          label="PIN"
          helperText={pinError && pinError}
          variant="filled"
          onChange={handlePinChange}
          value={pin}
        />
        <StyledForgotPin variant="muted" component="a">
          Forgot PIN?
        </StyledForgotPin>
        <StyledLoginButton
          autoFocus
          onClick={handleChange}
          variant="contained"
          disabled={phoneNumberError || pinError || !phoneNumber || !pin}
        >
          Login
        </StyledLoginButton>
      </StyledBox>
    </LoginFormContainer>
  );
};

export default LoginForm;

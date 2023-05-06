import { Box, Typography, useTheme } from "@mui/material";
import { StyledSubmitButton, StyledTextField } from "../UI/FormControls.styled";
import { useState } from "react";

import lock from "../../Assets/lock.svg";
const ForgetPinScreen1 = ({ handlePageChange }) => {
  const [emailError, setEmailError] = useState(null);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))
      setEmailError("Email must be a valid email address");
    else setEmailError(null);
    setEmail(e.target.value);
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
        height: "520px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "35px",
          display: "block",
        }}
      >
        <img src={lock} alt="lock" />
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "32px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Forget PIN?
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: theme.palette.gray.gray3,
        }}
      >
        We will send you reset instructions.
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: theme.palette.gray.gray3,
        }}
      >
        Enter your email.
      </Typography>
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
          error={emailError}
          isError={emailError}
          label="email"
          defaultValue=""
          helperText={emailError && emailError}
          variant="filled"
          onChange={handleEmailChange}
        />
        <StyledSubmitButton
          autoFocus
          variant="contained"
          disabled={emailError || !email}
          onClick={() => handlePageChange()}
        >
          Send instructions
        </StyledSubmitButton>
      </Box>
    </Box>
  );
};

export default ForgetPinScreen1;

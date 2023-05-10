import { Box, Typography, useTheme } from "@mui/material";
import { StyledSubmitButton } from "../UI/FormControls.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import check from "../../Assets/check.svg";
const ForgetPinScreen3 = ({ handleClose }) => {
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
        height: "416px",
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
        <img src={check} alt="lock" />
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
        PIN reset
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
        You PIN has been reset successfully
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
        Tap below to Login.
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
        <StyledSubmitButton
          startIcon={<ArrowBackIcon />}
          autoFocus
          variant="contained"
          onClick={() => handleClose()}
        >
          Login
        </StyledSubmitButton>
      </Box>
    </Box>
  );
};

export default ForgetPinScreen3;

import TextField from "@mui/material/TextField";
import { Button, Typography, styled } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledTextField = styled(TextField)(({ theme, isError }) => ({
  "& label": {
    top: "29%",
    color: !isError
      ? `${theme.typography.muted.color} !important`
      : theme.palette.text.danger,
    left: "16px",
  },
  "& .MuiInputBase-root": {
    border: "0px",
    borderRadius: "16px",
    height: "64px !important",
    backgroundColor: `${theme.palette.background.muted} !important`,
    margin: "auto",
    marginTop: "20px",
    "&:hover:before": {
      border: "0px !important",
    },
    "&:before": {
      border: "0px !important",
    },
    "&:hover:after": {
      border: "0px !important",
    },
    "&:after": {
      border: "0px !important",
    },
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  "&.MuiFormControl-root ": {
    marginLeft: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
  },
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  marginTop: "34px !important",
  marginBottom: "5px !important",
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

export const FormContainer = styled(Box)(({ theme }) => ({
  "& .MuiTextField- root": { m: 1, width: "80%" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: "-4px",
  [theme.breakpoints.up("xs")]: {
    width: "80%",
  },
}));

export const StyledSubText = styled(Typography)(({ theme }) => ({
  marginTop: "8px",
  float: "right",
  display: "block",
  fontSize: "12px",
  "&:hover": {
    cursor: "pointer",
  },
}));

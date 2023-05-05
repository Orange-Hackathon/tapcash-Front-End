import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { DialogTitle } from "../UI/ModalControls.styled";
import { useTheme } from "@mui/material";

const SignUpModalScreen2 = () => {
  const [pinError, setPinError] = useState(null);
  const [pin, setPin] = useState("");
  const theme = useTheme();
  const handlePinChange = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      if (pin.length !== 4) setPinError("Pin must be 4 characters long");
      else if (!/^(01)[0125][0-9]{8}$/.test(e.target.value))
        setPinError("Pin must be a valid number");
      else setPinError(null);
      setPin((prev) => prev + e.key);
    }
  };
  console.log(pin, pin.length);

  useEffect(() => {
    document.addEventListener("keydown", handlePinChange);
    return () => {
      document.removeEventListener("keydown", handlePinChange);
    };
  }, []);

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
        height: "339px",
      }}
      noValidate
      autoComplete="off"
    >
      <DialogTitle>Create PIN</DialogTitle>

      <Box
        sx={{
          marginTop: "83px",
          paddingBottom: "18px",
          display: "flex",
          justifyContent: "space-between",
          width: "194px",
          borderBottom: "1px solid #2196f3",
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
  );
};

export default SignUpModalScreen2;

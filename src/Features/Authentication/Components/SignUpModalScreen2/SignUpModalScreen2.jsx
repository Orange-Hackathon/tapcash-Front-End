import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const SignUpModalScreen2 = () => {
  const [pinError, setPinError] = useState(null);
  const [pin, setPin] = useState("");

  const handlePinChange = (e) => {
    if (e.target.value.length < 3)
      setPinError("Pin must be at least 3 characters long");
    else if (!/^(01)[0125][0-9]{8}$/.test(e.target.value))
      setPinError("Pin must be a valid number");
    else setPinError(null);
    setPin(e.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: "2.5rem",
          color: "#2196f3",
          textAlign: "center",
        }}
      >
        Create PIN
      </Typography>
      <TextField
        error={pinError}
        label="PIN"
        defaultValue=""
        helperText={pinError && pinError}
        variant="outlined"
        onChange={handlePinChange}
      />
    </Box>
  );
};

export default SignUpModalScreen2;

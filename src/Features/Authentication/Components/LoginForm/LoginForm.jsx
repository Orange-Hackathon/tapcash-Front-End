import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const LoginForm = () => {
  const [userNameError, setUserNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    if (e.target.value.length < 3)
      setUserNameError("Username must be at least 3 characters long");
    else if (/[^\w\s]/gi.test(e.target.value))
      setUserNameError("Username must not contain special characters");
    else setUserNameError(null);
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 3)
      setPasswordError("Password must be at least 3 characters long");
    else if (!/[^\w\s]/gi.test(e.target.value))
      setPasswordError("Password must contain special characters");
    else setPasswordError(null);
    setPassword(e.target.value);
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
      <TextField
        error={userNameError}
        label="username"
        defaultValue=""
        helperText={userNameError && userNameError}
        variant="filled"
        onChange={handleUserNameChange}
      />
      <TextField
        error={passwordError}
        label="password"
        defaultValue=""
        helperText={passwordError && passwordError}
        variant="filled"
        onChange={handlePasswordChange}
      />
    </Box>
  );
};

export default LoginForm;

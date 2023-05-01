import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const SignUpModalScreen1 = () => {
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    if (e.target.value.length < 3)
      setFirstNameError("Username must be at least 3 characters long");
    else if (/[^\w\s]/gi.test(e.target.value))
      setFirstNameError("Username must not contain special characters");
    else setFirstNameError(null);
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    if (e.target.value.length < 3)
      setLastNameError("Username must be at least 3 characters long");
    else if (/[^\w\s]/gi.test(e.target.value))
      setLastNameError("Username must not contain special characters");
    else setLastNameError(null);
    setLastName(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    if (e.target.value.length < 3)
      setPhoneNumberError("Password must be at least 3 characters long");
    else if (!/^(01)[0125][0-9]{8}$/.test(e.target.value))
      setPhoneNumberError("Password must contain special characters");
    else setPhoneNumberError(null);
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    if (e.target.value.length < 3)
      setEmailError("Password must be at least 3 characters long");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value))
      setEmailError("Password must contain special characters");
    else setEmailError(null);
    setEmail(e.target.value);
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
        error={firstNameError}
        label="First Name"
        defaultValue=""
        helperText={firstNameError && firstNameError}
        variant="outlined"
        onChange={handleFirstNameChange}
      />
      <TextField
        error={lastNameError}
        label="Last Name"
        defaultValue=""
        helperText={lastNameError && lastNameError}
        variant="outlined"
        onChange={handleLastNameChange}
      />
      <TextField
        error={phoneNumberError}
        label="Phone number"
        defaultValue=""
        helperText={phoneNumberError && phoneNumberError}
        variant="outlined"
        onChange={handlePhoneNumberChange}
      />
      <TextField
        error={emailError}
        label="email"
        defaultValue=""
        helperText={emailError && emailError}
        variant="outlined"
        onChange={handleEmailChange}
      />
    </Box>
  );
};

export default SignUpModalScreen1;

import { useState } from "react";
import {
  StyledSubmitButton,
  StyledTextField,
  FormContainer,
  StyledBox,
  StyledSubText,
} from "../UI/FormControls.styled";

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
    <FormContainer component="form" noValidate autoComplete="off">
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
        <StyledSubText variant="muted" component="a">
          Forgot PIN?
        </StyledSubText>
        <StyledSubmitButton
          autoFocus
          onClick={handleChange}
          variant="contained"
          disabled={phoneNumberError || pinError || !phoneNumber || !pin}
        >
          Login
        </StyledSubmitButton>
      </StyledBox>
    </FormContainer>
  );
};

export default LoginForm;

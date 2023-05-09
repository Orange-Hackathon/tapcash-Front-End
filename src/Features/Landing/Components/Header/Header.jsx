import { Box } from "@mui/material";
import logo from "../../../../Assets/logo.svg";
import SignUpModal from "../../../Authentication/Components/SignUpModal/SignUpModal";
import LoginModal from "../../../Authentication/Components/LoginModal/LoginModal";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 48px 0 101px",
      }}
    >
      <img src={logo} alt="logo" />
      <Box sx={{ display: "flex" }}>
        <SignUpModal />
        <LoginModal />
      </Box>
    </Box>
  );
};

export default Header;

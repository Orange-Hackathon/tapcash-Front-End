import { Box, Button } from "@mui/material";
import logo from "../../../../Assets/logo.svg";


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
      <Button
        sx={{
          width: "167px",
          height: "76px",
          borderRadius: "24px",
          fontWeight: "500",
          fontSize: "20px",
        }}
        variant="contained"
        color="primary"
      >
        Signup
      </Button>
    </Box>
  );
};

export default Header;

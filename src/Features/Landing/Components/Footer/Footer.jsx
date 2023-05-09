import { Box, Typography, useTheme } from "@mui/material";
import whiteLogo from "../../Assets/White logo.svg";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: "#333E96", marginTop: "100px" }}>
      <Box sx={{ paddingLeft: "48px", paddingTop: "69px" }}>
        <img src={whiteLogo} alt="logo" />
      </Box>
      <Box
        sx={{
          borderBottom: `1px solid ${theme.palette.gray.gray2}`,
          margin: "0 88px",
        }}
      ></Box>
      <Typography
        component="p"
        sx={{
          color: theme.palette.white.main,
          marginTop: "26px",
          marginLeft: "calc(120px - 32px)",
          paddingBottom: "101px",
          "& span": {
            marginRight: "32px",
            marginLeft: "32px",
            display: "inline-flex",
            alignItems: "center",
          },
          "& svg": {
            marginRight: "8px",
            marginLeft: "8px",
          },
        }}
      >
        <span>
          Copyright
          <CopyrightIcon />
          2023
        </span>
        |<span>Privacy policy</span> |<span>Terms of us</span>
      </Typography>
    </Box>
  );
};

export default Footer;

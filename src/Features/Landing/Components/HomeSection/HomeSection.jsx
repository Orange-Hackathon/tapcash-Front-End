import { Box, Typography, useTheme } from "@mui/material";

import home1 from "../../Assets/Home 1.png";
import home2 from "../../Assets/Home 2.png";
import QR from "../../Assets/QR-code.svg";
import googlePlay from "../../Assets/Google Play Button.svg";
const HomeSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "0 112px 0 94px",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "197px",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box>
        <Typography
          component="h1"
          sx={{
            fontWeight: "600",
            fontSize: "72px",
          }}
        >
          Cash with
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "72px",
              display: "inline-block",
              paddingLeft: "16px",
            }}
            color="primary"
          >
            tap
          </Typography>
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontWeight: "400",
            fontSize: "40px",
            marginTop: "16px",
          }}
        >
          tap, send, cash, safe...
        </Typography>
        <Typography
          component="h4"
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            width: "330px",
            marginTop: "96px",
          }}
        >
          You can easily get into the app from here Download or Scan, always
          just tap!
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "45px",
          }}
        >
          <img src={googlePlay} alt="googlePlay" />
          <img src={QR} alt="QR" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down("lg")]: {
            marginTop: "100px",
            marginBottom: "100px",
          },
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(114.22deg, rgba(247, 247, 247, 0.01) -3.07%, rgba(247, 247, 247, 0.1) 110.88%)",
            transform: "rotate(-4deg)",
            backdropFilter: "blur(2px)",
            borderRadius: "0px 0px 24px 24px",
            width: "280px",
            height: "510px",
            zIndex: "1",
            marginRight: "100px",
          }}
        >
          <img
            style={{
              filter: "drop-shadow(60px -3px 100px rgba(51, 62, 150, 0.42))",
            }}
            src={home1}
            alt="home1"
          />
        </Box>
        <Box
          sx={{
            transform: "rotate(4deg)",
            filter: "drop-shadow(60px -3px 100px rgba(51, 62, 150, 0.42))",
            borderRadius: "0px 0px 24px 24px",
            width: "280px",
            height: "510px",
          }}
        >
          <img src={home2} alt="home2" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSection;

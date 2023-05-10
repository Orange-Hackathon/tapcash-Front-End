import { Box, Typography, useTheme } from "@mui/material";

import send1 from "../../Assets/send 1.png";
import send2 from "../../Assets/send 2.png";
const SendSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "0 200px 0 217px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <img src={send2} alt="send2" />
        </Box>
        <Box
          sx={{
            marginLeft: "-200px",
            marginTop: "70px",
          }}
        >
          <img src={send1} alt="send1" />
        </Box>
      </Box>
      <Box>
        <Typography component="h1" sx={{ fontWeight: "600", fontSize: "35px" }}>
          Send to friends
        </Typography>
        <Typography
          component="h2"
          sx={{ fontWeight: "400", fontSize: "25px", width: "279px" }}
        >
          Send to anyone, anywhere with tap
        </Typography>
      </Box>
    </Box>
  );
};

export default SendSection;

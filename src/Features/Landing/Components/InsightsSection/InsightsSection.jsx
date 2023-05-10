import { Box, Typography, useTheme } from "@mui/material";

import Insights from "../../Assets/Insights 1.png";
const InsightsSection = () => {
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
          [theme.breakpoints.down("lg")]: {
            marginBottom: "50px",
          },
        }}
      >
        <Typography
          component="h1"
          sx={{ fontWeight: "600", fontSize: "35px", width: "420px" }}
        >
          Track your spending with your dashboard
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              filter: "blur(450px)",
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "-1",
            }}
          />
          <img src={Insights} alt="Insights" />
        </Box>
      </Box>
    </Box>
  );
};

export default InsightsSection;

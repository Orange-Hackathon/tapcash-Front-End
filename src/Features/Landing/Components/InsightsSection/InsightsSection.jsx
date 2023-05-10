import { Box, Typography } from "@mui/material";

import Insights from "../../Assets/Insights 1.png";
const InsightsSection = () => {
  return (
    <Box
      sx={{
        padding: "0 200px 0 217px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
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

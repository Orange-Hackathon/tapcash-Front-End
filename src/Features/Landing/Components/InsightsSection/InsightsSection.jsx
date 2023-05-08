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
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <img src={Insights} alt="Insights" />
        </Box>
      </Box>
      <Box>
        <Typography
          component="h1"
          sx={{ fontWeight: "600", fontSize: "50px", width: "420px" }}
        >
          Track your spending with your dashboard
        </Typography>
      </Box>
    </Box>
  );
};

export default InsightsSection;

import { Box, Typography } from "@mui/material";

import smartCard from "../../Assets/smart-card.png";
const SmartCardSection = () => {
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
          zIndex: "1",
        }}
      >
        <Typography component="h1" sx={{ fontWeight: "600", fontSize: "35px" }}>
          Your smart card
        </Typography>
        <Typography
          component="h2"
          sx={{ fontWeight: "400", fontSize: "25px", width: "279px" }}
        >
          Send/pay with your smart card
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
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
        <Box>
          <img src={smartCard} alt="send2" />
        </Box>
      </Box>
    </Box>
  );
};

export default SmartCardSection;

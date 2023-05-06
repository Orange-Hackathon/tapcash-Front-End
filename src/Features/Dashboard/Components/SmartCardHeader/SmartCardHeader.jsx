import { Box, Typography } from "@mui/material";

import profile from "../../Assets/profile.svg";

const SmartCardHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "72px",
          height: "72px",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)",
          borderRadius: "48px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <img src={profile} alt="profile" />
      </Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: "500", fontSize: "16px", marginLeft: "24px" }}
      >
        Hello, Habiba
      </Typography>
    </Box>
  );
};

export default SmartCardHeader;

import { Box, Typography, useTheme, Button } from "@mui/material";
import card from "../../Assets/card.svg";
const ChildLimit = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.muted,
        width: "282px",
        height: "144px",
        borderRadius: "24px",
        padding: "48px",
        alignItems: "center",
      }}
    >
      <Box>
        <img src={card} alt="card" />
        <Typography
          variant="h4"
          sx={{ fontSize: "16px", color: theme.palette.gray.gray2 }}
        >
          Balance
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            marginTop: "12px",
          }}
        >
          100/300 EGP
        </Typography>
      </Box>
    </Box>
  );
};

export default ChildLimit;

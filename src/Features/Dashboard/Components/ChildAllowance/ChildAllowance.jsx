import { Box, Typography, useTheme } from "@mui/material";
import handCard from "../../Assets/hand card.svg";
const ChildAllowance = () => {
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
        <img src={handCard} alt="handCard" />
        <Typography
          variant="h4"
          sx={{ fontSize: "16px", color: theme.palette.gray.gray2 }}
        >
          Allowance
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            marginTop: "12px",
          }}
        >
          100 EGP/week
        </Typography>
      </Box>
    </Box>
  );
};

export default ChildAllowance;

import { Box, Typography, useTheme, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const ChildBalance = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        width: "382px",
        height: "144px",
        borderRadius: "24px",
        padding: "48px",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{ fontSize: "16px", color: theme.palette.gray.gray1 }}
        >
          Balance
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            color: theme.palette.white.main,
            marginTop: "12px",
          }}
        >
          300 EGP
        </Typography>
      </Box>
      <Button
        variant="contained"
        disableElevation
        color="white"
        sx={{
          borderRadius: "50px",
          height: "60px",
          width: "10px",
          padding: "0px",
          backgroundColor: theme.palette.white.main,
        }}
      >
        <AddIcon style={{ fontSize: 30 }} />
      </Button>
    </Box>
  );
};

export default ChildBalance;

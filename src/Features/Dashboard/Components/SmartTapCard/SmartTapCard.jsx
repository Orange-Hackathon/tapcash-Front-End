import { Box, Card, Typography } from "@mui/material";
import whiteLogo from "../../Assets/white-tap-1.svg";
import visa from "../../Assets/visa.svg";
import { useTheme } from "styled-components";
const SmartTapCard = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "456px",
        height: "288px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        marginRight: "20px",
        marginTop: "40px",
        background:
          "linear-gradient(114.99deg, #1E1E1E -0.83%, #333E96 24.31%, #333E96 56.53%, #1E1E1E 100.59%)",
      }}
    >
      <Box>
        <Box sx={{ marginLeft: "11px", marginTop: "17px" }}>
          <img src={whiteLogo} alt="logo" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 73px",
            marginTop: "46px",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: "20px",
              margin: "0",
              padding: "0",
              width: "47px",
              textAlign: "center",
            }}
            color="white.main"
          >
            0000
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "20px",
              margin: "0",
              padding: "0",
              width: "47px",
              textAlign: "center",
            }}
            color="white.main"
          >
            0000
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "20px",
              margin: "0",
              padding: "0",
              width: "47px",
              textAlign: "center",
            }}
            color="white.main"
          >
            0000
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "20px",
              margin: "0",
              padding: "0",
              width: "47px",
              textAlign: "center",
            }}
            color="white.main"
          >
            0000
          </Typography>
        </Box>
        <Box sx={{ padding: "0 73px" }}>
          <Typography
            variant="p"
            sx={{ marginTop: "9px", fontSize: "14px", fontWeight: "400" }}
            color="gray.gray4"
          >
            EXP 24hr
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            padding: "0 24px",
            marginBottom: "23px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontSize: "16px", fontWeight: "400" }}
            color="gray.gray1"
          >
            HABIBA YASSER
          </Typography>
          <img src={visa} alt="visa" />
        </Box>
      </Box>
    </Card>
  );
};

export default SmartTapCard;

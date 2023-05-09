import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Insights from "../../Components/Insights/Insights";
import bell from "../../Assets/bell.svg";
import SmartCard from "../../Components/SmartCard/SmartCard";
const DashboardSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.muted,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
                marginBottom: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  color: theme.palette.gray.gray2,
                }}
              >
                Dashboard
              </Typography>
              <Button
                sx={{
                  borderRadius: "48px",
                  width: "64px",
                  height: "64px",
                  backgroundColor: theme.palette.white.main,
                }}
                color="white"
              >
                <img src={bell} alt="bell" />
              </Button>
            </Box>
            <Insights />
          </Grid>
          <Grid item xs={6}>
            <SmartCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardSection;

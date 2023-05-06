import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Insights from "../Insights/Insights";

const DashboardSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.gray.gray4,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            fontSize: "20px",
            color: theme.palette.gray.gray2,
            marginTop: "69px",
            marginBottom: "50px",
          }}
        >
          Dashboard
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Insights />
          </Grid>
          <Grid item xs={6}>
            <Insights />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardSection;

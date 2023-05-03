import { Container, Grid, Typography } from "@mui/material";
import Insights from "../Insights/Insights";

const DashboardSection = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Insights />
        </Grid>
        <Grid item xs={6}>
          <Insights />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardSection;

import { Box, Grid, Typography } from "@mui/material";
import InsightsCard from "../InsightsCard/InsightsCard";

const Insights = () => {
  return (
    <Box>
      <Typography variant="h4">Insights</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <InsightsCard title="Balance">
            <Typography variant="h5">£100</Typography>
          </InsightsCard>
        </Grid>
        <Grid item xs={4}>
          <InsightsCard title="Payment">
            <Typography variant="h5">£100</Typography>
          </InsightsCard>
        </Grid>
        <Grid item xs={4}>
          <InsightsCard title="Bill">
            <Typography variant="h5">£100</Typography>
          </InsightsCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insights;

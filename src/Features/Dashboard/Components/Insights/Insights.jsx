import { Grid, Typography, Container, Box } from "@mui/material";
import InsightsCard from "../InsightsCard/InsightsCard";
import InsightsChart from "../InsightsChart/InsightsChart";
import PaymentsIcon from "@mui/icons-material/Payments";
import Transactions from "../Transactions/Transactions";

const Insights = () => {
  return (
    <Box>
      <Typography variant="h4">Insights</Typography>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <InsightsCard title="Balance">
                <Typography variant="h5">£100</Typography>
              </InsightsCard>
            </Grid>
            <Grid item xs={4}>
              <InsightsCard title="Payment">
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center", width: "100%" }}
                >
                  <PaymentsIcon sx={{ fontSize: 80 }} />
                </Typography>
              </InsightsCard>
            </Grid>
            <Grid item xs={4}>
              <InsightsCard title="Bill">
                <Typography variant="h5">
                  <PaymentsIcon sx={{ fontSize: 80 }} />
                </Typography>
              </InsightsCard>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <InsightsChart />
        </Box>
        <Box>
          <Transactions />
        </Box>
      </Container>
    </Box>
  );
};

export default Insights;

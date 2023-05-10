import { Grid, Typography, Button, Box } from "@mui/material";
import InsightsCard from "../InsightsCard/InsightsCard";
import InsightsChart from "../InsightsChart/InsightsChart";
import Transactions from "../Transactions/Transactions";

import mobile from "../../Assets/mobile.svg";
import send from "../../Assets/send.svg";
const Insights = ({ handleChange }) => {
  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <InsightsCard title="Balance">
              <Typography variant="h5" sx={{ padding: "0", fontSize: "20px" }}>
                10,000
              </Typography>
              <Typography
                variant="h5"
                sx={{ padding: "0", marginLeft: "0px", fontSize: "20px" }}
              >
                EGY
              </Typography>
            </InsightsCard>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={(e) => handleChange(e,3)}
              sx={{
                padding: "0",
                margin: "0",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <InsightsCard title="">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <img src={send} alt="mobile" />
                  <Typography
                    variant="h5"
                    sx={{ padding: "0", marginTop: "24px", fontSize: "20px" }}
                  >
                    Send
                  </Typography>
                </Box>
              </InsightsCard>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <InsightsCard title="">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <img src={mobile} alt="mobile" />
                <Typography
                  variant="h5"
                  sx={{ padding: "0", marginTop: "24px", fontSize: "20px" }}
                >
                  Payments
                </Typography>
              </Box>
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
    </Box>
  );
};

export default Insights;

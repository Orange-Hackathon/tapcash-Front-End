import { CChart } from "@coreui/react-chartjs";
import { Card, Typography, useTheme } from "@mui/material";

const InsightsChart = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "550px",
        height: "280px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        marginRight: "20px",
        marginTop: "70px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "33px",
      }}
    >
      <Typography sx={{ fontSize: "20px", color: "#7C7C7C" }} variant="h5">
        Insights
      </Typography>
      <CChart
        type="bar"
        data={{
          labels: ["1-8", "8-15", "15-22", "22-29", "29-31"],
          datasets: [
            {
              label: "Insights",
              backgroundColor: theme.palette.primary.main,
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              borderRadius: 24,
              barThickness: 27,
            },
          ],
        }}
        labels="months"
      />
    </Card>
  );
};

export default InsightsChart;

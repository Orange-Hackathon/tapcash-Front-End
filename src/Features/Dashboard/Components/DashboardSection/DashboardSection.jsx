import { Box, Container, Typography } from "@mui/material";
import Insights from "../Insights/Insights";

const DashboardSection = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Dashboard</Typography>
      <Insights />
    </Container>
  );
};

export default DashboardSection;

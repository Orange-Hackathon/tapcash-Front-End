import { Box } from "@mui/material";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/HomeSection/HomeSection";
import SendSection from "../../Components/SendSection/SendSection";
import SmartCardSection from "../../Components/SmartCardSection/SmartCardSection";
import InsightsSection from "../../Components/InsightsSection/InsightsSection";

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        margin: "0",
        padding: "0",
        paddingTop: "40px",
      }}
    >
      <Header />
      <HomeSection />
      <SendSection />
      <SmartCardSection />
      <InsightsSection/>
    </Box>
  );
};

export default LandingPage;

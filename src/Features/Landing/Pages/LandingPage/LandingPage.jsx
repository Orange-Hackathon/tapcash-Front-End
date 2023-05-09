import { Box } from "@mui/material";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/HomeSection/HomeSection";
import SendSection from "../../Components/SendSection/SendSection";
import SmartCardSection from "../../Components/SmartCardSection/SmartCardSection";
import InsightsSection from "../../Components/InsightsSection/InsightsSection";
import Transactions from "../../Components/Transactions/Transactions";
import Children from "../../Components/Children/Children";
import Footer from "../../Components/Footer/Footer";

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
      <Transactions />
      <InsightsSection />
      <Children />
      <Footer />
    </Box>
  );
};

export default LandingPage;

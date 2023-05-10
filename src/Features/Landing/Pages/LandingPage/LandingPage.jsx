import { Box } from "@mui/material";
import Header from "../../Components/Header/Header";
import HomeSection from "../../Components/HomeSection/HomeSection";
import SendSection from "../../Components/SendSection/SendSection";
import SmartCardSection from "../../Components/SmartCardSection/SmartCardSection";
import InsightsSection from "../../Components/InsightsSection/InsightsSection";
import Transactions from "../../Components/Transactions/Transactions";
import Children from "../../Components/Children/Children";
import Footer from "../../Components/Footer/Footer";
import rightCircle from "../../Assets/Right circle.svg";
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
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "50vh",
          width: "40vw",
          background: "#333E96",
          filter: "blur(350px)",
          zIndex: "-1",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          height: "50vh",
          width: "40vw",
          background: "#333E96",
          filter: "blur(180px)",
          zIndex: "-1",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "95vh",
          left: "0",
          height: "50vh",
          width: "40vw",
          background: "#333E96",
          filter: "blur(180px)",
          zIndex: "-1",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "1001px",
          height: "1024px",
          right: "0",
          top: "174px",
          zIndex: "-2",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img src={rightCircle} alt="rightCircle" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "110vh",
          right: "0",
          height: "50vh",
          width: "40vw",
          background: "#333E96",
          filter: "blur(180px)",
          zIndex: "-1",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "110vh",
          right: "20vw",
          height: "50vh",
          width: "40vw",
          background: "#333E96",
          filter: "blur(380px)",
          zIndex: "-1",
        }}
      />
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

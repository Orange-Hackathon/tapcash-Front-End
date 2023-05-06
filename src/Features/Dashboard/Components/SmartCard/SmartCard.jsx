import { Card } from "@mui/material";
import SmartCardHeader from "../SmartCardHeader/SmartCardHeader";
import SmartTapCard from "../SmartTapCard/SmartTapCard";

const SmartCard = () => {
  return (
    <Card
      sx={{
        width: "552px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        marginRight: "36px",
        paddingLeft: "48px",
        paddingRight: "48px",
        paddingTop: "32px",
        marginTop: "48px",
      }}
    >
      <SmartCardHeader />
      <SmartTapCard />
    </Card>
  );
};

export default SmartCard;

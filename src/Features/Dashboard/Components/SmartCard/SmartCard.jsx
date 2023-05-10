import { Card, useTheme } from "@mui/material";
import SmartCardHeader from "../SmartCardHeader/SmartCardHeader";
import SmartTapCard from "../SmartTapCard/SmartTapCard";
import GetCardNumber from "../GetCardNumber/GetCardNumber";
import ManageChildren from "../ManageChildren/ManageChildren";

const SmartCard = () => {
  const theme = useTheme();
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
        marginTop: "20px",
        [theme.breakpoints.down("lg")]: {
          width: "80%",
          margin: "auto",
          marginTop: "20px",
        },
      }}
    >
      <SmartCardHeader />
      <SmartTapCard />
      <GetCardNumber />
      <ManageChildren />
    </Card>
  );
};

export default SmartCard;

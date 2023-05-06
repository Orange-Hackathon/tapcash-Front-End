import { Card, Typography, useTheme } from "@mui/material";
import reload from "../../Assets/reload.svg";
const GetCardNumber = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "100%",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        marginTop: "24px",
        backgroundColor: theme.palette.gray.gray4,
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "33px",
      }}
    >
      <Typography sx={{ padding: "24px" }}>Get your card number</Typography>
      <img src={reload} alt="reload" />
    </Card>
  );
};

export default GetCardNumber;

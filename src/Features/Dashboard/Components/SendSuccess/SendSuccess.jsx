import { Button, Avatar, Card, CardContent, Typography } from "@mui/material";
import done from "../../Assets/done.svg";
const SendSuccess = ({ handleDashboardChange }) => {
  return (
    <Card
      sx={{
        height: "500px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        paddingLeft: "80px",
        paddingRight: "80px",
        paddingTop: "33px",
        marginTop: "15px",
        marginLeft: "100px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          padding: "0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={done} alt="done" />
        <Typography
          variant="h5"
          color="initial"
          sx={{ fontSize: "20px", width: "267px", textAlign: "center" }}
        >
          Your Transaction was successfully
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "100px",
            width: "312px",
            height: "56px",
            borderRadius: "18px",
          }}
          onClick={(e) => handleDashboardChange(e, 0)}
        >
          Done
        </Button>
      </CardContent>
    </Card>
  );
};

export default SendSuccess;

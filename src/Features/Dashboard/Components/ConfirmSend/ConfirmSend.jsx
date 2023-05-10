import { Button, Avatar, Card, CardContent, Typography } from "@mui/material";
const ConfirmSend = ({ handleChange }) => {
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
        }}
      >
        <Avatar />
        <Typography
          variant="h5"
          color="initial"
          sx={{
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Send to Abdelrahman
        </Typography>
        <Typography
          variant="h5"
          color="initial"
          sx={{
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          +20 100 000 0000
        </Typography>
        <Typography
          variant="h5"
          color="initial"
          sx={{
            fontSize: "22px",
            marginTop: "50px",
            fontWeight: "500",
          }}
        >
          50 EGP
        </Typography>

        <Button
          variant="contained"
          sx={{
            marginTop: "100px",
            width: "312px",
            height: "56px",
            borderRadius: "18px",
          }}
          onClick={(e) => handleChange(e, 2)}
        >
          Send 50 EGY
        </Button>
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
            width: "312px",
            height: "56px",
            borderRadius: "18px",
            backgroundColor: "gray.gray1",
            color: "gray.gray3",
            "&:hover": {
                backgroundColor: "gray.gray1",
            }
          }}
          onClick={(e) => handleChange(e, 0)}
        >
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConfirmSend;

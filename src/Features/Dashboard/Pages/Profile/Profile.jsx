import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import SmartCardHeader from "../../Components/SmartCardHeader/SmartCardHeader";
import PersonalInfo from "../../Components/PersonalInfo/PersonalInfo";
const Profile = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.gray.gray4,
        width: "100%",
        height: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "50px",
            marginBottom: "50px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "20px",
              color: theme.palette.gray.gray2,
            }}
          >
            Profile
          </Typography>
        </Box>
        <Card
          sx={{
            width: "1000px",
            height: "500px",
            boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            marginRight: "20px",
            paddingLeft: "50px",
            paddingRight: "24px",
            paddingTop: "33px",
          }}
        >
          <CardContent sx={{ padding: "0" }}>
            <SmartCardHeader />
            <PersonalInfo />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Profile;

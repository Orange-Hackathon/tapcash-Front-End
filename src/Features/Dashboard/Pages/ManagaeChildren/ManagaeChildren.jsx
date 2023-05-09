import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import bell from "../../Assets/bell.svg";
import profile from "../../Assets/profile.svg";
import ChildrenList from "../../Components/ChildrenList/ChildrenList";
import ChildBalance from "../../Components/ChildBalance/ChildBalance";
import ChildLimit from "../../Components/ChildLimit/ChildLimit";
import ChildAllowance from "../../Components/ChildAllowance/ChildAllowance";
import ChildCategories from "../../Components/ChildCategories/ChildCategories";
import ChildTransactions from "../../Components/ChildTransactions/ChildTransactions";

const ManageChildren = ({ handleChange }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.muted,
        width: "100%",
        height: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
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
            Manage children
          </Typography>
          <Box>
            <Button
              sx={{
                borderRadius: "48px",
                width: "64px",
                height: "64px",
                backgroundColor: theme.palette.white.main,
              }}
              color="white"
            >
              <img src={bell} alt="bell" />
            </Button>
            <Button
              sx={{
                borderRadius: "48px",
                width: "64px",
                height: "64px",
                marginLeft: "20px",
                backgroundColor: theme.palette.white.main,
              }}
              color="white"
            >
              <img src={profile} alt="profile" />
            </Button>
          </Box>
        </Box>
        <ChildrenList />

        <Card
          sx={{
            height: "500px",
            boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
            marginRight: "20px",
            paddingLeft: "50px",
            paddingRight: "24px",
            paddingTop: "33px",
            marginTop: "15px",
          }}
        >
          <CardContent sx={{ padding: "0" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <ChildBalance />
              </Box>
              <Box>
                <ChildLimit />
              </Box>
              <Box>
                <ChildAllowance />
              </Box>
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <ChildCategories />
              <ChildTransactions />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ManageChildren;

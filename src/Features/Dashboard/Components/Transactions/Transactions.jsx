import {
  Typography,
  Card,
  Container,
  Box,
  Button,
  useTheme,
} from "@mui/material";
import TransactionItem from "../TransactionItem/TransactionItem";
import AddIcon from "@mui/icons-material/Add";
const Transactions = () => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "550px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        marginRight: "20px",
        marginTop: "20px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "33px",
        [theme.breakpoints.down("lg")]: {
          width: "80%",
          margin: "auto",
          marginTop: "20px",
        },
      }}
    >
      <Container sx={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              color: theme.palette.gray.body1,
            }}
          >
            Transactions
          </Typography>
          <Button sx={{ borderRadius: 16 }}>
            <AddIcon />
          </Button>
        </Box>
        <Box>
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </Box>
      </Container>
    </Card>
  );
};

export default Transactions;

import { Typography, Card, Container, Box, Button } from "@mui/material";
import TransactionItem from "../TransactionItem/TransactionItem";
import AddIcon from "@mui/icons-material/Add";
const Transactions = () => {
  return (
    <Card>
      <Container sx={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Transactions</Typography>
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

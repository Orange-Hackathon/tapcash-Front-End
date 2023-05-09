import { Box, Typography } from "@mui/material";

import transactions from "../../Assets/transactions.png";
const Transactions = () => {
  return (
    <Box
      sx={{
        padding: "0 200px 0 217px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box>
          <img src={transactions} alt="transactions" />
        </Box>
      </Box>
      <Box sx={{ width: "400px" }}>
        <Typography component="h1" sx={{ fontWeight: "600", fontSize: "35px" }}>
          Your transactions are secure & reliable
        </Typography>
        <Typography component="h2" sx={{ fontWeight: "400", fontSize: "25px" }}>
          <ul>
            <li>Scan an intuitive payment</li>
            <li>Your financial info is protected every step of the way</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default Transactions;

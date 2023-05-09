import { Box, Typography, useTheme, Switch } from "@mui/material";
import { useState } from "react";
import TransactionItem from "../TransactionItem/TransactionItem";
const ListItem = ({ title }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Typography variant="p" sx={{ fontSize: "15px" }}>
        {title}
      </Typography>
      <Typography variant="p" sx={{ fontSize: "15px" }}>
        <Switch
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
          name="loading"
          color="primary"
        />
      </Typography>
    </Box>
  );
};
const ChildTransactions = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.muted,
        width: "48%",
        borderRadius: "24px",
        padding: "48px",
        paddingTop: "25px",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: "16px",
            color: theme.palette.gray.gray2,
            padding: "0",
            marginBottom: "20px",
          }}
        >
          Recent transactions
        </Typography>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </Box>
    </Box>
  );
};

export default ChildTransactions;

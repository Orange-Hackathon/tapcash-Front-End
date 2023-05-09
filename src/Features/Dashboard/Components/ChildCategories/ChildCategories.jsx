import { Box, Typography, useTheme, Switch } from "@mui/material";
import card from "../../Assets/card.svg";
import { useState } from "react";
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
const ChildCategories = () => {
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
          Manage Categories
        </Typography>
        <ListItem title="Food" />
        <ListItem title="Gaming" />
        <ListItem title="Shopping" />
        <ListItem title="Cloths" />
      </Box>
    </Box>
  );
};

export default ChildCategories;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const InsightsCard = ({ children, title }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "170px",
        height: "156px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        marginRight: "20px",
        paddingLeft: "14px",
        paddingRight: "14px",
        paddingTop: "33px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardContent sx={{ padding: "0" }}>
        <Typography
          sx={{
            fontSize: "20px",
            color: theme.palette.gray.gray3,
            padding: "0",
          }}
          variant="h5"
          component="h5"
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0", paddingTop: "4px", display: "block" }}>
        {children}
      </CardActions>
    </Card>
  );
};
export default InsightsCard;

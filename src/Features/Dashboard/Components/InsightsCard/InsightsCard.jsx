import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InsightsCard = ({ children, title }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};
export default InsightsCard;

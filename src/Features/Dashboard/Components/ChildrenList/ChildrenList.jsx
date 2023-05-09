import { Box, Button, useTheme } from "@mui/material";
import boy from "../../Assets/boy.svg";
import girl from "../../Assets/girl.svg";
import plus from "../../Assets/plus.svg";
import AddIcon from "@mui/icons-material/Add";

const ChildrenList = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button
        variant="contained"
        disableElevation
        color="white"
        sx={{
          borderRadius: "48px",
          marginLeft: "20px",
          backgroundColor: theme.palette.gray.gray4,
        }}
      >
        <AddIcon style={{ fontSize: 35 }} />
      </Button>
      <Button
        variant="contained"
        color="white"
        disableElevation
        sx={{
          borderRadius: "48px",
          marginLeft: "20px",
        }}
      >
        <img src={boy} alt="boy" />
      </Button>
      <Button
        variant="contained"
        color="white"
        disableElevation
        sx={{
          borderRadius: "48px",
          marginLeft: "20px",
        }}
      >
        <img src={girl} alt="boy" />
      </Button>
    </Box>
  );
};

export default ChildrenList;

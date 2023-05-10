import {
  Card,
  CardContent,
  Typography,
  useTheme,
  TextField,
  Box,
  Button,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const CustomListItem = ({ handleChange }) => {
  return (
    <Button
      sx={{
        width: "100%",
      }}
      onClick={(e) => handleChange(e, 1)}
    >
      <ListItem sx={{ width: "100%" }}>
        <ListItemAvatar>
          <Avatar
            sx={{
              color: { main: "red" },
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary="Abdelrahman"
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="gray.gray2"
              >
                +2012345678
              </Typography>
            </>
          }
        />
      </ListItem>
    </Button>
  );
};
const SendContacts = ({ handleChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };
  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "500px",
        boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
        borderRadius: "24px",
        paddingLeft: "80px",
        paddingRight: "80px",
        paddingTop: "33px",
        marginTop: "15px",
        marginLeft: "100px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardContent sx={{ padding: "0", width: "100%" }}>
        <Typography
          variant="h3"
          color="initial"
          sx={{
            fontSize: "20px",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Send Money
        </Typography>
        <TextField
          label="Search"
          variant="filled"
          size="small"
          value={searchValue}
          onChange={handleSearchChange}
          sx={{
            width: "100%",
          }}
        />
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              color: theme.palette.gray.gray2,
              marginTop: "20px",
            }}
          >
            Contacts
          </Typography>
        </Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <CustomListItem handleChange={handleChange} />
          <CustomListItem handleChange={handleChange} />
          <CustomListItem handleChange={handleChange} />
        </List>
      </CardContent>
    </Card>
  );
};

export default SendContacts;

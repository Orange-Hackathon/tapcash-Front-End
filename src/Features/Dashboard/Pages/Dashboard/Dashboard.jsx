import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledDrawer } from "./Dashboard.styled";
import DashboardSection from "../../Components/DashboardSection/DashboardSection";

const CustomListItem = ({ text, icon }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <StyledDrawer variant="permanent" anchor="left">
        <Box>
          <List>
            <ListItem>
              <Typography variant="h6" noWrap component="div">
                Logo
              </Typography>
            </ListItem>
          </List>
          <List>
            <CustomListItem text="Dashboard" icon={<InboxIcon />} />
            <CustomListItem text="Profile" icon={<AccountCircleIcon />} />
          </List>
          <Divider />
        </Box>
        <List>
          <CustomListItem text="Logout" icon={<InboxIcon />} />
        </List>
      </StyledDrawer>
      <DashboardSection />
    </Box>
  );
};

export default Dashboard;

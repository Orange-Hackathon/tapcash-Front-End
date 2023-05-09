import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledDrawer } from "./Dashboard.styled";
import DashboardSection from "../DashboardSection/DashboardSection";
import logo from "../../Assets/logo.svg";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import profile from "../../Assets/profile.svg";
import logout from "../../Assets/logout.svg";
import dashboard from "../../Assets/dashboard.svg";
import Profile from "../Profile/Profile";
import { Route, Routes, useRoutes } from "react-router";
import { Link } from "react-router-dom";
import ManageChildren from "../ManagaeChildren/ManagaeChildren";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("newValue = ", newValue);
    if (newValue < 2) setValue(newValue);
    setPage(newValue);
  };
  console.log(page);

  const routes = [
    { path: "/", element: <DashboardSection />, exact: true },
    { path: "/*", element: <Profile /> },
  ];
  const routing = useRoutes(routes);

  return (
    <Box sx={{ display: "flex" }}>
      <StyledDrawer variant="permanent" anchor="left">
        <Box>
          <List>
            <ListItem>
              <img src={logo} alt="logo" />
            </ListItem>
          </List>
          <List>
            <Box>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
              >
                <Tab
                  sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    justifyContent: "flex-start",
                  }}
                  label="Dashboard"
                  iconPosition="start"
                  icon={
                    <img
                      src={dashboard}
                      alt="dashboard"
                      style={{
                        paddingRight: "14px",
                        display: "block",
                      }}
                    />
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    justifyContent: "flex-start",
                  }}
                  iconPosition="start"
                  label="My Profile"
                  icon={
                    <img
                      src={profile}
                      alt="profile"
                      style={{
                        paddingRight: "14px",
                        display: "block",
                      }}
                    />
                  }
                  {...a11yProps(1)}
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
          </List>
          <Divider />
        </Box>
        <List>
          <Tab
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              lineHeight: "32px",
              justifyContent: "flex-start",
              width: "100%",
            }}
            iconPosition="start"
            label="Logout"
            icon={
              <img
                src={logout}
                alt="logout"
                style={{
                  paddingRight: "14px",
                  display: "block",
                }}
              />
            }
            {...a11yProps(1)}
          />
        </List>
      </StyledDrawer>
      {/* {routing} */}
      {page === 0 && <DashboardSection />}
      {page === 1 && <Profile handleChange={handleChange} />}
      {page === 2 && <ManageChildren handleChange={handleChange} />}
    </Box>
  );
};

export default Dashboard;

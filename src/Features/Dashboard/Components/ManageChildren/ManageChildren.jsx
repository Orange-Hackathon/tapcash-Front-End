import {
  Avatar,
  Box,
  Card,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const ManageChildren = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          fontSize: "16px",
          marginTop: "32px",
          marginBottom: "16px",
        }}
        color={theme.palette.primary.main}
      >
        Manage Children
      </Typography>
      <Card
        sx={{
          boxShadow: " 0px 0px 50px rgba(0, 0, 0, 0.1)",
          borderRadius: "24px",
          backgroundColor: theme.palette.gray.gray4,
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "23px",
          paddingBottom: "23px",
        }}
      >
        <ListItem
          alignItems="flex-start"
          sx={{
            padding: "0px",
            margin: "0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ListItemText primary="Sandra Adams" />
            <ListItemText
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              primary="50 EGP"
            />
          </Box>
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{
            padding: "0px",
            margin: "0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ListItemText primary="Sandra Adams" />
            <ListItemText
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              primary="50 EGP"
            />
          </Box>
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{
            padding: "0px",
            margin: "0px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ListItemText primary="Sandra Adams" />
            <ListItemText
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              primary="50 EGP"
            />
          </Box>
        </ListItem>
      </Card>
    </Box>
  );
};

export default ManageChildren;

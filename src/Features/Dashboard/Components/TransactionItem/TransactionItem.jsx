import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const TransactionItem = () => {
  const theme = useTheme();
  return (
    <Box>
      <ListItem
        alignItems="flex-start"
        sx={{
          padding: "0px",
          margin: "0px",
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ListItemText
            primary="Sandra Adams"
            secondary={
              <Box
                sx={{
                  color: theme.palette.gray.gray2,
                }}
              >
                <span>05:00 pm</span>
              </Box>
            }
          />
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
            primary="50 EGP"
          />
        </Box>
      </ListItem>
    </Box>
  );
};

export default TransactionItem;

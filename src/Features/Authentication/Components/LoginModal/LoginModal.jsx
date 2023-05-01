import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginForm from "../LoginForm/LoginForm";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import SendIcon from "@mui/icons-material/Send";
import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: "3rem",
              color: "#2196f3",
              textAlign: "center",
            }}
          >
            Login
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent>
          <LoginForm />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ width: "50%", margin: "0 auto 10px auto" }}
          >
            Login
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import LoginForm from "../LoginForm/LoginForm";

import DialogContent from "@mui/material/DialogContent";

import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";
import { Box, useTheme } from "@mui/material";
import {
  BootstrapDialog,
  DotIcon,
  DotPagination,
  DialogTitle,
} from "../UI/ModalControls.styled";

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(1);
  const handleChange = (event) => {
    setPage(page + 1);
  };
  const theme = useTheme();
  return (
    <div>
      <Button onClick={handleOpen}>Login</Button>{" "}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <Box
          className="login-modal"
          sx={{
            [theme.breakpoints.up("xs")]: {
              width: "100%",
            },
            [theme.breakpoints.up("sm")]: {
              width: "528px",
            },
            height: "504px",
            paddingTop: "33px",
          }}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            <DialogTitle>Login</DialogTitle>
          </BootstrapDialogTitle>
          <DialogContent>
            <LoginForm handleChange={handleChange} />
          </DialogContent>
        </Box>
      </BootstrapDialog>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoginForm from "../LoginForm/LoginForm";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";
import { Box, Pagination } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    borderRadius: "24px",
    height: "610px",
    width: "528px",
  },
}));
const DotPagination = styled(Pagination)(({ theme }) => {
  return {
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
  };
});
const LoginTitle = styled(Typography)(({ theme }) => {
  return {
    fontSize: "24px",
    textAlign: "center",
    LineHeight: "32px",
    marginTop: "31px",
  };
});

const DotIcon = styled(FiberManualRecordIcon)(({ theme, item }) => ({
  color: item.selected
    ? theme.typography.body1.color
    : theme.palette.action.disabledBackground,
  width: "12px",
  height: "12px",
  fontSize: "100px",
  marginTop: "36px",
}));

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(1);
  const handleChange = (event) => {
    setPage(page + 1);
  };
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
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Box>
            <DotPagination
              count={2}
              page={page}
              onChange={handleChange}
              hidePrevButton
              hideNextButton
              renderItem={(item) => <DotIcon item={item} />}
            />
          </Box>
          <LoginTitle>Login</LoginTitle>
        </BootstrapDialogTitle>
        <DialogContent>
          <LoginForm handleChange={handleChange} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

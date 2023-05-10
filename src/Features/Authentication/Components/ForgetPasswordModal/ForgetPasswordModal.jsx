import * as React from "react";
import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";
import Box from "@mui/material/Box";

import { BootstrapDialog } from "../UI/ModalControls.styled";
import ForgetPinScreen1 from "../ForgetPinScreen1/ForgetPinScreen1";
import ForgetPinScreen3 from "../ForgetPinScreen3/ForgetPinScreen3";
import ForgetPinScreen2 from "../ForgetPinScreen2/ForgetPinScreen2";
import { StyledSubText } from "../UI/FormControls.styled";
export default function ForgetPasswordModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event) => {
    if (page < 3) setPage(page + 1);
  };
  const handlePageBack = (event) => {
    if (page < 3) setPage(page - 1);
  };

  return (
    <div>
      <StyledSubText variant="muted" component="a" onClick={handleOpen}>
        Forget Pin
      </StyledSubText>
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
        ></BootstrapDialogTitle>
        <Box>
          {page === 1 && (
            <ForgetPinScreen1 handlePageChange={handlePageChange} />
          )}
          {page === 2 && (
            <ForgetPinScreen2
              handlePageChange={handlePageChange}
              handlePageBack={handlePageBack}
            />
          )}
          {page === 3 && (
            <ForgetPinScreen3
              handlePageChange={handlePageChange}
              handleClose={handleClose}
            />
          )}
        </Box>
      </BootstrapDialog>
    </div>
  );
}

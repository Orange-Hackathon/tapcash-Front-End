import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import BootstrapDialogTitle from "../BootstrapDialogTitle/BootstrapDialogTitle";
import SignUpModalScreen1 from "../SignUpModalScreen1/SignUpModalScreen1";
import SignUpModalScreen2 from "../SignUpModalScreen2/SignUpModalScreen2";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { CircularProgress } from "@mui/material";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import { green } from "@mui/material/colors";
import {
  BootstrapDialog,
  DotIcon,
  DotPagination,
} from "../UI/ModalControls.styled";
import ForgetPinScreen1 from "../ForgetPinScreen1/ForgetPinScreen1";
import ForgetPinScreen3 from "../ForgetPinScreen3/ForgetPinScreen3";
import ForgetPinScreen2 from "../ForgetPinScreen2/ForgetPinScreen2";

const SignUpFinalScreen = () => {
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef();

  React.useEffect(() => {
    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setQuery("success");
    }, 2000);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {query === "success" ? (
        <CheckCircleOutlineTwoToneIcon
          sx={{ color: green[500], fontSize: 100 }}
        />
      ) : (
        <Fade
          in={query === "progress"}
          style={{
            transitionDelay: query === "progress" ? "800ms" : "0ms",
          }}
          unmountOnExit
        >
          <CircularProgress sx={{ fontSize: 200 }} />
        </Fade>
      )}
    </Box>
  );
};

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
      <Button onClick={handleOpen}>Forget password</Button>
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
          {page === 2 && <ForgetPinScreen2 handlePageBack={handlePageBack} />}
          {page === 3 && (
            <ForgetPinScreen3 handlePageChange={handlePageChange} />
          )}
        </Box>
      </BootstrapDialog>
    </div>
  );
}

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

export default function SignUpModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event) => {
    if (page < 2) setPage(page + 1);
  };

  return (
    <div>
      <Button
        sx={{
          width: "150px",
          height: "65px",
          borderRadius: "24px",
          fontWeight: "500",
          fontSize: "16px",
          marginLeft: "10px",
        }}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Sign up
      </Button>
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
              onChange={handlePageChange}
              hidePrevButton
              hideNextButton
              renderItem={(item) => <DotIcon item={item} />}
            />
          </Box>
        </BootstrapDialogTitle>
        {page === 1 && (
          <SignUpModalScreen1 handlePageChange={handlePageChange} />
        )}
        {page === 2 && (
          <SignUpModalScreen2 handlePageChange={handlePageChange} />
        )}
      </BootstrapDialog>
    </div>
  );
}

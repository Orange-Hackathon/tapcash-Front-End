import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const BootstrapDialog = styled(Dialog)(({ theme, width, height }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    borderRadius: "24px",
    width: "fit-content",
  },
}));

export const DotPagination = styled(Pagination)(({ theme }) => {
  return {
    "& .MuiPagination-ul": {
      justifyContent: "center",
    },
  };
});

export const DialogTitle = styled(Typography)(({ theme }) => {
  return {
    fontSize: "24px",
    textAlign: "center",
    LineHeight: "32px",
    marginTop: "31px",
  };
});

export const DotIcon = styled(FiberManualRecordIcon)(({ theme, item }) => ({
  color: item.selected
    ? theme.typography.body1.color
    : theme.palette.action.disabledBackground,
  width: "12px",
  height: "12px",
  fontSize: "100px",
  marginTop: "36px",
}));

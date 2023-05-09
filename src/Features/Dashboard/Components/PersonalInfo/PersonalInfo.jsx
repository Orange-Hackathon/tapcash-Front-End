import { Typography, Box, useTheme } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Info = ({ title, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "40%",
        marginTop: "20px",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "500", fontSize: "16px" }}>
        {title}
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "500", fontSize: "16px" }}
        color="primary"
      >
        {value}
      </Typography>
    </Box>
  );
};
const PersonalInfo = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          fontSize: "16px",
          color: theme.palette.gray.gray2,
          marginTop: "30px",
        }}
      >
        Personal Info
      </Typography>
      <Box>
        <Info title="Full Name" value="Abdelrahman Hamza" />
        <Info title="Email" value="email@gmail.com" />
        <Info title="Phone Number" value="0123456789" />
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          fontSize: "16px",
          color: theme.palette.gray.gray2,
          marginTop: "30px",
        }}
      >
        Security
      </Typography>
      <Info
        title="Your Pin"
        value={
          <>
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </>
        }
      />
    </Box>
  );
};

export default PersonalInfo;

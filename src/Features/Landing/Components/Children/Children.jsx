import { Box, Typography, useTheme } from "@mui/material";

import children2 from "../../Assets/children2.png";
import children1 from "../../Assets/children1.png";
const Children = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "0 200px 0 217px",
        marginTop: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down("lg")]: {
            marginBottom: "100px",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.main",
              filter: "blur(450px)",
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: "-1",
            }}
          />
          <Box sx={{ transform: "matrix(-1, -0.07, -0.07, 1, 0, 0)" }}>
            <img src={children2} alt="children2" />
          </Box>
          <Box sx={{ marginTop: "-100px", marginRight: "100px" }}>
            <img src={children1} alt="children1" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "400px" }}>
        <Typography component="h1" sx={{ fontWeight: "600", fontSize: "35px" }}>
          Give your children access to responsible
        </Typography>
        <Typography
          component="h2"
          sx={{ fontWeight: "400", fontSize: "25px", width: "279px" }}
        >
          <ul>
            <li>All access to track your child</li>
            <li>Set limits on your child's spending</li>
            <li>Manage categories</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default Children;

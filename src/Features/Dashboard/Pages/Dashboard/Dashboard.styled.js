import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
const drawerWidth = 240;

export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;
  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
  }
`;

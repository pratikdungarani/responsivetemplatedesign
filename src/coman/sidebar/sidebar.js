import * as React from "react";
import { Box, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import useStyles from "./style.js";
const Sidebar = ({
  drawerWidth,
  drawer,
  handleDrawerToggle,
  mobileOpen,
  isNavbarOpen,
}) => {
  const classes = useStyles();
  {
    console.log("isNavbarOpen100", isNavbarOpen);
  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  console.log("matchesside", matches);
  return (
    <>
      <Box className={classes.sidebar}>
        <Drawer
          className={classes.sidebar}
          variant="temporary"
          sx={{
            display: { xs: "block", sm: "none" },
            ">.MuiDrawer-paper": {
              width: drawerWidth.mobile,
            },
          }}
          open={mobileOpen}
          onClose={() => {
            handleDrawerToggle({ clickType: "mobile" });
          }}
        >
          {console.log("drawerWidth.mobile", drawerWidth.mobile)}
          {drawer}
        </Drawer>
        {console.log(isNavbarOpen, "<<<<<<<<<<<", classes.sidebar)}
        <Drawer
          variant="permanent"
          className={classes.sidebar}
          open={isNavbarOpen}
          ModalProps={{
            keepMounted: true,
          }}
          onClose={() => {
            handleDrawerToggle({ clickType: "navbar" });
          }}
          sx={{
            display: { xs: "none", sm: "block" },
            ">.MuiDrawer-paper": {
              width: drawerWidth.navbar,
              mt: "72px",
            },
          }}
        >
          {console.log("drawerWidth.navbar", drawerWidth.navbar)}

          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;

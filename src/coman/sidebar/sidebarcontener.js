import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Link, useLocation } from "react-router-dom";
import SidebarMenu from "./sidebarmenu";
import useStyles from "./style.js";

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebarcontener = ({
  drawerWidth,
  handleDrawerToggle,
  isMobile,
  mobileOpen,
  isNavbarOpen,
}) => {
  const params = useLocation();
  const [activeLink, setActiveLink] = useState(params.pathname);
  console.log("activeLink", activeLink);
  const classes = useStyles();

  const drawer = (
    <List component="nav">
      {console.log("isMobile", isMobile)}
      <List>
        <List>
          {SidebarMenu.map((menu, index) => (
            <Link to={menu.path} className={classes.sidebarMenuItems}>
              <ListItemButton
                className={activeLink === menu.path && classes.active}
                onClick={() => {
                  handleDrawerToggle({
                    clickType: isMobile ? "mobile" : " navbar",
                  });
                  setActiveLink(menu.path);
                }}
              >
                {console.log("menu.path", menu.path)}
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.mainMenu} />
              </ListItemButton>
            </Link>
          ))}
        </List>
        {console.log("isNavbarOpen789", isNavbarOpen)}
      </List>
    </List>
  );
  return (
    <Sidebar
      drawer={drawer}
      handleDrawerToggle={handleDrawerToggle}
      drawerWidth={drawerWidth}
      mobileOpen={mobileOpen}
      isMobile={isMobile}
      isNavbarOpen={isNavbarOpen}
    />
  );
};

export default Sidebarcontener;

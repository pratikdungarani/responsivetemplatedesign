import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import useStyle from "./style";
import user from "../../assets/image/thumb-1.jpg";
import Avatar from "@mui/material/Avatar";
import logosm from "../../assets/image/logo-sm.png";
import logo from "../../assets/image/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
export default function PrimarySearchAppBar({
  isMenuOpen,
  anchorEl,
  handleClose,
  close,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleOpen,
  handleMobileOpen,
  handleChange,
  handleDrawerToggle,
  drawerWidth,
  isMobile,
  isNavbarOpen,
}) {
  const classes = useStyle();

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <header className={classes.appBar}>
      <Box className={classes.header}>
        <Box>
          {!isMobile && (
            <Box
              className={classes.logo}
              sx={{
                width: `calc(${drawerWidth.navbar}px - 25px)`,
              }}
            >
              {isNavbarOpen ? (
                <img src={logo} height={40} alt="env" />
              ) : (
                <img src={logosm} height={50} alt="Logo" />
              )}
            </Box>
          )}
        </Box>

        <Box
          className={classes.headerNav}
          sx={{
            width: isMobile ? "100%" : `calc(100% - ${drawerWidth.navbar}px)`,
          }}
        >
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                handleDrawerToggle({
                  clickType: isMobile ? "mobile" : "navbar",
                });
              }}
              onClose={close}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box className={classes.search}>
            {/* <div className={classes.search}> */}
            <Box className={classes.searchIcon}></Box>
            <TextField
              // label="With normal TextField"
              placeholder="Search"
              id="filled-start-adornment"
              className={classes.textField}
              onClick={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            /> */}
          </Box>
        </Box>

        <Box>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            {/* <p>Messages</p> */}
          </MenuItem>
        </Box>

        <Box>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* <p>Notifications</p> */}
          </MenuItem>
        </Box>

        <Box>
          <MenuItem onClick={handleOpen}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={user} />
            </IconButton>
            {/* <p>Profile</p> */}
          </MenuItem>
        </Box>
      </Box>
      {renderMenu}
    </header>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import useStyle from "./style";
import user from "../../assets/image/thumb-1.jpg";
import Avatar from "@mui/material/Avatar";
import logosm from "../../assets/image/logo-sm.png";
import logo from "../../assets/image/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
export default function PrimarySearchAppBar({
  isMenuOpen,
  anchorEl,
  handleClose,
  close,
  handleOpen,
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
            <Box className={classes.searchIcon}></Box>
            <TextField
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
          </MenuItem>
        </Box>

        <Box>
          <MenuItem onClick={handleOpen}>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={user} />
            </IconButton>
          </MenuItem>
        </Box>
      </Box>
      {renderMenu}
    </header>
  );
}

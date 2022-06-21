import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { menuName, path } from "../../const/const";
const SidebarMenu = [
  {
    mainMenu: menuName.DASHBOARD,
    icon: <DashboardOutlinedIcon />,
    path: path.DASHBOARD,
  },
  {
    mainMenu: menuName.ANALYTIC,
    icon: <AnalyticsIcon />,
    path: path.ANALYTIC,
  },
];
export default SidebarMenu;

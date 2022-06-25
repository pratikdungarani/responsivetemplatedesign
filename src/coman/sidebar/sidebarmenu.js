import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
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
  {
    mainMenu: menuName.SALES,
    icon: <AutoGraphIcon />,
    path: path.SALES,
  },
];
export default SidebarMenu;

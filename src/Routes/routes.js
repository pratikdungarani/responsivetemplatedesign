import React from "react";
import Dashbordcontaner from "../module/Dashbord/Dashbordcontaner";
import Analyticcontaner from "../module/Analytic/Analyticcontaner";
const routes = () => {
  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashbordcontaner,
    },
    {
      name: "Analytic",
      path: "/Analytic",
      component: Analyticcontaner,
    },
  ];
  return routes;
};

export default routes;

import React from "react";
import Dashbordcontaner from "../module/Dashbord/Dashbordcontaner";
import Analyticcontaner from "../module/Analytic/Analyticcontaner";
import Salescontaner from "../module/Sales/Salescontaner";
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
    {
      name: "Sales",
      path: "/sales",
      component: Salescontaner,
    },
  ];
  return routes;
};

export default routes;

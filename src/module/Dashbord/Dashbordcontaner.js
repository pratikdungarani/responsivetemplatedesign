import React from "react";
import Dashbord from "./Dashbord";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Dashbordcontaner = () => {
  const companyData = [
    {
      title: "Revenue",
      money: "$2,454",
      company: "Compare to last year (2019)",
      count: "-11.4",
      icon: <ArrowDownwardIcon />,
    },
    {
      title: "Sales",
      money: "$6,982",
      company: "Compare to last year (2019)",
      count: "8.2",
      icon: <ArrowUpwardIcon />,
    },
    {
      title: "Costs",
      money: "$8,310",
      company: "Compare to last year (2019)",
      count: "0.7",
      icon: <ArrowUpwardIcon />,
    },
  ];
  return (
    <div>
      <Dashbord companyData={companyData} />
    </div>
  );
};

export default Dashbordcontaner;

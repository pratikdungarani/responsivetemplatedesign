import React from "react";
import Cardreport from "./cardreport";
import TaskIcon from "@mui/icons-material/Task";
import SyncIcon from "@mui/icons-material/Sync";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
const cardreportcontaner = () => {
  const card = [
    { icon: <TaskIcon />, title: "Total order", count: "11,831" },
    { icon: <SyncIcon />, title: "Conversion rate", count: "26.9%" },
    { icon: <InsertChartIcon />, title: "Total profit", count: "$6,922" },
    { icon: <GroupAddIcon />, title: "Daily visitors", count: "873" },
  ];
  return (
    <div>
      <Cardreport card={card} />
    </div>
  );
};

export default cardreportcontaner;

import React, { useState } from "react";
import Dashbord from "./Dashbord";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { pink, red, blue, green, lightGreen } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
const Dashbordcontaner = () => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  const StringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };
  const companyData = [
    {
      title: "Revenue",
      money: "$2,454",
      company: "Compare to last year (2019)",
      count: "-11.4",
      icon: <ArrowDownwardIcon sx={{ color: red[500] }} />,
    },
    {
      title: "Sales",
      money: "$6,982",
      company: "Compare to last year (2019)",
      count: "8.2",
      icon: <ArrowUpwardIcon sx={{ color: green[500] }} />,
    },
    {
      title: "Costs",
      money: "$8,310",
      company: "Compare to last year (2019)",
      count: "0.7",
      icon: <ArrowUpwardIcon sx={{ color: green[500] }} />,
    },
  ];
  const [row, setRow] = useState([
    {
      customer: "Clayton Bates",
      date: "8 May 2020",
      amount: "	$137.00",
      status: "Active",
      image: <Avatar {...StringAvatar("Clayton Bates")} />,
    },
    {
      customer: "Gabriel Frazier",
      date: "6 May 2020  ",
      amount: "$322.00",
      status: "Pending",
      image: <Avatar {...StringAvatar("Gabriel Frazier")} />,
    },
    {
      customer: "Debra Hamilton",
      date: "1 May 2020",
      amount: "$543.00",
      status: "Reject",
      image: <Avatar {...StringAvatar("Debra Hamilton")} />,
    },
    {
      customer: "Stacey Ward",
      date: "28 April 2020",
      amount: "$876.00",
      status: "Active",
      image: <Avatar {...StringAvatar("Stacey Ward")} />,
    },
  ]);

  const [column, setColumn] = useState([
    { Label: "Customer", field: "customer" },
    { Label: "Date", field: "date" },
    { Label: "Amount", field: "amount" },
    { Label: "Status", field: "status" },
  ]);

  const seriesSpark3 = [{ data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }];

  const optionsSpark3 = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      opacity: 0.3,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    title: {
      text: "17,329",
      offsetX: 0,
      style: {
        fontSize: "24px",
      },
    },
    subtitle: {
      text: "Active members",
      offsetX: 0,
      style: {
        fontSize: "14px",
      },
    },
  };
  return (
    <div>
      <Dashbord
        companyData={companyData}
        column={column}
        row={row}
        title={"LatestTransactions"}
        series2={seriesSpark3}
        options2={optionsSpark3}
      />
    </div>
  );
};

export default Dashbordcontaner;

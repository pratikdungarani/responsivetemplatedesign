import React, { useState } from "react";
import Sales from "./Sales";
import TaskIcon from "@mui/icons-material/Task";
import SyncIcon from "@mui/icons-material/Sync";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { pink, red, blue, green, yellow, orange } from "@mui/material/colors";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import product1 from "../../assets/image/thumb-7.jpg";
import product2 from "../../assets/image/thumb-12.jpg";
import product3 from "../../assets/image/thumb-14.jpg";
import product4 from "../../assets/image/thumb-17.jpg";
import product5 from "../../assets/image/thumb-11.jpg";
import CircleIcon from "@mui/icons-material/Circle";

const Salescontaner = () => {
  const card = [
    {
      icon: <TaskIcon sx={{ color: green[500] }} />,
      title: "Total order",
      count: "11,831",
    },
    {
      icon: <SyncIcon sx={{ color: blue[500] }} />,
      title: "Conversion rate",
      count: "26.9%",
    },
    {
      icon: <InsertChartIcon sx={{ color: yellow[500] }} />,
      title: "Total profit",
      count: "$6,922",
    },
    {
      icon: <GroupAddIcon sx={{ color: red[500] }} />,
      title: "Daily visitors",
      count: "873",
    },
  ];
  const [row, setRow] = useState([
    {
      id: "#5328",
      product: "Terrance Moreno",
      date: "30-10-2019",
      ordersatus: "Ready",
      paymentstatus: "Paid",
      total: "$1,328.35",
    },
    {
      id: "#5321",
      product: "Ron Vargas",
      date: "05-07-2020",
      ordersatus: "Shipped",
      paymentstatus: "Paid",
      total: "$629.00",
    },
    {
      id: "#5287",
      product: "Luke Cook",
      date: "16-01-2020",
      ordersatus: "Shipped",
      paymentstatus: "Paid",
      total: "$25.90",
    },
    {
      id: "#5351",
      product: "Joyce Freeman",
      date: "04-06-2020",
      ordersatus: "Ready",
      paymentstatus: "Pending",
      total: "$817.50",
    },
    {
      id: "#5331",
      product: "Eileen Horton",
      date: "11-11-2019",
      ordersatus: "Ready",
      paymentstatus: "Paid",
      total: "$677.00",
    },
  ]);

  const [column, setColumn] = useState([
    { Label: "Id", field: "id" },
    { Label: "Product", field: "product" },
    { Label: "Date", field: "date" },
    { Label: "Order status", field: "ordersatus" },
    { Label: "Payment status", field: "paymentstatus" },
    { Label: "Total", field: "total" },
  ]);
  const TopProduct = [
    {
      title: "Blue Jacket",
      path: "Cloths",
      count: "$5,930",
      icon: product1,
      arrow: <ArrowUpwardIcon sx={{ color: green[500] }} />,
      type: "Sales",
    },
    {
      title: "White Sneaker",
      path: "Cloths",
      count: "$5,177",
      icon: product2,
      arrow: <ArrowUpwardIcon sx={{ color: green[500] }} />,
      type: "Sales",
    },
    {
      title: "Red Beat Headphone",
      path: "Devices",
      count: "$4,701",
      icon: product3,
      arrow: <ArrowDownwardIcon sx={{ color: red[500] }} />,
      type: "Sales",
    },
    {
      title: "Apple Watch",
      path: "Devices",
      count: "$2,833",
      icon: product4,
      arrow: <ArrowUpwardIcon sx={{ color: green[500] }} />,
      type: "Sales",
    },
    {
      title: "Blue Backpack",
      path: "Bags",
      count: "$1,692",
      icon: product5,
      arrow: <ArrowDownwardIcon sx={{ color: red[500] }} />,
      type: "Sales",
    },
  ];
  const options = {
    labels: ["Cloth", "Device", "Bags", "Watches"],
    series: [5, 2, 4],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  };
  const labels = [
    {
      label: "Cloths",
      count: "3561",
      icon: <CircleIcon sx={{ color: blue[500], fontSize: 10 }} />,
    },
    {
      label: "Devices",
      count: "1443",
      icon: <CircleIcon sx={{ color: green[500], fontSize: 10 }} />,
    },
    {
      label: "Bags",
      count: "2463",
      icon: <CircleIcon sx={{ color: orange[500], fontSize: 10 }} />,
    },
    {
      label: "Watches",
      count: "1693",
      icon: <CircleIcon sx={{ color: red[500], fontSize: 10 }} />,
    },
  ];
  const series = [4, 2, 3, 2];
  return (
    <div>
      <Sales
        card={card}
        column={column}
        row={row}
        title={"RecentOrder"}
        TopProduct={TopProduct}
        toptitle={"TopProduct"}
        options={options}
        labels={labels}
        series={series}
      />
    </div>
  );
};

export default Salescontaner;

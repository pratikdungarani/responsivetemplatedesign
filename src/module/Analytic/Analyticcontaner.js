import React from "react";
import Analytic from "./Analytic";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Sparkline from "../../coman/Sparklline/Sparkline";
import {
  pink,
  red,
  blue,
  green,
  lightGreen,
  orange,
  yellow,
} from "@mui/material/colors";
import CircleIcon from "@mui/icons-material/Circle";

const Analyticcontaner = () => {
  const pagevisit = [
    { title: "Home", path: "/app/home/", count: "7,616" },
    { title: "Resources", path: "/app/resources/", count: "6,923" },
    { title: "Integrations", path: "/integrations/paypal/", count: "5,228" },
    { title: "Partners", path: "/partners/our-partners/", count: "3,512" },
    { title: "Developers", path: "developers/docs/", count: "1,707" },
  ];
  const series = [5, 2, 4];
  const series2 = [
    {
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
    },
  ];
  const options2 = {
    chart: {
      type: "line",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true,
      },
    },

    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function (seriesName) {
            return "";
          },
        },
      },

      marker: {
        show: false,
      },
    },
  };
  const socialmedia = [
    {
      title: "Facebook",
      path: "Total: 322",
      count: "30.1%",
      icon: <FacebookIcon color="primary" />,
      arrow: <ArrowUpwardIcon sx={{ color: green[500] }} />,
      sparkine: (
        <Sparkline
          options2={options2}
          series2={series2}
          height={30}
          width={70}
        />
      ),
    },
    {
      title: "Twitter",
      path: "Total: 217",
      count: "21.6%",
      icon: <TwitterIcon sx={{ color: blue[500] }} />,
      arrow: <ArrowUpwardIcon sx={{ color: green[500] }} />,
      sparkine: (
        <Sparkline
          options2={options2}
          series2={series2}
          height={30}
          width={70}
        />
      ),
    },
    {
      title: "Youtube",
      path: "Total: 188",
      count: "-7.1%",
      icon: <YouTubeIcon sx={{ color: red[500] }} />,
      arrow: <ArrowDownwardIcon sx={{ color: red[500] }} />,
      sparkine: (
        <Sparkline
          options2={options2}
          series2={series2}
          height={30}
          width={70}
        />
      ),
    },
    {
      title: "Linkedin",
      path: "Total: 207",
      count: "11.9%",
      icon: <LinkedInIcon sx={{ color: blue[500] }} />,
      arrow: <ArrowUpwardIcon sx={{ color: green[500] }} />,
      sparkine: (
        <Sparkline
          options2={options2}
          series2={series2}
          height={30}
          width={70}
        />
      ),
    },
    {
      title: "Dribbble",
      path: "Total: 86",
      count: "-28.5%",
      icon: <AcUnitIcon sx={{ color: pink[500] }} />,
      arrow: <ArrowDownwardIcon sx={{ color: red[500] }} />,
      sparkine: (
        <Sparkline
          options2={options2}
          series2={series2}
          height={30}
          width={70}
        />
      ),
    },
  ];
  const Entrance = [
    {
      title: "United States of America",
      count: "37.61%",
      icon: <CircleIcon sx={{ color: blue[500], fontSize: 10 }} />,
    },
    {
      title: "Brazil",
      count: "16.79%",
      icon: <CircleIcon sx={{ color: green[500], fontSize: 10 }} />,
    },
    {
      title: "India",
      count: "12.42%",
      icon: <CircleIcon sx={{ color: yellow[500], fontSize: 10 }} />,
    },
    {
      title: "China",
      count: "9.85%",
      icon: <CircleIcon sx={{ color: orange[500], fontSize: 10 }} />,
    },
    {
      title: "Malaysia",
      count: "7.68%",
      icon: <CircleIcon sx={{ color: red[500], fontSize: 10 }} />,
    },
    {
      title: "Thailand",
      count: "5.11%",
      icon: <CircleIcon sx={{ color: red[500], fontSize: 10 }} />,
    },
  ];
  const options = {
    series: [5, 2, 4],
    dataLabels: {
      enabled: false,
    },
    labels: ["Daskops", "Tablets", "Mobiles"],

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
              // showAlways: true,
            },
          },
        },
      },
    },
  };
  const labels = [
    {
      label: "Daskops",
      count: "3561",
      icon: <CircleIcon sx={{ color: blue[500], fontSize: 10 }} />,
    },
    {
      label: "Tablets",
      count: "1443",
      icon: <CircleIcon sx={{ color: green[500], fontSize: 10 }} />,
    },
    {
      label: "Mobiles",
      count: "2463",
      icon: <CircleIcon sx={{ color: orange[500], fontSize: 10 }} />,
    },
  ];

  return (
    <>
      <Analytic
        pagevisit={pagevisit}
        socialmedia={socialmedia}
        Entrance={Entrance}
        region={"Entrance by region"}
        title={"Most visited pages"}
        subtitle={"Social media referrals"}
        options={options}
        labels={labels}
        series={series}
        series2={series2}
        options2={options2}
        type={"line"}
      />
    </>
  );
};

export default Analyticcontaner;

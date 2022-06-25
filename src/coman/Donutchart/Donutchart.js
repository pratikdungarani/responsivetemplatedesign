import React from "react";
import Chart from "react-apexcharts";
import { Box, Paper, Typography, ListItemIcon } from "@mui/material";
import useStyles from "./style.js";
import CircleIcon from "@mui/icons-material/Circle";
import {
  pink,
  red,
  blue,
  green,
  lightGreen,
  yellow,
} from "@mui/material/colors";

const Donutchart = ({ options, labels, series }) => {
  const classes = useStyles();
  // const labels = [
  //   {
  //     label: "Daskops",
  //     count: "3561",
  //     icon: <CircleIcon sx={{ color: yellow[500], fontSize: 10 }} />,
  //   },
  //   {
  //     label: "Tablets",
  //     count: "1443",
  //     icon: <CircleIcon sx={{ color: blue[500], fontSize: 10 }} />,
  //   },
  //   {
  //     label: "Mobiles",
  //     count: "2463",
  //     icon: <CircleIcon sx={{ color: green[500], fontSize: 10 }} />,
  //   },
  // ];

  // const options = {
  //   labels: ["Daskops", "Tablets", "Mobiles"],

  //   series: [5, 2, 4],
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   legend: {
  //     show: false,
  //   },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: "80px",
  //         labels: {
  //           show: true,
  //           total: {
  //             show: true,
  //             showAlways: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // };

  console.log("labels", labels);
  const data = {
    series: [5, 2, 4],
    dataLabels: {
      enabled: false,
    },
    labels: ["Daskops", "Tablets", "Mobiles"],

    plotOptions: {
      pie: {
        donut: {
          size: "80px",
          labels: {
            show: true,
            SessionDevice: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  };
  // const series = [5, 2, 4];
  const dataseries = [0, 0, 0];

  return (
    <>
      <Box className={classes.donut} component={Paper}>
        <Box className={classes.donut}>
          <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={200}
          />
        </Box>
        {labels.map((item) => {
          return (
            <>
              <Box className={classes.list}>
                <Box className={classes.icons}>
                  <Box>
                    <ListItemIcon className={classes.root}>
                      {item.icon}
                    </ListItemIcon>
                  </Box>
                  <Box className={classes.label}>
                    <Typography>{item.label}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography>{item.count}</Typography>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Donutchart;

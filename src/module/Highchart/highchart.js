import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Paper } from "@mui/material";
import { ClassNames } from "@emotion/react";
import useStyles from "./style";

const options = {
  title: {
    text: "",
  },
  chart: {
    type: "column",
  },

  xAxis: {
    categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
  },
  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: "Number of fruits",
    },
  },
  plotOptions: {
    column: {
      stacking: "normal",
    },
  },
  series: [
    {
      name: "John",
      data: [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 201) - 100,
      ],
      stack: "male",
    },
    {
      name: "Joe",
      data: [
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 31) + 50,
      ],
      stack: "male",
    },
    {
      name: "Jane",
      data: [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 201) - 100,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 201) - 100,
      ],
      stack: "female",
    },
    {
      name: "Janet",
      data: [
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 100) + 1,
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 31) + 50,
      ],
      stack: "female",
    },
  ],
};
const Highchart = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.main}>
      <HighchartsReact highcharts={Highcharts} options={options} />;
    </Paper>
  );
};

export default Highchart;

import React from "react";
import Chart from "react-apexcharts";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Box,
  ListItemIcon,
  Paper,
} from "@mui/material";
const Sparkline = ({ series2, options2, type, height, width }) => {
  return (
    <Box>
      {" "}
      <Chart
        options={options2}
        series={series2}
        type={type}
        height={height}
        width={width}
      />
    </Box>
  );
};

export default Sparkline;

import React from "react";
import useStyles from "./style";
import { Grid } from "@mui/material";
import Pagecontaner from "../../coman/page/pagecontaner";
import Donutchartcontaner from "../../coman/Donutchart/Donutchartcontaner";
import Map from "../../coman/Map/map";
import Highchart from "../Highchart/highchart";

const Analytic = ({
  pagevisit,
  socialmedia,
  title,
  subtitle,
  Entrance,
  region,
  options,
  labels,
  series,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container spacing={1} rowGap={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Grid container>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Pagecontaner Row={Entrance} title={region} />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Map />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Donutchartcontaner
              options={options}
              labels={labels}
              series={series}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Pagecontaner Row={pagevisit} title={title} />
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={3}>
            <Pagecontaner Row={socialmedia} title={subtitle} />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Highchart />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytic;

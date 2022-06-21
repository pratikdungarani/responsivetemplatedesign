import React from "react";
import useStyles from "./style";
import { Grid } from "@mui/material";
import Pagecontaner from "../../coman/page/pagecontaner";
const Analytic = ({ pagevisit, socialmedia, title, subtitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Grid container columnGap={1}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Pagecontaner Row={socialmedia} title={subtitle} />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
              <Pagecontaner Row={pagevisit} title={title} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytic;

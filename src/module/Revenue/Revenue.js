import React from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import useStyles from "./style";
import Highchart from "../Highchart/highchart";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { green, lightGreen } from "@mui/material/colors";
import Revenuechart from "../../coman/Revenuechart/Revenuechart";
const Revenue = () => {
  const classes = useStyles();

  return (
    <>
      <Grid component={Paper}>
        <Grid item xs={12} sm={12} md={10} lg={10}>
          <Grid container justifyContent="space-between" padding="10px 10px">
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box className={classes.title}>
                <Box className={classes.datesubtitle}>
                  <Typography className={classes.maintitle}>
                    Weekly Revenue
                  </Typography>
                  <Typography className={classes.datetitle}>
                    8 - 15 Jul, 2020
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Typography className={classes.maintitle} variant="h4">
                      $27,188.00
                    </Typography>
                  </Box>
                  <Box className={classes.growth}>
                    <Typography variant="h7">
                      {" "}
                      <ArrowUpwardIcon sx={{ color: green[500] }} />
                      17% growth from last week
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h7">
                      Total gross income figure based from the date range given
                      above.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5}>
              <Box className={classes.main}>
                <Box className={classes.chart}>
                  <Revenuechart />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box component={Paper}></Box>
    </>
  );
};

export default Revenue;

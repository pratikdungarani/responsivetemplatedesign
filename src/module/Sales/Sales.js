import React from "react";
import useStyles from "./style";
import { Grid } from "@mui/material";
import Revenue from "../Revenue/Revenue";
import Revenuechart from "../../coman/Revenuechart/Revenuechart";
import Cardreport from "../../coman/cardreport/cardreport";
import MaterialTabelcontaner from "../../coman/MaterialTabel/MaterialTabelcontaner";
import Donutchartcontaner from "../../coman/Donutchart/Donutchartcontaner";
import Highchart from "../Highchart/highchart";
import Pagecontaner from "../../coman/page/pagecontaner";
const Sales = ({
  card,
  column,
  row,
  title,
  TopProduct,
  toptitle,
  labels,
  options,
  series,
}) => {
  console.log("column123", labels);
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container spacing={1} rowGap={2}>
        <Grid container>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Grid container>
              <Revenue />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Grid container spacing={3}>
              {card?.map((item, index) => {
                return (
                  <>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <Cardreport
                        key={index}
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>

            {/* <Cardreport /> */}
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Pagecontaner Row={TopProduct} title={toptitle} />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Donutchartcontaner
              series={series}
              options={options}
              labels={labels}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Highchart />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <MaterialTabelcontaner column={column} row={row} title={title} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Sales;

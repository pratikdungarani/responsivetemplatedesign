import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./style";
import CustomCard from "../../coman/Card/CustomCard";
import MaterialTabelcontaner from "../../coman/MaterialTabel/MaterialTabelcontaner";
import Jointabelcontainer from "../../coman/Joinmember/jointabelcontainer";
import Targetcard from "../TargetCard/Targetcard";
import Highchart from "../Highchart/highchart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Pagecontaner from "../../coman/page/pagecontaner";
import Donutchart from "../../coman/Donutchart/Donutchart";
import Sparkline from "../../coman/Sparklline/Sparkline";
import { Paper } from "@material-ui/core";
const Dashboard = ({ companyData, row, column, title, options2, series2 }) => {
  const classes = useStyles();
  const theme = useTheme();

  console.log("companyData", column);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div
      className={classes.main}
      sx={{
        padding: isMobile ? "0px 15px" : "0px 25px",
      }}
    >
      <Grid container columnSpacing={2} className={classes.cardMain}>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Grid container spacing={2}>
            {companyData?.map((leaveData, index) => {
              return (
                <>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    <CustomCard
                      key={index}
                      title={leaveData.title}
                      money={leaveData.money}
                      company={leaveData.company}
                      count={leaveData.count}
                      icon={leaveData.icon}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Highchart />
          {/* <MaterialTabel /> */}
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Targetcard />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper>
                <Sparkline
                  series2={series2}
                  options2={options2}
                  type={"area"}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={1}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Jointabelcontainer />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <MaterialTabelcontaner row={row} column={column} title={title} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;

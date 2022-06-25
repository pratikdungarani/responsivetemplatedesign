import * as React from "react";
// Material UI
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Box,
  ListItemIcon,
} from "@mui/material";

//Internal
import useStyle from "./style";

const Cardreport = ({ title, count, icon }) => {
  const classes = useStyle();

  return (
    <Box className={classes.content}>
      <Card className={classes.leaveSingleCard}>
        <CardContent className={classes.cardContent}>
          <Box className={classes.maintitle}>
            <Box className={classes.icon}>{icon}</Box>
            <Box className={classes.count}>{title}</Box>
            <Box className={classes.title}>{count}</Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cardreport;

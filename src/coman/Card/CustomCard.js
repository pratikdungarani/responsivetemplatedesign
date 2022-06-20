import * as React from "react";
import PropTypes from "prop-types";
import Jointabelcontainer from "../Joinmember/jointabelcontainer";
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

const CustomCard = ({ title, money, subTitle, company, count, icon }) => {
  const classes = useStyle();

  return (
    <Box className={classes.content}>
      {/* <Grid item xs={12} sm={6} md={6} lg={4}> */}
      <Card className={classes.leaveSingleCard}>
        <CardContent className={classes.cardContent}>
          {/* <Box className={classes.icon}>{icon}</Box> */}
          <Box>
            <Typography className={classes.subTitle} variant="h6">
              {title}
            </Typography>
            <Typography className={classes.title} variant="h5">
              {money + "  " + count}
              <ListItemIcon>{icon}</ListItemIcon>
              <span></span>
            </Typography>
            <Typography className={classes.title} variant="h10">
              {company}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      {/* </Grid> */}
    </Box>
  );
};

export default CustomCard;

import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import useStyle from "./style";

const Targetcard = () => {
  const classes = useStyle();

  return (
    <Paper>
      <Box className={classes.main}>
        <Box className={classes.title}>
          <Typography>Monthly Target</Typography>
        </Box>

        <Box className={classes.maindiv}>
          <Box className={classes.maincircle}>
            <CircularProgress
              variant="determinate"
              value={80}
              className={classes.circle}
            />
          </Box>
          <Box>
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
              className={classes.persentage}
            >
              80%
            </Typography>
          </Box>
        </Box>

        <Box className={classes.subtitile}>
          <Typography>
            You need abit more effort to hit monthly target
          </Typography>
        </Box>
        <Box>
          <Button variant="contained">Learn More</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Targetcard;

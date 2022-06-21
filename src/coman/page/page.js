import React from "react";
import useStyle from "./style";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Typography,
  Paper,
  IconButton,
  Button,
  ListItemIcon,
} from "@mui/material";
const Page = ({ colum, Row, title }) => {
  const classes = useStyle();
  //   console.log("Column111111", colum, Raw);
  //   console.log("Raw", Raw);
  return (
    <div>
      {" "}
      <TableContainer component={Paper} className={classes.main}>
        <Box className={classes.title}>
          <Typography className={classes.title}>{title}</Typography>
          <Box className={classes.icon}></Box>
        </Box>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                {Row?.map((row, index) => {
                  // return()

                  return (
                    <Box className={classes.Addmember}>
                      <Box className={classes.membername}>
                        <Box>
                          <ListItemIcon>{row.icon}</ListItemIcon>

                          {/* <Avatar alt="Remy Sharp" src={row.icon} /> */}
                        </Box>
                        <Box className={classes.member}>
                          <Typography className={classes.subtitle}>
                            {row.title}
                          </Typography>
                          <Typography className={classes.paragraph}>
                            {row.path}
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Box className={classes.root}>
                          {row.count}
                          <span>
                            <ListItemIcon>{row.arrow}</ListItemIcon>
                          </span>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Page;

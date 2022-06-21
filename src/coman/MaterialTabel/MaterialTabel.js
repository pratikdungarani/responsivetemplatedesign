import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyle from "./style";

const MaterialTabel = ({ Employe, StringAvatar, stringToColor }) => {
  console.log("columns", Employe);
  const classes = useStyle();
  return (
    <div>
      <TableContainer component={Paper} className={classes.root}>
        <Box className={classes.title}>
          <Typography className={classes.subtitle}>
            Latest Transactions
          </Typography>
          <Box className={classes.icon}>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Employe?.map((item) => {
              return (
                <TableRow>
                  <TableCell>
                    <Box className={classes.Avatar}>
                      <Avatar
                        className={classes.Avataricon}
                        {...StringAvatar(`${item.Customer}`)}
                      ></Avatar>
                      <Box>{item.Customer}</Box>
                    </Box>
                  </TableCell>
                  <TableCell>{item.Date}</TableCell>
                  <TableCell>{item.Amount}</TableCell>
                  <TableCell>
                    <Box className={classes.Active}>
                      <span
                        className={
                          item.Status === "Active"
                            ? classes.active
                            : item.Status === "Pending"
                            ? classes.Pending
                            : classes.reject
                        }
                      >
                        {item.Status}
                      </span>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MaterialTabel;

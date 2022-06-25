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

const MaterialTabel = ({
  Employe,
  StringAvatar,
  stringToColor,
  row,
  column,
  title,
}) => {
  console.log("columns", column);
  const classes = useStyle();
  return (
    <div>
      <TableContainer component={Paper} className={classes.root}>
        <Box className={classes.title}>
          <Typography className={classes.subtitle}>{title}</Typography>
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
              {column.map((item) => {
                return <TableCell>{item.Label}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => {
              return (
                <>
                  <TableRow>
                    {column.map((column) => {
                      return (
                        <TableCell>
                          {column.field === "customer" ? (
                            <Box className={classes.Avatar}>
                              <Box>{row.image}</Box>
                              <Box className={classes.username}>
                                {row[column.field]}
                              </Box>
                            </Box>
                          ) : (
                            <Box>{row[column.field]}</Box>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MaterialTabel;

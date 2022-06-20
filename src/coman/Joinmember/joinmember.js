import React from "react";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Toolbar,
  Avatar,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  Button,
} from "@mui/material";
import user from "../../assets/image/thumb-1.jpg";
import MoreIcon from "@material-ui/icons/MoreVert";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import useStyle from "./style";

const Joinmember = ({ data }) => {
  const classes = useStyle();
  console.log("data", data);
  return (
    <div>
      <TableContainer component={Paper} className={classes.root}>
        <Box className={classes.title}>
          <Typography className={classes.title}>New Join Member</Typography>
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
          <TableBody>
            <TableRow>
              <TableCell>
                {data?.map((item, index) => {
                  // console.log("item", item);
                  return (
                    <Box className={classes.Addmember}>
                      <Box className={classes.membername}>
                        <Box>
                          <Avatar alt="Remy Sharp" src={item.user.user} />
                        </Box>
                        <Box className={classes.member}>
                          <Typography>{item.title}</Typography>
                          <Typography>{item.degree}</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Button variant="outlined" className={classes.button1}>
                          <PersonAddAltIcon className={classes.Addicon} />
                          Add
                        </Button>
                      </Box>
                    </Box>
                  );
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* {console.log("columns", columns)}
  <MaterialTable columns={columns} data={data} title={title} /> */}
    </div>
  );
};

export default Joinmember;

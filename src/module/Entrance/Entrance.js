import React from "react";
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
} from "@mui/material";
import useStyle from "./style";

const Entrance = () => {
  const classes = useStyle();

  return (
    <div>
      {" "}
      <TableContainer component={Paper} className={classes.main}>
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
                  console.log("item.user.user", item.user);
                  return (
                    <Box className={classes.Addmember}>
                      <Box className={classes.membername}>
                        <Box>
                          <Avatar alt="Remy Sharp" src={item.user} />
                        </Box>
                        <Box className={classes.member}>
                          <Typography className={classes.subtitle}>
                            {item.title}
                          </Typography>
                          <Typography className={classes.paragraph}>
                            {item.degree}
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Button variant="outlined" className={classes.root}>
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
    </div>
  );
};

export default Entrance;

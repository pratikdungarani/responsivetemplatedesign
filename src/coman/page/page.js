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
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
const Page = ({ colum, Row, title }) => {
  const classes = useStyle();
  //   console.log("Column111111", colum, Raw);
  //   console.log("Raw", Raw);
  const [age, setAge] = React.useState("This Week");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {" "}
      <TableContainer component={Paper} className={classes.main}>
        <Box className={classes.title}>
          <Typography className={classes.tag}>{title}</Typography>
          {title === "TopProduct" ? (
            <Box>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Time</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"This Week"}>This Week</MenuItem>
                  <MenuItem value={"This Month<"}>This Month</MenuItem>
                  <MenuItem value={"This Year"}>This Year</MenuItem>
                </Select>
              </FormControl>
            </Box>
          ) : (
            ""
          )}
        </Box>
        {title === "Social media referrals" ? (
          <>
            <Table>
              <TableBody>
                {Row?.map((row, index) => {
                  // return()

                  return (
                    <TableRow>
                      <TableCell>
                        <Box className={classes.Addmember}>
                          <Box className={classes.membername}>
                            <Box>
                              <ListItemIcon>{row.icon}</ListItemIcon>
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
                              <Box>
                                <span>{row.sparkine}</span>
                              </Box>
                              {row.count}
                              <span>
                                <ListItemIcon>{row.arrow}</ListItemIcon>
                              </span>
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        ) : title === "TopProduct" ? (
          <>
            <Table>
              <TableBody>
                {Row?.map((row, index) => {
                  // return()

                  return (
                    <TableRow>
                      <TableCell>
                        <Box className={classes.Addmember}>
                          <Box className={classes.membername}>
                            <Box>
                              {/* <ListItemIcon>{row.icon}</ListItemIcon> */}

                              <Avatar
                                alt="Remy Sharp"
                                src={row.icon}
                                variant="square"
                              />
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
                            <Box className={classes.type}>
                              <Typography variant="h8">{row.type}</Typography>
                            </Box>
                            <Box className={classes.root}>
                              <Box>
                                <span>{row.sparkine}</span>
                              </Box>
                              {row.count}
                              <span>
                                <ListItemIcon>{row.arrow}</ListItemIcon>
                              </span>
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        ) : title === "Entrance by region" ? (
          <>
            <Table>
              <TableBody>
                {Row?.map((row, index) => {
                  // return()

                  return (
                    <TableRow>
                      <TableCell>
                        <Box className={classes.Addmember}>
                          <Box className={classes.membername}>
                            <Box className={classes.regionicon}>
                              <ListItemIcon>{row.icon}</ListItemIcon>
                            </Box>
                            <Box className={classes.regionmember}>
                              <Typography className={classes.paragraph}>
                                {row.title}
                              </Typography>
                            </Box>
                          </Box>

                          <Box>
                            <Box className={classes.regioncount}>
                              {row.count}
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        ) : (
          <>
            <Table>
              <TableBody>
                {Row?.map((row, index) => {
                  // return()

                  return (
                    <TableRow>
                      <TableCell>
                        <Box className={classes.Addmember}>
                          <Box className={classes.membername}>
                            <Box className={classes.member}>
                              <Typography className={classes.subtitle}>
                                {row.title}
                              </Typography>
                              <Typography className={classes.paragraph}>
                                {row.path}
                              </Typography>
                            </Box>
                          </Box>

                          <Box className={classes.root}>
                            {row.count}
                            <span>
                              <ListItemIcon>{row.arrow}</ListItemIcon>
                            </span>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        )}
      </TableContainer>
    </div>
  );
};

export default Page;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  donut: {},
  main: {},
  list: {
    margin: "20px 0px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  icons: {
    display: "flex",
  },
  label: {
    marginLeft: "-32px",
  },
  root: {
    marginBottom: "24px",
    "&.MuiIcon-root": {
      height: "5px",
    },
  },
}));

export default useStyles;

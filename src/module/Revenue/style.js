import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    padding: "20px 20px",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "10px",
  },
  maintitle: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  datetitle: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightMedium,
      color: "#8d8d8d",

      //   fontWeight: theme.typography.fontWeightBold,
    },
  },
  datesubtitle: {
    marginBottom: "90px",
  },
  growth: {
    color: "green",
    margin: "15px 0px",
  },
}));

export default useStyles;

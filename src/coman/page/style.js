import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    // marginTop: "20px",
  },
  title: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightBold,
    },
    paddingTop: "16px",
    marginLeft: "10px",
    paddingBottom: "0px",
    display: "flex",
    justifyContent: "space-between",
  },
  tag: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: "10px",
    },
  },
  tab: {
    padding: "5px",
    backgroundColor: "lightgreen",
  },
  regionmember: {
    marginLeft: "-38px",
  },
  member: {
    marginLeft: "10px",
    color: "#8d8d8d",
  },
  type: {
    marginLeft: "20px",
  },
  Addmember: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "5px",
  },
  membername: {
    display: "flex",
    justifyContent: "space-between",
  },
  paragraph: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  subtitle: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightBold,
      color: "black",
    },
  },
  regioncount: {
    fontWeight: theme.typography.fontWeightBold,

    // "&.MuiButton-root": {
    //   backgroundColor: "#f0f7ff",
    //   color: "blue",
    //   border: "0px ",
    //   width: "100%",
    // },
  },

  Addicon: {
    height: "20px",
    width: "20px",
    marginRight: "10px",
  },
  regionicon: {
    marginLeft: "20px",
  },
  root: {
    display: "flex",
  },
}));

export default useStyles;

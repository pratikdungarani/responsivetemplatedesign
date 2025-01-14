import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "20px",
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
  icon: {
    marginRight: "20px",
  },

  tab: {
    padding: "5px",
    backgroundColor: "lightgreen",
  },
  member: {
    marginLeft: "10px",
    color: "#8d8d8d",
  },
  Addmember: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
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
      fontWeight: theme.typography.fontWeightMedium,
      color: "black",
    },
  },
  root: {
    "&.MuiButton-root": {
      backgroundColor: "white",
      color: "#8d8d8d",
      borderRadius: "12px",
      border: "1px solid #ededed",
    },
  },

  Addicon: {
    height: "20px",
    width: "20px",
    marginRight: "10px",
  },
}));

export default useStyles;

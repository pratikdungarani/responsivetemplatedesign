import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
  title: {
    paddingTop: "16px",
    marginLeft: "10px",
    paddingBottom: "0px",
    display: "flex",
    justifyContent: "space-between",
  },
  subtitle: {
    "&.MuiTypography-root": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  icon: {
    marginRight: "20px",
  },
  username: {
    marginLeft: "10px",
  },
  Avatar: {
    display: "flex",
    alignItems: "center",
  },
  Avataricon: {
    marginRight: "20px",

    "& .css-2s90m6-MuiAvatar-root": {
      width: "30px",
      height: "30px",
    },
  },

  tab: {
    padding: "5px",
  },
  active: {
    backgroundColor: "#04d1821a",
    padding: "4px",
    color: "green",
    borderRadius: "4px",
  },
  reject: {
    backgroundColor: "#fff1f0",
    padding: "4px",
    color: "Red",
    borderRadius: "4px",
  },
  Pending: {
    backgroundColor: "#f0f7ff",
    padding: "4px",
    color: "blue",
    borderRadius: "4px",
  },
}));

export default useStyles;

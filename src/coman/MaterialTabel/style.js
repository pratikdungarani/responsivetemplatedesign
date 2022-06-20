import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100vw",
    // height: "100vh",
    marginTop: "20px",
  },
  title: {
    paddingTop: "16px",
    marginLeft: "10px",
    paddingBottom: "0px",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: "20px",
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
  // background-color: $primary-background;
  // @include FontStyle(25, 30, 400);
  // border:1px solid $borderColor;
  tab: {
    padding: "5px",
  },
  active: {
    backgroundColor: "lightgreen",
    padding: "4px",
    color: "green",
    borderRadius: "4px",
  },
  reject: {
    backgroundColor: "lightblue",
    padding: "4px",
    color: "blue",
    borderRadius: "4px",
  },
}));

export default useStyles;

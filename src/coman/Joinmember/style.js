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
  //   Avatar: {
  //     display: "flex",
  //     alignItems: "center",
  //   },
  //   Avataricon: {
  //     "& .css-2s90m6-MuiAvatar-root": {
  //       width: "30px",
  //       height: "30px",
  //     },

  // background-color: $primary-background;
  // @include FontStyle(25, 30, 400);
  // border:1px solid $borderColor;
  tab: {
    padding: "5px",
    backgroundColor: "lightgreen",
  },
  member: {
    marginLeft: "10px",
  },
  Addmember: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
  },
  membername: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  button1: {
    color: "green",
    border: "1px solid black",
    borderRadius: "6px",
  },
  Addicon: {
    height: "20px",
    width: "20px",
    marginRight: "10px",
    // color: "black",
  },
}));

export default useStyles;

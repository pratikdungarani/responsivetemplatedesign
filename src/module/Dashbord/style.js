import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    "& .css-o1xwpy-MuiGrid-root": {
      // height: "500px",
      // backgroundColor: "black",
      // height: "60px",
      // position: "relative",
      // margin: theme.spacing(1, 0),
      // alignItems: "center",
      // borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      marginTop: "80px",
      backgroundColor: theme.palette.common.backgrondcolor,
      padding: "0px 30px",
    },
    cardMain: {
      padding: theme.spacing(3),
    },
  },
}));

export default useStyles;

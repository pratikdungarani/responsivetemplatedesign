import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  main: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "250px",
    padding: "20px",
    marginTop: "10px",
  },
  title: {
    textAlign: "center",
  },
  persentage: {
    position: "absolute",
    top: "15px",
    left: "50%",
    textAlign: "center",
  },
  maindiv: {
    position: "relative",
  },
  maincircle: {
    position: "absolute",
    left: "39%",
    top: "30px",
  },
  subtitile: {
    marginTop: "40px",
  },
  circle: {
    "& 	.MuiCircularProgress-svg": {
      top: "100px",
      left: "50%",
      height: "100px",
      width: "100px",
    },
  },
}));

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    commonCard: {
      width: "20vw",
    },
    cardContent: {
      display: "flex",
      borderRadius: ".625rem",
      marginTop: "10px",
    },
    title: {
      marginTop: "1rem!important",
    },
  };
});
export default useStyle;

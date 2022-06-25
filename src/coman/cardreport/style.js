import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => {
  return {
    maintitle: {
      textAlign: "center",
    },
    count: {
      margin: "10px 0px",
    },
    leaveSingleCard: {
      padding: "20px 0px",
    },
    commonCard: {
      width: "20vw",
    },
    cardContent: {},
  };
});
export default useStyle;

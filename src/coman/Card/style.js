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
      "&.MuiTypography-root": {
        fontWeight: theme.typography.fontWeightBold,
        marginTop: "1rem!important",
      },
    },
    company: {
      marginTop: "1rem!important",
    },
    subTitle: {
      "&.MuiTypography-root": {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
  };
});
export default useStyle;

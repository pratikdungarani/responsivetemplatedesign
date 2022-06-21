import React from "react";
import Analytic from "./Analytic";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Analyticcontaner = () => {
  const pagevisit = [
    { title: "Home", path: "/app/home/", count: "7,616" },
    { title: "Resources", path: "/app/resources/", count: "6,923" },
    { title: "Integrations", path: "/integrations/paypal/", count: "5,228" },
    { title: "Partners", path: "/partners/our-partners/", count: "3,512" },
    { title: "Developers", path: "developers/docs/", count: "1,707" },
  ];
  const socialmedia = [
    {
      title: "Facebook",
      path: "Total: 322",
      count: "30.1%",
      icon: <FacebookIcon />,
      arrow: <ArrowUpwardIcon />,
    },
    {
      title: "Twitter",
      path: "Total: 217",
      count: "21.6%",
      icon: <TwitterIcon />,
      arrow: <ArrowUpwardIcon />,
    },
    {
      title: "Youtube",
      path: "Total: 188",
      count: "-7.1%",
      icon: <YouTubeIcon />,
      arrow: <ArrowDownwardIcon />,
    },
    {
      title: "Linkedin",
      path: "Total: 207",
      count: "11.9%",
      icon: <LinkedInIcon />,
      arrow: <ArrowUpwardIcon />,
    },
    {
      title: "Dribbble",
      path: "Total: 86",
      count: "-28.5%",
      icon: <AcUnitIcon />,
      arrow: <ArrowUpwardIcon />,
    },
  ];
  return (
    <>
      <Analytic
        pagevisit={pagevisit}
        socialmedia={socialmedia}
        title={"Most visited pages"}
        subtitle={"Social media referrals"}
      />
    </>
  );
};

export default Analyticcontaner;

import React, { useState } from "react";
import Joinmember from "./joinmember";
import user from "../../assets/image/thumb-1.jpg";

const Jointabelcontainer = () => {
  const [membername, setmembername] = useState([
    { title: "Terrance Moreno", degree: "Software Engineer", user: { user } },
    { title: "Ron Vargas", degree: "UI/UX Designer", user: { user } },
    { title: "Luke Cook", degree: "HR Executive", user: { user } },
    { title: "Joyce Freeman", degree: "Frontend Developer", user: { user } },

    {
      title: "Samantha Phillips",
      degree: "Compliance Manager",
      user: { user },
    },
  ]);

  return (
    <div>
      <Joinmember data={membername} />
    </div>
  );
};

export default Jointabelcontainer;

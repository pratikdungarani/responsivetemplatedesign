import React, { useState } from "react";
import Joinmember from "./joinmember";
import user from "../../assets/image/thumb-1.jpg";
import user1 from "../../assets/image/thumb-2.jpg";
import user2 from "../../assets/image/thumb-3.jpg";
import user3 from "../../assets/image/thumb-4.jpg";
import user4 from "../../assets/image/thumb-5.jpg";
console.log("user1", user1);
console.log("user", user);
const Jointabelcontainer = () => {
  const [membername, setmembername] = useState([
    { title: "Terrance Moreno", degree: "Software Engineer", user: `${user}` },
    { title: "Ron Vargas", degree: "UI/UX Designer", user: `${user1}` },
    { title: "Luke Cook", degree: "HR Executive", user: `${user2}` },
    { title: "Joyce Freeman", degree: "Frontend Developer", user: `${user3}` },

    {
      title: "Samantha Phillips",
      degree: "Compliance Manager",
      user: `${user4}`,
    },
  ]);

  return (
    <div>
      <Joinmember data={membername} />
    </div>
  );
};

export default Jointabelcontainer;

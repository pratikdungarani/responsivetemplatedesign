import React, { useState } from "react";
import MaterialTabel from "./MaterialTabel";
const MaterialTabelcontaner = ({ column, row, title }) => {
  const [employe, setEmploye] = useState([
    {
      Customer: "Clayton Bates",
      Date: "8 May 2020",
      Amount: "	$137.00",
      Status: "Active",
    },
    {
      Customer: "Gabriel Frazier",
      Date: "6 May 2020  ",
      Amount: "$322.00",
      Status: "Pending",
    },
    {
      Customer: "Debra Hamilton",
      Date: "	1 May 2020",
      Amount: "$543.00",
      Status: "Reject",
    },
    {
      Customer: "Stacey Ward",
      Date: "28 April 2020",
      Amount: "$876.00",
      Status: "Active",
    },
  ]);
  console.log("employe", employe);
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }
  const StringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };
  return (
    <div>
      <MaterialTabel
        column={column}
        row={row}
        Employe={employe}
        title={title}
        StringAvatar={StringAvatar}
        stringToColor={stringToColor}
      />
    </div>
  );
};

export default MaterialTabelcontaner;

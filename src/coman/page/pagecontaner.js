import React, { useState } from "react";
import Page from "./page";
const Pagecontaner = ({ Row, title }) => {
  return (
    <div>
      <Page Row={Row} title={title} />
    </div>
  );
};

export default Pagecontaner;

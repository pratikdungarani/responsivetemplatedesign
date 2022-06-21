import React, { useState } from "react";
import Page from "./page";
const Pagecontaner = ({ Row, title, subtitle }) => {
  return (
    <div>
      <Page Row={Row} title={title} subtitle={subtitle} />
    </div>
  );
};

export default Pagecontaner;

import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const swipe = () => {
  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
    </>
  );
};

export default swipe;

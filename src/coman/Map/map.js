import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Box, Paper } from "@mui/material";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const Map = () => {
  return (
    <Box component={Paper}>
      <ComposableMap style={{ height: "378px", width: "100%" }}>
        <Geographies geography={geoUrl} fill="#D6D6DA" stroke="#FFFFFF">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </Box>
  );
};

export default Map;

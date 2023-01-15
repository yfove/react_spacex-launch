import React, { useState, useEffect } from "react";
import LaunchCard from "../atoms/LaunchCard.js";

const ListOfSpaceXLaunches = ({ spacexData }) => {
  return (
    <>
      {spacexData.length > 0 &&
        spacexData.map((data) => (
          <LaunchCard launchData={data} key={data.flight_numbers} />
        ))}
    </>
  );
};

export default ListOfSpaceXLaunches;

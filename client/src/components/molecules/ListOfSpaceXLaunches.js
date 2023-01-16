import React, { useState, useEffect } from "react";
import LaunchCard from "../atoms/LaunchCard.js";

const ListOfSpaceXLaunches = ({ spacexData }) => {
  const upcomingLaunches = spacexData.filter(
    (launch) => new Date(launchl.date_local) > new Date()
  );

  return (
    <>
      {upcomingLaunches.length > 0 &&
        upcomingLaunches.map((data) => (
          <LaunchCard launchData={data} key={data.flight_number} />
        ))}
    </>
  );
};

export default ListOfSpaceXLaunches;

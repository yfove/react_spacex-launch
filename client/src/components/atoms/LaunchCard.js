import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LaunchCard = ({ launchData }) => {
  const launchDate = {
    year: launchData.date_local.split("-")[0],
    month: launchData.date_local.split("-")[1],
    day: launchData.date_local.split("-")[2].split("T")[0],
    time: launchData.date_local.split("-")[2].split("T")[1],
  };
  return (
    <LaunchCardContainer>
      <h1>{launchData.name}</h1>
      <p>{launchData.flight_number}</p>
      <p>{launchDate.time}</p>
    </LaunchCardContainer>
  );
};

export default LaunchCard;

const LaunchCardContainer = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 0;
`;

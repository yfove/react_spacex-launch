import "./App.css";
import React, { useState, useEffect } from "react";
import ListOfSpaceXLaunches from "./components/molecules/ListOfSpaceXLaunches";

function App() {
  const [spacexData, setSpacexData] = useState([]);

  const getSpacexData = async () => {
    const response = await fetch("https://api.spacexdata.com/latest/launches");
    const data = await response.json();
    setSpacexData(data);
  };

  useEffect(() => {
    getSpacexData();
  }, []);

  return (
    <div className="App">
      <h1>SpaceX Launch Information</h1>
      {spacexData.length > 0 && <ListOfSpaceXLaunches spacexData={spacexData} />}
    </div>
  );
}

export default App;

// https://github.com/r-spacex/SpaceX-API

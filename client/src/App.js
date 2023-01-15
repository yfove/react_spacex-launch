import "./App.css";
import React, { useState, useEffect } from "react";

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
      <p>{JSON.stringify(spacexData)}</p>
    </div>
  );
}

export default App;

// https://github.com/r-spacex/SpaceX-API

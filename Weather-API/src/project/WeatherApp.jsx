import React, { useState } from "react";
import InfoBox from "./InfoBox";
import Boxcomp from "./box";
import { Container, Typography } from "@mui/material";

const WeatherApp = () => {
  const [weather, setWeather] = useState({
    
  });

  const updateInfo = (newInfo) => {
    setWeather(newInfo);
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Weather App
      </Typography>
      <Boxcomp updateInfo={updateInfo} />
      <InfoBox info={weather} />
    </Container>
  );
};

export default WeatherApp;

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import "./infoBox.css";

const InfoBox = ({ info }) => {
  const COLD_URL =
    "https://static.vecteezy.com/system/resources/previews/046/934/613/non_2x/winter-forest-footer-on-transparent-background-free-png.png";
  const HOT_URL =
    "https://media.istockphoto.com/id/1150050227/photo/heat-wave-of-extreme-sun-and-sky-background-hot-weather-with-global-warming-concept.jpg?s=612x612&w=0&k=20&c=EjBSIEDX39FRrARa7xiZyJtoXdgl3mePScIEQq9iW1U=";
  const RAIN_URL =
    "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-a-tree-on-a-meadow-during-rainy-weather-image_15679740.jpg";
  const NORMAL_URL =
    "https://media.istockphoto.com/id/502425362/photo/road-lane-and-deep-morning-sky.jpg?s=612x612&w=0&k=20&c=yEYwVQ6-OaLAs1kVZAmuLMzS19buIsCb2dkd1OA8M1M=";

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
          sx={{ height: 160 }}
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temp > 25
              ? HOT_URL
              : info.temp < 15
              ? COLD_URL
              : NORMAL_URL
          }
          title="Weather"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p style={{ fontWeight: "bold" }}>Temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}&deg;C</p>
            <p>Max Temp: {info.tempMax}&deg;C</p>
            <p>Min Temp: {info.tempMin}&deg;C</p>
            <p>
              The weather is described as <b>{info.weather}</b> and it feels
              like {""}
              <b>{info.feelsLike}&deg;C</b>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InfoBox;

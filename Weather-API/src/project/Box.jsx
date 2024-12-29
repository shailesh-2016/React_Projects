import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import "./box.css";

const Boxcomp = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ab8a9ac7513239bf48c6545d55b0ffc4";

  const WeatherInfo = async () => {
    try {
      const res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) {
        throw new Error("City not found");
      }
      const jsonRes = await res.json();
      let result = {
        city: city.toUpperCase(),
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feelsLike: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(""); 
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newInfo = await WeatherInfo();
      updateInfo(newInfo);
      setCity("");
      setError(""); 
    } catch (error) {
      setError("No place found in our API!");
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </Box>
  );
};

export default Boxcomp;

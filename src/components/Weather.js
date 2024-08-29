import { React, useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import WeatherForcast from './WeatherForcast';
import WeatherBackground from './WeatherBackground';



function Weather() {
  const API_KEY = "621d299a0507443597752427241908";
  const [location, setLocation] = useState('Kerala');
  const [forcast, setForcast] = useState(null);
  const [weathercondition, setWeatherCondition] = useState('');
  

  const getWeather = async () => {
    const API_FORCAST = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=10&aqi=yes&alerts=yes`;

    try {
      const forcast_response = await axios.get(API_FORCAST);
      setForcast(forcast_response.data);
      setWeatherCondition(forcast_response.data.current.condition.text);
    } catch (e) {
      console.error("Error", e);
      alert('Location not Found, Please  try another location !!');
    }
  };

  useEffect(() => {
    getWeather();
  }, [location]);

  const locationHandler = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className='container'>
      <SearchBar onSearch={locationHandler} />
      <CurrentWeather weatherData={forcast} />
      <WeatherForcast forcast_data={forcast} />
      <WeatherBackground condition={weathercondition} />
      
    </div>
  );
}

export default Weather;

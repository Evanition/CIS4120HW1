import React from 'react';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import './App.css';

const App = () => {
  const weatherData = {
    current: {
      temp: 73,
      weather: [{ description: 'Thunderstorm', icon: '11d' }]
    },
    hourly: [
      { dt: 1, temp: 61, weather: [{ description: 'Cloudy' }] },
      { dt: 2, temp: 64, weather: [{ description: 'Rain' }] },
      { dt: 3, temp: 67, weather: [{ description: 'Thunder' }] },
      { dt: 4, temp: 68, weather: [{ description: 'Thunder' }] },
      { dt: 5, temp: 70, weather: [{ description: 'Cloudy' }] },
      { dt: 6, temp: 71, weather: [{ description: 'Cloudy' }] },
      { dt: 7, temp: 72, weather: [{ description: 'Sunny' }] },
      { dt: 8, temp: 72, weather: [{ description: 'Sunny' }] },
      { dt: 9, temp: 71, weather: [{ description: 'Sunny' }] },
      { dt: 10, temp: 70, weather: [{ description: 'Sunny' }] },
      { dt: 11, temp: 70, weather: [{ description: 'Sunny' }] }
    ]
  };

  return (
    <div className="weather-app">
      <CurrentWeather current={weatherData.current} />
      <HourlyForecast hourly={weatherData.hourly} />
    </div>
  );
};

export default App;

import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiThunderstorm } from 'weather-icons-react';

const CurrentWeather = ({ current }) => {
  // Function to map the weather description to an icon
  const renderWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'sunny':
        return <WiDaySunny size={64} color='#f39c12' />;
      case 'cloudy':
        return <WiCloudy size={64} color='#7f8c8d' />;
      case 'rain':
        return <WiRain size={64} color='#3498db' />;
      case 'thunderstorm':
        return <WiThunderstorm size={64} color='#e74c3c' />;
      default:
        return <WiCloudy size={64} color='#7f8c8d' />; // Fallback icon
    }
  };

  return (
    <div className="current-weather">
      <div className="temp-toggle">
        <button>°C</button>
        <button>°F</button>
      </div>
      <div className="temp-info">
        <h1>{current.temp}°</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        {renderWeatherIcon(current.weather[0].description)}
        <p>{current.weather[0].description}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;

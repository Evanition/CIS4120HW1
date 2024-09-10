import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiThunderstorm } from 'weather-icons-react';

// Function to interpolate color between two hex values
const interpolateColor = (minTemp, maxTemp, currentTemp) => {
  const coldColor = [52, 152, 219]; // Blue color (RGB for #3498db)
  const hotColor = [231, 76, 60];   // Red color (RGB for #e74c3c)

  // Find ratio between the temperature and the range
  const ratio = (currentTemp - minTemp) / (maxTemp - minTemp);

  // Interpolate between cold and hot colors
  const r = Math.round(coldColor[0] * (1 - ratio) + hotColor[0] * ratio);
  const g = Math.round(coldColor[1] * (1 - ratio) + hotColor[1] * ratio);
  const b = Math.round(coldColor[2] * (1 - ratio) + hotColor[2] * ratio);

  return `rgb(${r},${g},${b})`;
};

const HourlyForecast = ({ hourly }) => {
  // Calculate the min and max temperature from the forecast data
  const minTemp = Math.min(...hourly.map((hour) => hour.temp));
  const maxTemp = Math.max(...hourly.map((hour) => hour.temp));

  // Function to render the appropriate weather icon
  const renderWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'sunny':
        return <WiDaySunny size={32} color='#f39c12' />;
      case 'cloudy':
        return <WiCloudy size={32} color='#7f8c8d' />;
      case 'rain':
        return <WiRain size={32} color='#3498db' />;
      case 'thunderstorm':
        return <WiThunderstorm size={32} color='#e74c3c' />;
      default:
        return <WiCloudy size={32} color='#7f8c8d' />;
    }
  };

  // Function to generate the inline style for the temperature bar
  const getBarStyle = (temp) => {
    const widthPercentage = ((temp - minTemp) / (maxTemp - minTemp)) * 100;
    const backgroundColor = interpolateColor(minTemp, maxTemp, temp);

    return {
      width: `${widthPercentage}%`,
      backgroundColor,
      height: '20px',
      borderRadius: '5px',
    };
  };

  return (
    <div className="hourly-forecast">
      {hourly.map((hour, index) => (
        <div className="hour-row" key={index}>
          <div>{index + 1} AM</div>
          <div>{renderWeatherIcon(hour.weather[0].description)}</div>
          <div>{hour.temp}°</div>
          <div className="temp-bar">
            <div className="bar" style={getBarStyle(hour.temp)}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;

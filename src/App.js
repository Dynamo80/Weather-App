import './App.css';
import React, { useState } from 'react';

function WeatherApp( {weather} ) {
  if (!weather) return null;
    return (
      <div>
      <h1>{weather.name}</h1>
      <p>{Math.round(weather.main.temp)} Degree Celsius</p>
      <p>{weather.weather[0].description}</p>
      </div>
    )
  }
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const apiKey = 'API KEY HERE';

  const fetch_weather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setCity('');
      }
      else {
        alert('City Not Found!!!');
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='App'>
      <h1>Weather App</h1>
      <input type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={fetch_weather}>Get Weather</button>
      <WeatherApp weather={weather}/>
    </div>
  )
}


export default App;

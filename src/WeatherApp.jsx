import { useWeatherHook } from "./fetchWeatherHook/WeatherHook.jsx";
import './Style Weather app/WeatherApp.css';

function WeatherApp() {

  const { city, dataWeather, error, handleChangeCity, handleSubmit } = useWeatherHook() 
  const difKelvin = 273.15


  return (
    <div className='container'>
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={city}
        onChange={handleChangeCity}
        aria-label='Enter city name' 
        />
        <button className='search_button' type='submit'>Search</button>
      </form>

      {error && <p className='error'>{error}</p>}

      {
        dataWeather && (
          <div>
            <h2>{dataWeather.name}</h2>
            <p>Temperature: {parseInt(dataWeather.main.temp - difKelvin)}°C</p>
            <p>Meteorological Condition: {dataWeather.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`} alt="weather icon"/>
          </div>
        )
      }
    </div>
  );
}

export default WeatherApp

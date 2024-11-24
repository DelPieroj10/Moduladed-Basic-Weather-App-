import { fetchWeatherData } from '../HelperWeather/weatherData.js'
import { useState } from 'react';

export const useWeatherHook = () => {

  const [city, setCity] = useState('')
  const [dataWeather, setDataWeather] = useState(null)
  const [error, setError] = useState (null);

	const handleChangeCity = (e) => setCity(e.target.value);
 
	const handleSubmit	= async (e) => {
		e.preventDefault();
      if(city.length > 0) {
				try {
					const data = await fetchWeatherData(city);
					
						setDataWeather(data);
  
				} catch (error) {
					setError('Failed to fetch weather data.');					
				}
			} 
	};
      
  return {
		city,
    dataWeather,
		error,
		handleChangeCity,
    handleSubmit
  };
};
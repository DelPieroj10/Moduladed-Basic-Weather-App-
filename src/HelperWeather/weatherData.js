const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'a188a658e2db61b031d42562a906be39'


export const fetchWeatherData = async (city) => {
  console.log("fetchWeatherData called with city:", city); 
  try {
    const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
 		console.log('Data received from API:', data); 
    return data;
  } catch (error) {
     console.error('Error fetching weather data:', error);
     throw error; 
  }    
};

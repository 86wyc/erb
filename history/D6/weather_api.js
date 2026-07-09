const apiUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';
function getata() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Example: Extract temperature readings
      const temperatureData = data.temperature.data;
      temperatureData.forEach(location => {
        console.log(`Location: ${location.place}, Temperature: ${location.value}°C`);
      });
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
getata();
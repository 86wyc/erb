

const apiUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';


function getata(userLocation) {
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
      let found = false;

      temperatureData.forEach(loc => {
        if (loc.place.toLowerCase() === userLocation.toLowerCase()) {
          console.log(`Location: ${loc.place}, Temperature: ${loc.value}°C`);
          found = true;
        }
      });

      if (!found) {
        console.log(`The name "${userLocation}" you have entered is invalid.`)

      }
    })
    .catch(error => {
      console.error(`Error fetching weather data:`, error);
    });
}


// const userLocation = `Sai Kung`;
const userLocation = `Tsuen Wan Ho Koon`;

getata(userLocation);


//readline.createinterface

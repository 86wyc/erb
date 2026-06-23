const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const apiUrl = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';

function getTemp(place) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperatureData = data.temperature.data;
            let existed = false;
            for (i of temperatureData) {
                if (i.place.toLowerCase() == place) {
                    console.log(`The ${i.place}'s temperature is ${i.value} °C`);
                    existed = true;
                    break;
                }
            };
            if (existed == false) console.log(`Location ${place} is not found pls retry !`);
            promptUser();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            promptUser();
        });

}
function promptUser() {
    rl.question("Input the Location: ", (Input) => {
        if (Input.toLowerCase() === 'quit') {
            rl.close();
            return;
        }
        getTemp(Input.toLowerCase());
    });
}
promptUser();
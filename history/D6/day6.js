'use strict';
var request = require('request');

function getData() {
    var url = `http://localhost:8000/nvda-data.json`;

    request.get({
        url: url,
        json: true,
        headers: {
            'User-Agent': 'request'
        }
    }, (err, res, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (res.statusCode !== 200) {
            console.log('Status:', res.statusCode);
        } else {
            const metaData = data['Meta Data'];
            console.log(`Symbol: ${metaData['2. Symbol']}`);

            const timeSeries = data['Monthly Adjusted Time Series'];
            const years2026Data = [];

            for (const date in timeSeries) {
                if (date.startsWith('2026')) {
                    const dailyData = timeSeries[date];
                    years2026Data.push({
                        date: date,
                        high: dailyData['2. high'],
                        low: dailyData['3. low']
                    });
                }
            }

            console.log(`Found ${years2026Data.length} entries for 2026:`);
            years2026Data.forEach(entry => {
                console.log(`Date: ${entry.date}, High: ${entry.high}, Low: ${entry.low}`);
            });
        }
    });
}

getData();
// use-case-1.js
const API_KEY = '5b697f5406f35ef37ee5ea73f219acdc';

async function getGender(name) {
    try {
        const url = new URL('https://api.genderize.io');
        url.searchParams.set('name', name);
        url.searchParams.set('apikey', API_KEY);

        const response = await fetch(url);
        const data = await response.json();

        console.log(`🔍 Name: ${data.name}`);
        console.log(`👤 Gender: ${data.gender || 'Unknown'}`);
        console.log(`📊 Probability: ${(data.probability * 100).toFixed(1)}%`);
        console.log(`📈 Sample Count: ${data.count}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Test it
getGender('peter');
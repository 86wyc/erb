function getata(drink) {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            const drinkdata = data['drinks'];
            drinkdata.forEach(drink => {
                console.log(`Drink: ${drink.strDrink}\nIngredient: ${drink.strIngredient1} ${drink.strIngredient2 ? ',' + drink.strIngredient2 : ""} ${drink.strIngredient3 ? ',' + drink.strIngredient3 : ""} ${drink.strIngredient4 ? ',' + drink.strIngredient4 : ""} ${drink.strIngredient5 ? ',' + drink.strIngredient5 : ""} ${drink.strIngredient6 ? ',' + drink.strIngredient6 : ""}`);
            });
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
getata("Gin and Tonic");
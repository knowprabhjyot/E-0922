

const configuration = {
    apiKey: 'f5ecdc7883cdd4a11243bca1878bfee8',
    unit: 'metric',
}

// Query parameters
// www.google.com?version=v1&name=doc&apiKey=asxacsacsacas

// Path Parameters
// www.google.com/api/v1/doc


let weatherData;


const createUI = (data) => {
    const container = document.getElementById('container');
    const cityName = document.createElement('h1');
    const image = document.createElement('div');
    image.innerHTML = "<i class='fa-solid fa-cloud'></i>";
    const temperature = document.createElement('span');
    const description = document.createElement('p');
    const feelsLike = document.createElement('p');
    const humidity = document.createElement('p');
    const visibility = document.createElement('p');
    const firstSection = document.createElement('section');
    const secondSection = document.createElement('section');


    cityName.textContent = data.name;
    temperature.textContent = data.main.temp;
    feelsLike.textContent = data.main.feels_like;
    humidity.textContent = data.main.humidity; 
    visibility.textContent = data.visibility;
    description.textContent = data.weather[0].description;

    // First SECTION
    firstSection.append(image, cityName, temperature, description);


    // Second Section
    secondSection.append(feelsLike, humidity, visibility);

    container.append(firstSection, secondSection);



}


const fetchWeatherData = async () => {
    let { apiKey, unit } = configuration; 

    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${apiKey}&units=${unit}`);
        const jsonData = await data.json();
        weatherData = jsonData;

        createUI(weatherData);
    
    } catch (error) {
        alert("There was an error somewhere!");
    }
}


fetchWeatherData();
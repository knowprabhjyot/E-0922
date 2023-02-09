

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
    container.innerHTML = ""; // This empty's whatever was there
    const cityName = document.createElement('h1');
    const image = document.createElement('div');


    const temperature = document.createElement('span');
    const description = document.createElement('p');
    const feelsLike = document.createElement('p');
    const humidity = document.createElement('p');
    const visibility = document.createElement('p');
    const firstSection = document.createElement('section');
    const secondSection = document.createElement('section');

    console.log(data.weather[0].description);
    if (data.weather[0].description == "light rain") {
        image.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy'></i>"
    } else {
        image.innerHTML = "<i class='fa-solid fa-cloud-sun'></i>";
    }

    cityName.textContent = data.name;
    temperature.textContent = data.main.temp;

    humidity.innerHTML = `<p class="secondSectionTitle">Humidity</p><p>${data.main.humidity}<p>`;

    visibility.innerHTML = `<p class="secondSectionTitle">Visibility</p><p>${data.visibility}</p>`

    feelsLike.innerHTML = `<p class="secondSectionTitle">Feels Like</p><p>${data.main.feels_like}</p>`


    description.textContent = data.weather[0].description;

    // First SECTION
    firstSection.append(image, cityName, temperature, description);


    // Second Section
    secondSection.append(feelsLike, humidity, visibility);

    container.append(firstSection, secondSection);



}


const fetchWeatherData = async (city) => {
    let { apiKey, unit } = configuration; 

    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`);
        const jsonData = await data.json();
        weatherData = jsonData;

        createUI(weatherData);
    
    } catch (error) {
        alert("There was an error somewhere!");
    }
}

const fetchDataOnSearch = async () => {
    const search = document.getElementById('search-input');
    console.log(search.value);

    fetchWeatherData(search.value);
}


fetchWeatherData('Vancouver');
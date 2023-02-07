

// Fetch Data from the RestCountries API
// https://restcountries.com/v3.1/all

let modifiedArray = [];


const generateUI = (array) => {
    let container = document.getElementById('container');
    array.forEach(({ flagUrl, name, population }) => {
       // Create an external article
       let article = document.createElement('article');
       let flagImg = document.createElement('img');
       let countryTitle = document.createElement('h2');
       let populationData = document.createElement('p');
       let textContainer = document.createElement('div');
       
       flagImg.src = flagUrl;
       countryTitle.textContent = `Name: ${name}`;
       populationData.textContent = `Population : ${population}`

       article.appendChild(flagImg);

       textContainer.appendChild(countryTitle);
       textContainer.appendChild(populationData);

       article.appendChild(textContainer);

       container.appendChild(article);

    })
}

const parseList = (array) => {

     // modifiedArray = finalData.map((country) => {
    //     return {
    //         name: country.name.common || "No Name Found",
    //         population: country.population || 0,
    //         flagUrl: country.flags.png || "https://via.placeholder.com/300"
    //     }
    // })

    // We can extract values using destructuring as done for name, population, flags
    return  array.map(({ name , population, flags}) => {
        return {
            name: name.common || "No Name Found",
            population: population || 0,
            flagUrl: flags.png || "https://via.placeholder.com/300"
        }
    })
}

const getCountriesData = async () => {
    const data = await fetch('https://restcountries.com/v3.1/all');
    const finalData = await data.json(); // Parse the data to JSON

    // To parse the orignal array and give me the modified Value
    let modifiedArray = parseList(finalData);

    // Generate UI on the basis of modifiedArray
    generateUI(modifiedArray);



}





getCountriesData();

// async function getCountriesData() {

// }
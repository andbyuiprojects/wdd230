const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    // Stores the response from the fetch Method in response
    const response = await fetch(url);
    // Converts the response to a JSON object using the .json method and stores it in data
    const data = await response.json();
    // Checks the data response at this point in the console window
    console.table(data.prophets);
}

getProphetData();
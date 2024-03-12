const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#figcaption");

const forecastTempDay1 = document.querySelector("#forecast-temp-day1");
const weatherIcon1 = document.querySelector("#weather-icon-day1");
const captionDesc1 = document.querySelector("#figcaption-day1");
const forecastDay1 = document.querySelector("#forecast-day1");

const forecastTempDay2 = document.querySelector("#forecast-temp-day2");
const weatherIcon2 = document.querySelector("#weather-icon-day2");
const captionDesc2 = document.querySelector("#figcaption-day2");
const forecastDay2 = document.querySelector("#forecast-day2");

const forecastTempDay3 = document.querySelector("#forecast-temp-day3");
const weatherIcon3 = document.querySelector("#weather-icon-day3");
const captionDesc3 = document.querySelector("#figcaption-day3");
const forecastDay3 = document.querySelector("#forecast-day3");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.58&lon=-121.50&appid=6b112c111200affe7c477e01c468ce21&units=imperial';
const url1 = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.58&lon=-121.50&appid=6b112c111200affe7c477e01c468ce21&units=imperial';

async function currentapiFetch() {
    try 
    {
        const response = await fetch(url);
        if (response.ok)
        {
            const data = await response.json();
            displayResults(data);
        }
        else 
        {
            throw Error(await response.text());
        }
    }
    catch (error)
    {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc =data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather icon');
    captionDesc.textContent = `${desc}`;
}

async function forecastapiFetch() {
  try 
  {
    const response = await fetch(url1);
    if (response.ok) 
    {
      const data = await response.json();
      displayForecast(data);
    }
    else
    {
        throw Error(await response.text());
    }
  } 
  catch (error) 
  {
    console.log(error);
  }
}

function displayForecast(data) {
  forecastTempDay1.innerHTML = `${data.list[6].main.temp.toFixed(1)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[6].weather[0].icon}.png`;
  let desc1 = data.list[6].weather[0].description;
  weatherIcon1.setAttribute("src", iconsrc);
  weatherIcon1.setAttribute("alt", "weather icon");
  captionDesc1.textContent = `${desc1}`;

  forecastTempDay2.innerHTML = `${data.list[14].main.temp.toFixed(1)}&deg;F`;
  const iconsrc1 = `https://openweathermap.org/img/w/${data.list[14].weather[0].icon}.png`;
  let desc2 = data.list[14].weather[0].description;
  weatherIcon2.setAttribute("src", iconsrc1);
  weatherIcon2.setAttribute("alt", "weather icon");
  captionDesc2.textContent = `${desc2}`;

  forecastTempDay3.innerHTML = `${data.list[22].main.temp.toFixed(1)}&deg;F`;
  const iconsrc2 = `https://openweathermap.org/img/w/${data.list[22].weather[0].icon}.png`;
  let desc3 = data.list[22].weather[0].description;
  weatherIcon3.setAttribute("src", iconsrc2);
  weatherIcon3.setAttribute("alt", "weather icon");
  captionDesc3.textContent = `${desc3}`;
}

function forecastDays() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const todayIndex = currentDate.getDay();

  forecastDay1.innerHTML = `${daysOfWeek[(todayIndex + 1) % 7]}`;
  forecastDay2.innerHTML = `${daysOfWeek[(todayIndex + 2) % 7]}`;
  forecastDay3.innerHTML = `${daysOfWeek[(todayIndex + 3) % 7]}`;
}

currentapiFetch();
forecastapiFetch();
forecastDays();

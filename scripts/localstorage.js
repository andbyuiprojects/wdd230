// Stets the display visits to a const to not change it
const visitsDisplay = document.querySelector(".visits");

// Gets the stored value for the numVisitsLS if it is there, otherwise make it 0
let numVisits = Number(window.localStorage.getItem("numVisitsLS")) || 0;

// If no visits...
if (numVisits == 0) {
    // Make show a welcome first time message
    visitsDisplay.textContent = "Welcome! 🎆This is your first visit!🎆";
}
// If it is not the first time
else {
    // Set the visits display equal to the number of visits
    visitsDisplay.textContent = numVisits;
}

// Add the visit
numVisits++;

// Stor the new visit to the local storage variable numVisitsLS
localStorage.setItem("numVisitsLS", numVisits);
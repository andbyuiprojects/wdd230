const url = "data/pricing.json";
const table = document.querySelector("#table");

async function getVehicleData() {
    // Stores the response from the fetch Method in response
    const response = await fetch(url);
    // Converts the response to a JSON object using the .json method and stores it in data
    const data = await response.json();
    console.table(data.vehicles);
    displayVehicles(data.vehicles);
}

const displayVehicles = (vehicles) => {

    let title = document.createElement("h2");
    title.textContent = "Rental Pricing";
    table.appendChild(title);
    
    vehicles.forEach((vehicle) => {
        let rowHead = document.createElement("tr");
        let name = document.createElement("td");
        let halfRez = document.createElement("td");
        let fullRez = document.createElement("td");
        let halfWalk = document.createElement("td");
        let fullWalk = document.createElement("td");

        name.textContent = `${vehicle.type}`;
        halfRez.textContent = `${vehicle.halfrez}`;
        fullRez.textContent = `${vehicle.fullrez}`;
        halfWalk.textContent = `${vehicle.halfwalk}`;
        fullWalk.textContent = `${vehicle.fullwalk}`;
 
        rowHead.appendChild(name);
        rowHead.appendChild(halfRez);
        rowHead.appendChild(fullRez);
        rowHead.appendChild(halfWalk);
        rowHead.appendChild(fullWalk);

        if (table.appendChild(rowHead) != null) {
            table.appendChild(rowHead);
        }
        else {
            console.log("Error, value is null!");
        }

    });   

};

getVehicleData();
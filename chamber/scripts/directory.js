const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getDirectoryData() {
    // Stores the response from the fetch Method in response
    const response = await fetch(url);
    // Converts the response to a JSON object using the .json method and stores it in data
    const data = await response.json();
    displayDirectory(data.businesses);
}

const displayDirectory = (businesses) => {
    // Process each prophet record one at a time, creating a new card each time
    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let icon = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let joined = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('h4');

        icon.setAttribute('src', business.icon);
        icon.setAttribute('alt', `Logo of ${business.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', 'auto');
        icon.setAttribute('height', 'auto');

        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        joined.textContent = `Member Since: ${business.joined}`;
        membership.textContent = `${business.membership}`;
        website.setAttribute('href', `${business.website}`);
        website.textContent = business.website;
        website.setAttribute('target', '_blank');

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(joined);
        card.appendChild(membership);
        card.appendChild(website);

        cards.appendChild(card);
    } );
}

getDirectoryData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid-directory");
	display.classList.remove("list-directory");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list-directory");
    display.classList.add("grid-directory");
}
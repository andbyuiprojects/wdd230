const urlMember = 'data/members.json';
const cards = document.querySelector('#business-card');

async function getDirectoryData() {
    // Stores the response from the fetch Method in response
    const response = await fetch(urlMember);
    // Converts the response to a JSON object using the .json method and stores it in data
    const data = await response.json();
    displayDirectory(data.businesses);
}

const displayDirectory = (businesses) => {

    const highestMember = businesses.filter(business => business.membership === "Gold" || business.membership === "Silver");

    const pickBusiness = highestMember.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Process each prophet record one at a time, creating a new card each time
    pickBusiness.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let icon = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let joined = document.createElement('p');
        let website = document.createElement('a');

        icon.setAttribute('src', business.icon);
        icon.setAttribute('alt', `Logo of ${business.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', 'auto');
        icon.setAttribute('height', 'auto');

        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        joined.textContent = `Member Since: ${business.joined}`;
        website.setAttribute('href', `${business.website}`);
        website.textContent = business.website;
        website.setAttribute('target', '_blank');

        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(joined);
        card.appendChild(website);

        cards.appendChild(card);
    } );
}

getDirectoryData();
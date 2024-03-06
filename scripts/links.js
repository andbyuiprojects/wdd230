const baseURL = "https://andbyuiprojects.github.io/wdd230/";

const linksURL = "https://andbyuiprojects.github.io/wdd230/data/links.json";

const cards = document.querySelector("#cards");


async function getLinks() {
    const response = await fetch(linksURL);

    const data = await response.json();

    displayLinks(data);
}

const displayLinks = (weeks) => {
    weeks.lessons.forEach((week) => {
        let card = document.createElement("li");
        
        let lesson = document.createElement("p");

        lesson.textContent = `${week.lesson}`;
        
        card.appendChild(lesson);

        //Array of links
        week.links.forEach((link) => {
            // Creats an a tag for each title
            let title = document.createElement("a");
            //  
            title.setAttribute("href", link.url);

            // Setting the text title of the html link
            title.textContent = `${link.title}`;
            
            // Adds each one to the card
            card.appendChild(title);
        });


        cards.appendChild(card);
        
    });
}

getLinks();
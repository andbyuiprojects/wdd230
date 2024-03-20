const baseURL = "https://andbyuiprojects.github.io/wdd230/scoots/index";

const pricingURL = "https://andbyuiprojects.github.io/wdd230/scoots/data/pricing.json";

const cards = document.querySelector("#cards");

async function getPrices() {
    const response = await fetch(linksURL);

    const data = await response.json();

    displayPrices(data);
}
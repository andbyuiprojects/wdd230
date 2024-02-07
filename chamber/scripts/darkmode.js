const modeButton = document.querySelector("#mode");

const body = document.querySelector("body");
const header = document.querySelector("header");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");

const home = document.querySelector("#home");
const discover = document.querySelector("#discover");
const directory = document.querySelector("#directory");
const join = document.querySelector("#joinTab");

const weather = document.querySelector("#weath");
const currentevents = document.querySelector("#curr");
const spotlight = document.querySelector("#spot");

const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌃")) {
		body.style.background = "#2D222F";
		header.style.background = "#4A6B38";
		nav.style.background = "#325971";
		footer.style.background = "#664900";
		
		weather.style.background = "#325971";
		currentevents.style.background = "#325971";
		spotlight.style.background = "#325971";

		h1.style.color = "#fff";
		main.style.color = "#fff";
        footer.style.color = "#fff";

		home.style.color = "#fff";
		discover.style.color = "#fff";
		directory.style.color = "#fff";
		join.style.color = "#fff";

		weather.style.color = "#fff";
		currentevents.style.color = "#fff";
		spotlight.style.color = "#fff";

		modeButton.textContent = "🌆";
	} else {
		body.style.background = "#D6CBD9";
		header.style.background = "#85B36B";
        nav.style.background = "#8EB5CD";
		footer.style.background = "#ffb703";

		h1.style.color = "#000";
		main.style.color = "#000";
		footer.style.color = "#000";

		home.style.color = "#000";
		discover.style.color = "#000";
		directory.style.color = "#000";
		join.style.color = "#000";

		weather.style.color = "#000";
		currentevents.style.color = "#000";
		spotlight.style.color = "#000";



		modeButton.textContent = "🌃";
	}
});

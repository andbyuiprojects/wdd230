const modeButton = document.querySelector("#mode");


const header = document.querySelector("header");

const h1 = document.querySelector("h1");
const nav = document.querySelector("nav");

const home = document.querySelector("#home");
const discover = document.querySelector("#discover");
const directory = document.querySelector("#directory");
const join = document.querySelector("#joinTab");

const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌃")) {
		header.style.background = "#4A6B38";
		nav.style.background = "#325971";
		footer.style.background = "#664900";
	
		h1.style.color = "#fff";
        footer.style.color = "#fff";

		home.style.color = "#fff";
		discover.style.color = "#fff";
		directory.style.color = "#fff";
		join.style.color = "#fff";

		modeButton.textContent = "🌆";
	} else {
		header.style.background = "#85B36B";
        nav.style.background = "#8EB5CD";
		footer.style.background = "#ffb703";

		h1.style.color = "#000";
		footer.style.color = "#000";

		home.style.color = "#000";
		discover.style.color = "#000";
		directory.style.color = "#000";
		join.style.color = "#000";

		modeButton.textContent = "🌃";
	}
});

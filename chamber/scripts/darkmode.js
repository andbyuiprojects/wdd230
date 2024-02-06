const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
// const header = document.querySelector("header");
// const nav = document.querySelector("nav");
// const footer = document.querySelector("footer");
// const card = document.querySelector("card");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌃")) {
		body.style.background = "#161118";
		// header.style.background = "#25351C";
		// nav.style.background = "#192B39";
		// footer.style.background = "#523A00";
		main.style.color = "#fff";
        // nav.style.color = "#fff";
		modeButton.textContent = "🌆";
	} else {
		body.style.background = "#D6CBD9";
		// header.style.background = "#85B36B";
        // nav.style.background = "#8EB5CD";
		// footer.style.background = "#ffb703";
		main.style.color = "#000";
		modeButton.textContent = "🌃";
	}
});

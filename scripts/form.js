const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const pw1 = document.querySelector("#password");
const pw2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

pw2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (pw1.value != pw2.value) {
        pw1.value= "";
		pw2.value = "";
		pw1.focus();
	}
}
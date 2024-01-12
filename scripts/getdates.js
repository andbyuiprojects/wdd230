// Copy write year
var year = new Date();
document.querySelector("#currentYear").textContent = year.getFullYear();

// When the document was last changed
let lastChanged  = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = lastChanged ;

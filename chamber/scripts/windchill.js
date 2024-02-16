let temp= 27;
let windSpeed= 11;
var windChill= (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));

var windChill= Math.round(windChill);
document.getElementById("windchill").innerHTML= windChill;
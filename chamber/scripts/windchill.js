let temp= 27;
let windSpeed= 11;
var windChill= (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));

var windChill= Math.round(windChill);
document.getElementById("windchill").innerHTML= windChill;

// function windChill (temp, windChill) {
//     let windChill= 0;
//     if (temp <= 50 && windSpeed > 3) {
//         let windChill = windChillCalculate();
//     }
    
// }

// function windChillCalculate() {
//     return (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
// }
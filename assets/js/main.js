let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag"
];

let hoursDiv = document.querySelector("#hours");
let dayDiv = document.querySelector("#day");
let dateDiv = document.querySelector("#date");

let heutigesDatum = new Date();
console.log(heutigesDatum);

console.log(heutigesDatum.getFullYear());
console.log(heutigesDatum.getMonth() + ". Monat");
console.log(heutigesDatum.getDay() + ". Tag");
console.log(heutigesDatum.getHours() + ". Stunde");
console.log(heutigesDatum.getMinutes() + ". Minute");

let tagHeute = heutigesDatum.getDay();
console.log(wochenTag[tagHeute]);
// Logik erklärt = wochenTag index - und hier könnte jetzt z.B. eine beliebige Nummer stehen, und dann würde JS tie Wochentag durchgehen (0,1,2,3...) und da ich hier den Wert "tagHeute" vergeben habe, was im Grunde getDay() ist, bekomem ich den Wert 1 raus, was der Montag ist (Sonntag ist 0)

//! Für den Monat sieht es dann ähnlich aus, ich mache es diesmal ohne Variable um es einfach mal probiert zu haben
console.log(monate[heutigesDatum.getMonth()]);

//? Und So funktioniert es auch! Ich habe hier also einfach nur statt eine Variable zu nehmen das heutige Datum (variable) genommen und dann getMonth, hätte aber auch new Date().getMonth() nehmen können


//* falls minuten kleiner als 9 dann 0+minuten
let minutes = heutigesDatum.getMinutes();
minutes = minutes > 9 ? minutes : '0' + minutes;

hoursDiv.innerHTML = heutigesDatum.getHours() + ":" + minutes;

dayDiv.innerHTML = wochenTag[tagHeute];

let months = heutigesDatum.getMonth()+1;
if (months===13) {
  months = 12;
}
months = months > 9 ? months : '0' + months;
dateDiv.innerHTML = months + "/" + heutigesDatum.getFullYear();
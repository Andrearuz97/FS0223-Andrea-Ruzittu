var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 26, 77, 98, 22, 88];
console.log(myArray);
var stringa = "Andrea";
var cognome = "Ruzittu";
console.log("ciao sono ".concat(stringa, " ").concat(cognome));
var Mesi;
(function (Mesi) {
    Mesi[Mesi["gennaio"] = 0] = "gennaio";
    Mesi[Mesi["febbraio"] = 1] = "febbraio";
    Mesi[Mesi["Marzo"] = 2] = "Marzo";
    Mesi[Mesi["Aprile"] = 3] = "Aprile";
})(Mesi || (Mesi = {}));
console.log(Mesi.febbraio);

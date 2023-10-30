let animale = ["anatra", "fenicottero", "coniglio"];
animale.unshift("biscia");
animale.unshift("arsella");
animale.push("calamaro");

document.querySelector('h1').innerHTML =`Esercitazione giorno 1 settimana 2 java come un ${animale[5]}`;

class Pet {
    constructor(tipo, name, zampe, colore) {
        this.tipo = tipo;
        this.name = name;
        this.zampe = zampe;
        this.colore = colore;
    }

    componi() {
        return `L'animale in questione è un ${this.tipo} di nome ${this.name}, è di colore ${this.colore} e ha ${this.zampe} zampe.`;
    }
}

var cavallo = new Pet('cavallo', 'furia', 4, 'marrone');
var gatto = new Pet('gatto', 'paride', 4, 'grigio');
var pinguino = new Pet('pinguino', 'pingu', 2, 'bianco');
document.getElementById('animale').innerHTML = pinguino.componi();
console.log(gatto.componi());


class FirstUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica; //Quì aggiungiamo a carica il valore della ricarica.
    }
    chiamata(minutiDurata) {
        const costoMinuto = 0.2; //20 cent è il costo al minuto della chiamata.
        const costoChiamata = costoMinuto * minutiDurata;
        if (costoChiamata <= this.carica) {
            // Se il costo della chiamata è inferiore o uguale al credito allora sottraggo da carica il costo della chiamata e incremento di 1 il numero di chiamate effetuate.
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Gentile cliente Vodafone, il suo credito è insufficiente per effettuare la chiamata.");
        }
    }
    numero404() {
        //Quì viene restituito il valore della carica disponibile.
        return this.carica;
    }
    getNumeroChiamate() {
        // Restutuisce valore del numero delle chiamate effettuate.
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        //Quì azzzeriamo la variabile contenente il numero di chiamate effettuate.
        this.numeroChiamate = 0;
    }
}
class SecondUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoMinuto = 0.2;
        const costoChiamata = costoMinuto * minutiDurata;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Gentile cliente Tim, il suo credito è insufficiente per effettuare la chiamata.");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class ThirdUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoMinuto = 0.2;
        const costoChiamata = costoMinuto * minutiDurata;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Gentile cliente Wind, il suo credito è insufficiente per effettuare la chiamata.");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// Utente Vodafone
const utenteVodafone = new FirstUser();
utenteVodafone.ricarica(10); //Qui sto ricaricando 10 euro
utenteVodafone.chiamata(10); //Effettuo una chiamata di 10 minuti (costo: 2 euro)
utenteVodafone.chiamata(4); // Effettuo una seconda chiamata di 4 minuti (costo: 0.80 euro)
utenteVodafone.chiamata(1); // Effettuo una terza chiamata di 1 minuti (costo: 0.20 euro)
console.log(`Gentile cliente Vodafone, ha effettuato ${utenteVodafone.getNumeroChiamate()} chiamate.`);
console.log("Gentile cliente Vodafone, il suo credito disponibile è di euro:", utenteVodafone.numero404());
utenteVodafone.azzeraChiamate();
//Utente Tim
const utenteTim = new SecondUser();
utenteTim.ricarica(20); // Quì sto ricaricando 20 euro
utenteTim.chiamata(40); // Effettuo una chiamata di 40 minuti (costo: 8 euro)
utenteTim.chiamata(60); // Effettuo una seconda chiamata di 60 minuti (costo: 12 euro)
console.log(`Gentile cliente Tim, ha effettuato ${utenteTim.getNumeroChiamate()} chiamate.`);
console.log("Gentile cliente Tim, il suo credito disponibile è di euro:", utenteTim.numero404());
utenteTim.azzeraChiamate();
//Utente Wind
const utenteWind = new ThirdUser();
utenteWind.ricarica(10); // Effettuo una ricarica da 10 euro
utenteWind.chiamata(60); // Effettuo una chiamata di 60 minuti (12 euro), chiaramente il credito è insufficiente.
console.log(`Gentile cliente Wind, ha effettuato ${utenteWind.getNumeroChiamate()} chiamate.`);
console.log("Gentile cliente Wind, il suo credito disponibile è di euro:", utenteWind.numero404());
utenteWind.azzeraChiamate();

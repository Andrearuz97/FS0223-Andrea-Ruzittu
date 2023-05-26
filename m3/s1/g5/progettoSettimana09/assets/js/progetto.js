class FirstUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoMinuto = 0.20; //20 cent è il costo al minuto della chiamata.
        const costoChiamata = costoMinuto * minutiDurata;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Gentile cliente Vodafone, il suo saldo è insufficiente per effettuare la chiamata.");
        }
    }
    numero404() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
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
        const costoMinuto = 0.20;
        const costoChiamata = costoMinuto * minutiDurata;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Gentile cliente Tim, il suo saldo è insufficiente per effettuare la chiamata.");
        }
    }
    numero404() {
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
        const costoMinuto = 0.20;
        const costoChiamata = costoMinuto * minutiDurata;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Gentile cliente Wind, il suo saldo è insufficente per effettuare la chiamata.");
        }
    }
    numero404() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
// Utente Vodafone
const utenteVodafone = new FirstUser();
utenteVodafone.ricarica(15); // Qui sto ricaricando 10 euro
utenteVodafone.chiamata(10); //Effettuo una chiamata di 10 minuti (costo: 2 euro)
utenteVodafone.chiamata(4); // Effettuo una seconda chiamata di 4 minuti (costo: 0.80 euro)
utenteVodafone.chiamata(1); // Effettuo una terza chiamata di 1 minuti (costo: 0.20 euro)
console.log("Gentile cliente Vodafone, il suo saldo disponibile è di euro:", utenteVodafone.carica);
console.log(`Gentile cliente Vodafone, ha effettuato ${utenteVodafone.numero404()} chiamate.`);
//Utente Tim
utenteVodafone.azzeraChiamate();
const utenteTim = new SecondUser();
utenteTim.ricarica(50); // Quì sto ricaricando 50 euro
utenteTim.chiamata(30); // Effettuo una chiamata di 30 minuti (costo: 6 euro)
utenteTim.chiamata(50); // Effettuo una seconda chiamata di 50 minuti (costo: 10 euro)
console.log("Gentile cliente Tim, il suo saldo disponibile è di euro:", utenteTim.carica);
console.log(`Gentile cliente Tim, ha effettuato ${utenteTim.numero404()} chiamate.`);
utenteTim.azzeraChiamate();
//Utente Wind
const utenteWind = new ThirdUser();
utenteWind.ricarica(5); // Effettuo una ricarica da 5 euro
utenteWind.chiamata(60); // Effettuo una chiamata di 60 minuti (12 euro) chiaramente il credito è insufficente.
console.log("Gentile cliente Wind, il suo saldo disponibile è di euro:", utenteWind.carica);
console.log(`Gentile cliente Wind, ha effettuato ${utenteWind.numero404()} chiamate.`);
utenteWind.azzeraChiamate();

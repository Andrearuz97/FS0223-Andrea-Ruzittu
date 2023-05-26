interface Smartphone {
  carica: number;
  numeroChiamate: number;
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class FirstUser implements Smartphone {
  //utente Vodafone
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoMinuto = 0.2; //20 cent è il costo al minuto della chiamata.
    const costoChiamata = costoMinuto * minutiDurata;

    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log(
        "Gentile cliente Vodafone, il suo saldo è insufficiente per effettuare la chiamata."
      );
    }
  }

  numero404(): number {
    //quì viene restituito il valore della carica disponibile.
    return this.carica;
  }

  getNumeroChiamate(): number {
    // restutuisce valore del numero delle chiamate effettuate.
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    //Quì azzzeriamo la variabile contenente il numero di chiamate effettuate.
    this.numeroChiamate = 0;
  }
}

class SecondUser implements Smartphone {
  //utente Tim
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoMinuto = 0.2;
    const costoChiamata = costoMinuto * minutiDurata;

    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log(
        "Gentile cliente Tim, il suo saldo è insufficiente per effettuare la chiamata."
      );
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class ThirdUser implements Smartphone {
  //utente Vodafone
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoMinuto = 0.2;
    const costoChiamata = costoMinuto * minutiDurata;

    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log(
        "Gentile cliente Wind, il suo saldo è insufficiente per effettuare la chiamata."
      );
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

// Utente Vodafone
const utenteVodafone = new FirstUser();
utenteVodafone.ricarica(10); // Qui sto ricaricando 10 euro
utenteVodafone.chiamata(10); //Effettuo una chiamata di 10 minuti (costo: 2 euro)
utenteVodafone.chiamata(4); // Effettuo una seconda chiamata di 4 minuti (costo: 0.80 euro)
utenteVodafone.chiamata(1); // Effettuo una terza chiamata di 1 minuti (costo: 0.20 euro)
console.log(
  `Gentile cliente Vodafone, ha effettuato ${utenteVodafone.getNumeroChiamate()} chiamate.`
);
console.log(
  "Gentile cliente Vodafone, il suo saldo disponibile è di euro:",
  utenteVodafone.numero404()
);
utenteVodafone.azzeraChiamate();

//Utente Tim
const utenteTim = new SecondUser();
utenteTim.ricarica(50); // Quì sto ricaricando 50 euro
utenteTim.chiamata(30); // Effettuo una chiamata di 30 minuti (costo: 6 euro)
utenteTim.chiamata(50); // Effettuo una seconda chiamata di 50 minuti (costo: 10 euro)
console.log(
  `Gentile cliente Tim, ha effettuato ${utenteTim.getNumeroChiamate()} chiamate.`
);
console.log(
  "Gentile cliente Tim, il suo saldo disponibile è di euro:",
  utenteTim.numero404()
);
utenteTim.azzeraChiamate();

//Utente Wind
const utenteWind = new ThirdUser();
utenteWind.ricarica(5); // Effettuo una ricarica da 5 euro
utenteWind.chiamata(60); // Effettuo una chiamata di 60 minuti (12 euro) chiaramente il credito è insufficiente.
console.log(
  `Gentile cliente Wind, ha effettuato ${utenteWind.getNumeroChiamate()} chiamate.`
);
console.log(
  "Gentile cliente Wind, il suo saldo disponibile è di euro:",
  utenteWind.numero404()
);
utenteWind.azzeraChiamate();

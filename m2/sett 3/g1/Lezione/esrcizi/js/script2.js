let user = {
  name: "Andrea",
  cognome: "Ruzittu",
  età: 25,
  "likes soccer": true,
};
user.name = "Gerolamo";
console.log(user.name);

class Person {
  constructor() {
    this.nome = "";
    this.cognome = "";
    this.età = "";
    this.saluta = function () {
      return `Il mio nome è ${this.nome} ${this.cognome} ed ho ${this.età} anni.`;
    };
  }
}
const p1 = new Person();
p1.nome = "Andrea";
p1.cognome = "Ruzittu";
p1.età = 25;
console.log(p1.saluta());

const p2 = new Person();
p2.nome = "Geronimo";
p2.cognome = "Stillton";
p2.età = 100;
console.log(p2.saluta());

class book {
  constructor(_titolo, _autore, _numPagine) {
    this.titolo = _titolo;
    this.autore = _autore;
    this.numPagine = _numPagine;
    this.pages = function () {
      return `Il libro si chiama ${this.titolo}, l'autore è ${this.autore} e il numero delle pagine è ${this.numPagine}.`;
    };
  }
}

const b1 = new book("titanic", "camerun", 1997);
const b2 = new book("La divina commedia", "Dante Alighieri", 444);
const b3 = new book("il signore degli anelli", "bho", 3000);
console.log(b1.pages());

class Automobile {
  constructor(marca, modello, anno) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
  }
  descrizione() {
    return `Questa automobile è una ${this.marca} ${this.modello} ed è del ${this.anno}`;
  }
  tipologiaModello() {
    return `Il modello è ${this.modello}`;
  }
}
const punto = new Automobile("Fiat", "Punto", "2006");
const ka = new Automobile("Ford", "Ka", "2009");
const corolla = new Automobile("Toyota", "Corolla", "2020");
console.log(corolla.descrizione());


class Animali {
    constructor(specie, nome, eta){
        this.specie = specie;
        this.nome = nome;
        this.eta = eta;
    }
    visualizzaInfo(){
        return `L'animale in questione è una specie di ${this.specie}, ha ${this.eta} anni e si chiama ${this.nome}.` 
    }
adulto(){
    if(this.eta >10) return "animale adulto";
    else return "animale non adulto";
}}

let s = prompt("cosa vuoi visualizzare?");

const gatto = new Animali("Gatto","Paride","3")
const panda = new Animali("Panda","Gino","10")
console.log(panda.visualizzaInfo());

const listaAnimali = document.getElementById("listaAnimali");
const infoGatto = document.createElement("h1");
const infoPanda = document.createElement("h1");
infoPanda.textContent = panda.visualizzaInfo();
listaAnimali.appendChild(infoPanda);



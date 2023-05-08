let user = {
    name : "Andrea",
    cognome : "Ruzittu",
    età : 25,
    "likes soccer" : true,
}
user.name = "Gerolamo"
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
p1.nome="Andrea";
p1.cognome="Ruzittu";
p1.età= 25
console.log(p1.saluta());

const p2 = new Person();
p2.nome="Geronimo";
p2.cognome="Stillton";
p2.età= 100
console.log(p2.saluta());

class book {
    constructor(_titolo, _autore, _numPagine,) {
        this.titolo = _titolo;
        this.autore = _autore;
        this.numPagine = _numPagine;
        this.pages = function () {
            return `Il numero delle pagine è ${this.numPagine}.`
        };
    }
}
 
const b1 = new book("titanic","camerun",1997)
const b2 = new book("La divina commedia","Dante Alighieri",444)
const b3 = new book("il signore degli anelli","bho",3000)
console.log(b1.pages())
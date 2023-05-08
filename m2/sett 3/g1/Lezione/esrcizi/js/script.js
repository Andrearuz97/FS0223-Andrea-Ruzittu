let user = {
  name: "John",
  age: 30,
  "likes birds": true,
};
console.log(user);
user.name = "will";
user.age = 25;
console.log(user.age);
user["likes birds"] = false;

let user2 = {
  nome: "Mario",
  age: 45,
  "likes birds": false,
};
user2.name = "Giovanni";
console.log(user2.nome);

class Book {
    constructor() {
        this.Title = "";
        this.Author = "";
        this.numPages = "";
        this.pages = function () {
            return `number of pages: ${this.numPages}`;
        };
    }
}
const b1 = new Book()
    b1.Title ="ciaone"
    b1.Author = "Verga"
    b1.numPages =150
   console.log(b1.pages());

   class Automobile {
    constructor(marca, modello, anno) {
        this.marca = marca;
        this.modello = modello;
      this.anno = anno;
    }
  
    descrizione() {
      return `Questa automobile è una ${this.marca} ${this.modello} dell'anno ${this.anno}`;
    }
  }
  
  const auto = new Automobile("Fiat", "Punto", 2006);
  const autoGaia = new Automobile("Ford", "KA", 2009);
  console.log(autoGaia.descrizione());
  

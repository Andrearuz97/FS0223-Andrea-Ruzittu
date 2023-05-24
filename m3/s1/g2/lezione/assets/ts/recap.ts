class Studente {
  nome: string;
  cognome: string;
  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }
  getStudent() {
    return `ciao sono ${this.nome} ${this.cognome}`;
  }
}
 
const studente = new Studente("Andrea", "Ruzittu");
console.log(studente.getStudent());
console.log("aaassszzzzzzzzaa!");
console.log("prova!");
console.log("prova!");
console.log("prova!");
console.log("prdma!");

type Combinable = number|string;
type ConversioneDescriptor = boolean| string;

function combina(input1: Combinable, input2: Combinable, resultConversion: ConversioneDescriptor){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number"|| resultConversion === "as-number"){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString();
    }
return result;
}

console.log(combina ("Hello", 25, "ciao"));

//asserzione di tipo

let code: any =true;
let codiceInpiegato = code;

if (typeof(codiceInpiegato)=== "number"){
    codiceInpiegato = <number> code;
}else{
    codiceInpiegato = <any> code;
}console.log(typeof(codiceInpiegato));
console.log(codiceInpiegato);

//intersection type

type Admin = {
    nome :string;
    privilegi: String[]
}
type Impiegato = {
    matricola: number;
    startDate: Date
}
type SuperAdmin = Admin & Impiegato;
let direttore: Admin = {
    nome:'Mario Rossi',
    privilegi: ["gestione ufficio","gestione permessi"]
}
console.log(direttore);

let funzionario: Impiegato = {
    matricola: 12345,
    startDate: new Date('2023-01-01')
}
console.log(funzionario);

const amministratore: SuperAdmin = {
    nome: "Aldo Bianchi",
    privilegi:["Gestione bilanci aziendali","Investimenti aziendali","Direzione CDA"],
    matricola:  5689,
    startDate: new Date("2022-06-01")
}
console.log(amministratore);
console.log(`${amministratore.nome}`);
console.log("ciaoooo");
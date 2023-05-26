function combina(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combina("Hello", 25, "ciao"));
//asserzione di tipo
var code = true;
var codiceInpiegato = code;
if (typeof (codiceInpiegato) === "number") {
    codiceInpiegato = code;
}
else {
    codiceInpiegato = code;
}
console.log(typeof (codiceInpiegato));
console.log(codiceInpiegato);
var direttore = {
    nome: 'Mario Rossi',
    privilegi: ["gestione ufficio", "gestione permessi"]
};
console.log(direttore);
var funzionario = {
    matricola: 12345,
    startDate: new Date('2023-01-01')
};
console.log(funzionario);
var amministratore = {
    nome: "Aldo Bianchi",
    privilegi: ["Gestione bilanci aziendali", "Investimenti aziendali", "Direzione CDA"],
    matricola: 5689,
    startDate: new Date("2022-06-01")
};
console.log(amministratore);
console.log("".concat(amministratore.nome));
console.log("ciaoooo");

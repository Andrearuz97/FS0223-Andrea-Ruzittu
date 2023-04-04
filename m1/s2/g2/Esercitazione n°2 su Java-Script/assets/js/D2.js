/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype di javascript sono i seguenti:*/

let luogo = 'roma'; 
console.log(`il tipo di dato contenuto nella variabile luogo è ${typeof luogo} ovvero un insieme di caratteri alfanumerici.`); 


let numero = 10
console.log(`il tipo di dato contenuto nella variabile numero è ${typeof numero} ovvero un insieme di numeri senza caratteri.`);


let condizione = true; 
console.log(`il tipo di dato contenuto nella variabile condizione è ${typeof condizione}. Questo tipo di variabile consente solo valori true o false che possono essere codificati anche con 0 e 1 `);


let persona = {
  nome:'Andrea',
  cognome:'Ruzittu'
}
console.log(`il tipo di dato contenuto nella variabile persona è ${typeof persona}.`);


let giorniDellaSettimana = ['Lunedi','Martedi', 'Mercoledi', 'Giovedi','Venerdi', 'Sabato','Domenica'];
console.log(`il tipo di dato contenuto nella variabile giorniDellaSettimana è ${typeof giorniDellaSettimana}`);
//Questo è un array ma il typeof lo vede come un oggetto.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 const name = 'Andrea';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 3;
let b = 7;
let c = a+b;
console.log(c);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// name = 'Ruzittu';

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let q = 4;
let risultato = q - x
console.log(risultato)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'John'.toLowerCase();
let name2 = 'john'.toLowerCase();

if(name1==name2){
  console.log(true);
}else{
  console.log(false);
}

let h1 =document.querySelector('h1').innerHTML = `Seconda esercitazione su JS`
let p = document.querySelector('p').innerHTML = `Vedi l'esercizio all'interno del file "D2.js" qua sotto`
let href = document.querySelector('a').innerHTML = `<a href="assets/js/D2.js">File javascript!</a>`
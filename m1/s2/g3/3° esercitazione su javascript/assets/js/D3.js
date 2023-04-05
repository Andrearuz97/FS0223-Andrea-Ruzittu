/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function piugrande(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(piugrande(2, 4))

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function controllaNumero(num) {
  if (num != 5) {
    return ("not equal");
  } else {
    return ("equal")
  }
}
console.log(controllaNumero(4))

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibile(d) {
  if (d % 5 == 0) {
    return ('divisibile');
  } else {
    return ('non è divisibile per 5');
  }
}
console.log(divisibile(5));

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

var confrontovar = function confronto(num1, num2) {
  if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
    return true;
  } else {
    return false;
  }
}
console.log(confrontovar(3, 5))



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCard = 51;
let spedizione = totalShoppingCard + 10;
if (totalShoppingCard > 50) {
  console.log("spedizione gratuita", totalShoppingCard);
} else {
  console.log("spedizione 10 euro", spedizione);
}




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


let totalShoppingCart = 100; //quanto spendo
let totale = totalShoppingCart / 1.2 //applico 20% sconto

if (totale > 50) {
  console.log(totale, 'spedizione gratuita');
} else {
  console.log(totale + 10, 'spedizione costa 10 Euro');
}





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

var g = 10;
var h = 28;
var i = 37;

function ordinamento(g, h, i) {
  if (i > g && i > h) {
    if (g > h) {
      console.log(i, g, h);
    } else {
      console.log(i, h, g);
    }
  } else if (h > i && h > g) {
    if (g > i) {
      console.log(h, g, i);
    } else {
      console.log(h, i, g);
    }
  } else if (g > h && g > i) {
    if (h > i) {
      console.log(g, h, i);
    } else {
      console.log(g, i, h);
    }
  }
}

ordinamento(g, h, i);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numero1 = 2;
console.log('La variabile è di tipo: ' + typeof numero1);
let numeroStringa = '23';
console.log('La variabile è di tipo: ' + typeof numeroStringa);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num = 9
if (num % 2 === 0) {
  console.log(num + " è un numero pari");
} else {
  console.log(num + " è un numero dispari");
}
console.log(num)

/*ESERCIZIO 10 
 Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 11
if (val < 10) {
  console.log("Meno di 10");
  if (val < 5) {
    console.log("Meno di 5");
  }
} else {
  console.log("Uguale a 10 o maggiore");
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],

}
me.city = "Toronto"
me['city'] = 'Toronto';//secondo metodo
console.log(me);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = []; 
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
  }
    console.log(myArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray.pop();
myArray.push(100);
console.log(myArray);

var primo = 15
var secondo = 'stringa'
var terzo = 10

document.getElementById('scrivi').innerHTML = primo - terzo + secondo;

terzo = 50

document.getElementById('scrivi2').innerHTML = primo - terzo + secondo;
const andrea=34


const andreaa=64
document.getElementById('scrivi3').innerHTML = andrea

var conferma = confirm(`ciao condizione ecco come andare a 
capo`)
if(conferma){
    document.getElementById('alert').innerHTML = "conferma"
}else{
    document.getElementById('alert').innerHTML = "non confermare"
}

var a = 150
document.getElementById('scrivo').innerHTML += a //così non cancella quello scritto nell html.
var toTry = 100

var ternary = (toTry == 100) ? 'la variabile è uguale a 100' : 'la variabile è diversa da 100' ;
console.log(ternary)
document.write('<h3>ciao document.write</h3>')

document.getElementById("saluto").innerHTML = "ciao";//terzo
document.getElementById("saluto2").innerHTML = "ciao ancora!";//quarto
//alert("questo è un alert");//primo
//alert(8+6)//secondo
console.log("verifica in console") //quinto
var valore = 15 //sesto
console.log(valore); //settimo
console.log(valore+3) //ottavo
// commento a ringa singola
/*commento a riga
multipla*/
var pesci ="fish"
var nome= 4;
var testo = document.getElementById("test")
testo.innerHTML = typeof nome ;
document.getElementById("test").innerHTML=pesci;
function riassegna(){
pesci = "ho cambiato nome";
document.getElementById("test").innerHTML= pesci;
}
setTimeout(riassegna,4000) //chiamo funzione e do millisecondi di attesa per invocare funzione

var nuovoNome;
if (nome === undefined){
    document.getElementById("error").innerHTML= "la variabile è undefined";
}else{
    document.getElementById("error").innerHTML= "la variabile errore è " + nuovoNome;
} 

function clicca(){
    document.getElementById("trybotton").innerHTML= "😘👌👌👌😒😒😘";
}

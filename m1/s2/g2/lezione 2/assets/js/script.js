//questo script dovrà ricevere attraverso un form il nome e l'età della persona e verificare se è maggiorenne o no e salutarla con il suo nome indicando la maggiore o minore età.
//1° leggere il campo nome e memorizzarlo da qualche parte.
//2° leggere il campo anno e memorizzarlo da qualche parte.
//3° con il valore memorizzato dal campo anno calcolare l'età in base all'anno inserito.
//4° verificare la maggiore età o la minore età.
//5° scrivere nell'html.
//6° cancellare il form.
//7° evento scatenante (eventeHandler)
//click sul BUTTON!
//VARIABILI GLOBALI: BTN(const), età, stato.
//variabili locali:

const btn = document.getElementById('verifica');

btn.addEventListener('click', () => {
    let nome= document.getElementById('nome');
    let anno= document.getElementById('anno');
    calcolaeta(anno.value);
    verifica();
    scrivi(nome.value);
    
});

function calcolaeta(anno){
    eta = 2023 - anno;
}

function verifica (){
    stato = (eta>=18) ? 'maggiorenne' : 'minorenne';
}
function scrivi(nome){
    document.getElementById("mioNome").innerHTML = `ciao ${nome||'Andrea'}`
    document.getElementById("miaVerifica").innerHTML = `La tua età è ${eta} anni. Sei ${stato}`
}
function cancellaForm(){
    nome.value = "";
    anno.value = "";
}
document.getElementById("cancella").addEventListener("click",()=>{
    cancellaForm(nome, anno);
})
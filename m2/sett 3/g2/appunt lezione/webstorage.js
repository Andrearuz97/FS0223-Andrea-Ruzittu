let saveButton = document.getElementById('saveButton');


let textArea = document.querySelector('textarea')


saveButton.addEventListener ("click", ()=>{
let textToSave = textArea.value;


textAereaContent = textArea.value;
localStorage.setItem("savedText",textAereaContent);
} )
let clearButton = document.querySelector('#clearButton');
clearButton.addEventListener ("click", ()=>{
localStorage.removeItem("savedText");
textArea.value = "";
})

const restoreContent = function() {
let textSavedPreviusly = localStorage.getItem("savedText");
if(textSavedPreviusly) {
textArea.value = textSavedPreviusly
}else{
    // comparira solo placeholder
}
}
window.onload = function() {
    restoreContent();
}
    

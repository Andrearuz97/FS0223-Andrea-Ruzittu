let contactList=[];

const campoNome = document.getElementById("nome")
const campoCognome = document.getElementById("cognome")
const campoTelefono = document.getElementById("telefono")

const form = document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault() // ferma la pagina dal suo riavvio automatico
})

const saveButton = document.getElementById("save-button")
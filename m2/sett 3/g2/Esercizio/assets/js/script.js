let listaContatti = [];

const campoNome = document.getElementById('nomeField');
const campoCognome = document.getElementById('cognomeField');
const campoTel = document.getElementById('telField');

const restituisciLista = function(){
  let list = document.querySelector('ul')
  list.innerHTML = ''
  listaContatti.forEach((contatto) => {
    const newLi = document.createElement('li')
    newLi.innerText =
      contatto.nome + ' ' + contatto.cognome + '  ' + contatto.telefono
    list.appendChild(newLi)
  })
}

const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function (e) {
  e.preventDefault() 
  const nuovoUtente = {
    nome: campoNome.value,
    cognome: campoCognome.value,
    telefono: campoTel.value,
  }
  console.log(nuovoUtente)
 
  listaContatti.push(nuovoUtente)

  const listaContattiStringa = JSON.stringify(listaContatti) 
  console.log("valore dell'array stringhifizzato:", listaContattiStringa)
 
  localStorage.setItem('contactsArray', listaContattiStringa)

  campoNome.value = ''
  campoCognome.value = ''
  campoTel.value = ''

  restituisciLista()
})

window.onload = function () {
  if (localStorage.getItem('contactsArray')) {
    let arrayAsAStringFromLocalStorage = localStorage.getItem('contactsArray') 
    let newContactsArray = JSON.parse(arrayAsAStringFromLocalStorage) 
    listaContatti = newContactsArray
    restituisciLista()
  }
}

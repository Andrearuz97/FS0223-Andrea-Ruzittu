class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  const form = document.querySelector('#pet-form');
  const petList = document.querySelector('#pet-list');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
  
    const petName = form.elements['pet-name'].value;
    const ownerName = form.elements['owner-name'].value;
    const species = form.elements['species'].value;
    const breed = form.elements['breed'].value;
  
    const pet = new Pet(petName, ownerName, species, breed);
  
    const listItem = document.createElement('li');
    listItem.textContent = `Il tuo animaletto si chiama ${pet.petName} è un/a ${pet.species}, di razza  ${pet.breed}. Il proprietario si chiama: ${pet.ownerName}`;
  
    // Confronto il proprietario di ogni nuovo animale con quelli già presenti nella lista
    const petsInList = petList.querySelectorAll('li');
    for (let i = 0; i < petsInList.length; i++) {
      const otherPet = petsInList[i].pet;
      if (pet.hasSameOwner(otherPet)) {
        const message = `${pet.petName} e ${otherPet.petName} hanno lo stesso proprietario!`;
        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.textContent = message;
        form.appendChild(alert);
        setTimeout(() => alert.remove(), 30000);
        break;
      }
    }
  
    listItem.pet = pet;
    petList.appendChild(listItem);
    form.reset();
  });
  
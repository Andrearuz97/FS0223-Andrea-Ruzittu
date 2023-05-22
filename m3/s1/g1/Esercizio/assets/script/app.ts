 //Sto generando un numero casuale tra 1 e 100!
function numeroCasuale(): number {
    return Math.floor(Math.random() * 100) + 1;
  }
  //Quì dichiaro una funzione che accetta 3 parametri (il num casuale, il numero scelto dai giocatori 1 e 2 )
  //verrà chiamata nell'eventualità che nessuno dei giocatori indovini il numero generato...
  // restituisce 3 possibili risultati, se restiruisce 0 i giocatori sono alla stessa distanza dal numero generato nel caso restituisca 1 ,il giocatore 1 si è avvicinato di piu, mentre restituisce 2 in tutti gli altri casi.
  function piùVicino(numeroEstratto: number, giocatore1: number, giocatore2: number): number {
    const diff1 = Math.abs(numeroEstratto - giocatore1);
    const diff2 = Math.abs(numeroEstratto - giocatore2);
  
    if (diff1 === diff2) {
      return 0;
    } else if (diff1 < diff2) {
      return 1;
    } else {
      return 2;
    }
  }
  //Quì abbiamo la vera e propria funzione di gioco! la funzione playGames accetta 2 parametri ovvero i numeri puntati dai giocatori! tramite un costrutto if valutiamo i possibili risultati e verifichiamo con i console logs
  function playGame(player1: number, player2: number): void {
    const randomNumber = numeroCasuale();
    console.log(`Il numero casuale generato è: ${randomNumber}`);
  
    if (player1 === randomNumber) {
      console.log("Il giocatore 1 ha indovinato!");
    } else if (player2 === randomNumber) {
      console.log("Il giocatore 2 ha indovinato!");
    } else {
      const piuVicino = piùVicino(randomNumber, player1, player2);
      if (piuVicino === 0) {
        console.log("Entrambi i giocatori sono alla stessa distanza dal numero casuale.");
      } else if (piuVicino === 1) {
        console.log("Il giocatore 1 si è avvicinato di più.");
      } else {
        console.log("Il giocatore 2 si è avvicinato di più.");
      }
    }
  }
  
  
  const puntataGiocatore1 = 39;
  const puntataGiocatore2 = 62;
  playGame(puntataGiocatore1, puntataGiocatore2);
  
abstract class LavoratoreAutonomo {
  codredd: number;
  redditoAnnuoLordo: number;
  tasseInps: number;
  tasseIrpef: number;

  constructor(
    _codredd: number,
    _redditoAnnuoLordo: number,
    _tasseInps: number,
    _tasseIrpef: number
  ) {
    this.codredd = _codredd;
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
    this.tasseInps = _tasseInps;
    this.tasseIrpef = _tasseIrpef;
  }

  abstract getUtileTasse(): number;

  getTasseInps(): number {
    return this.getUtileTasse() * (this.tasseInps / 100);
  }

  getTasseIrpef(): number {
    return this.getUtileTasse() * (this.tasseIrpef / 1000);
  }

  getRedditoAnnuoNetto(): number {
    return (
      this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    );
  }
}

class LavoratoreAutonomoImpl extends LavoratoreAutonomo {
  getUtileTasse(): number {
    return this.redditoAnnuoLordo * (this.codredd / 100);
  }
}

const lavoratore = new LavoratoreAutonomoImpl(20, 50000, 4, 5);
const redditoNetto = lavoratore.getRedditoAnnuoNetto();
console.log(redditoNetto);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    LavoratoreAutonomo.prototype.getTasseInps = function () {
        return this.getUtileTasse() * (this.tasseInps / 100);
    };
    LavoratoreAutonomo.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * (this.tasseIrpef / 1000);
    };
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        return (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
    };
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomoImpl = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoImpl, _super);
    function LavoratoreAutonomoImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoImpl.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * (this.codredd / 100);
    };
    return LavoratoreAutonomoImpl;
}(LavoratoreAutonomo));
var lavoratore = new LavoratoreAutonomoImpl(20, 50000, 4, 5);
var redditoNetto = lavoratore.getRedditoAnnuoNetto();
console.log(redditoNetto);

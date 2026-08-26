export class Veiculo {
    constructor(placa) {
        this.placa = placa;
    }

    getPlaca() {
        return this.placa;
    }

    toString() {
        return "Veiculo: " + this.placa;
    }
}

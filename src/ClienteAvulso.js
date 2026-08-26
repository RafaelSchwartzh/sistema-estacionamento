export class ClienteAvulso {
    constructor(placa) {
        this.placa = placa;
    }

    getPlaca() {
        return this.placa;
    }

    toString() {
        return "Cliente Avulso - Placa: " + this.placa;
    }
}
import { Cliente } from "./Cliente.js";

export class Professor extends Cliente {
    constructor(cpfCnpj, nome, siape) {
        super(cpfCnpj, nome);
        this.siape = siape;
    }

    getSiape() {
        return this.siape;
    }

    adicionarVeiculo(placa) {
        if (this.veiculos.length >= 2) {
            throw new Error("Professor só pode ter até 2 veículos");
        }
        super.adicionarVeiculo(placa);
    }

    podeEntrar() {
        return true;
    }

    toString() {
        return "Professor: " + this.nome + " - SIAPE: " + this.siape + " - CPF: " + this.cpfCnpj;
    }
}
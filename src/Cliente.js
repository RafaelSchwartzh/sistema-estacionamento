import { Veiculo } from "./Veiculo.js";

export class Cliente {
    constructor(cpfCnpj, nome) {
        this.cpfCnpj = cpfCnpj;
        this.nome = nome;
        this.veiculos = [];
    }

    getCpfCnpj() {
        return this.cpfCnpj;
    }

    getNome() {
        return this.nome;
    }

    adicionarVeiculo(placa) {
        let veiculo = new Veiculo(placa);
        this.veiculos.push(veiculo);
    }

    temVeiculo(placa) {
        let encontrou = false;
        for (let i = 0; i < this.veiculos.length; i++) {
            if (this.veiculos[i].getPlaca() === placa) {
                encontrou = true;
            }
        }
        return encontrou;
    }

    getVeiculos() {
        return this.veiculos;
    }

    toString() {
        return "Cliente: " + this.nome + " - CPF/CNPJ: " + this.cpfCnpj;
    }
}
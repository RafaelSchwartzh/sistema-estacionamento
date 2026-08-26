import { Cliente } from "./Cliente.js";

export class Estudante extends Cliente {
    constructor(cpfCnpj, nome, matricula, saldo = 0) {
        super(cpfCnpj, nome);
        this.matricula = matricula;
        this.saldo = saldo;
        this.bloqueado = false;
    }

    getMatricula() {
        return this.matricula;
    }

    getSaldo() {
        return this.saldo;
    }

    getBloqueado() {
        return this.bloqueado;
    }

    carregarSaldo(valor) {
        this.saldo = this.saldo + valor;
        if (this.saldo >= 0) {
            this.bloqueado = false;
        }
    }

    deduzirSaldo(valor) {
        this.saldo = this.saldo - valor;
        if (this.saldo < 0) {
            this.bloqueado = true;
        }
    }

    podeEntrar() {
        if (this.saldo < 0) {
            return false;
        }
        return true;
    }

    adicionarVeiculo(placa) {
        if (this.veiculos.length >= 1) {
            throw new Error("Estudante só pode ter 1 veículo");
        }
        super.adicionarVeiculo(placa);
    }

    toString() {
        let status = "";
        if (this.bloqueado) {
            status = " [BLOQUEADO]";
        }
        return "Estudante: " + this.nome + " - Matrícula: " + this.matricula + " - Saldo: " + this.saldo + status;
    }
}

import { Cliente } from "./Cliente.js";

export class Empresa extends Cliente {
    constructor(cnpj, nome, razaoSocial) {
        super(cnpj, nome);
        this.razaoSocial = razaoSocial;
        this.debito = 0;
        this.inadimplente = false;
    }

    getRazaoSocial() {
        return this.razaoSocial;
    }

    getDebito() {
        return this.debito;
    }

    getInadimplente() {
        return this.inadimplente;
    }

    adicionarDebito(valor) {
        this.debito = this.debito + valor;
    }

    pagarDebito(valor) {
        this.debito = this.debito - valor;
        if (this.debito <= 0) {
            this.inadimplente = false;
            this.debito = 0;
        }
    }

    marcarInadimplente() {
        this.inadimplente = true;
    }

    podeEntrar() {
        if (this.inadimplente) {
            return false;
        }
        return true;
    }

    toString() {
        let status = "";
        if (this.inadimplente) {
            status = " [INADIMPLENTE]";
        }
        return "Empresa: " + this.nome + " - CNPJ: " + this.cpfCnpj + " - Débito: " + this.debito + status;
    }
}
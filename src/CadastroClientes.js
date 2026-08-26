import { Professor } from "./Professor.js";
import { Estudante } from "./Estudante.js";
import { Empresa } from "./Empresa.js";

export class CadastroClientes {
    constructor() {
        this.clientes = [];
    }

    cadastrarCliente(cliente) {
        this.clientes.push(cliente);
    }

    buscarPorCpfCnpj(cpfCnpj) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCpfCnpj() === cpfCnpj) {
                return this.clientes[i];
            }
        }
        return null;
    }

    buscarPorPlaca(placa) {
        let clienteEncontrado = null;
        for (let i = 0; i < this.clientes.length; i++) {
            let temPlaca = this.clientes[i].temVeiculo(placa);
            if (temPlaca) {
                clienteEncontrado = this.clientes[i];
            }
        }
        return clienteEncontrado;
    }

    obterTodos() {
        return this.clientes;
    }

    removerCliente(cpfCnpj) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCpfCnpj() === cpfCnpj) {
                this.clientes.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    toString() {
        let resultado = "=== CADASTRO DE CLIENTES ===\n";
        for (let i = 0; i < this.clientes.length; i++) {
            resultado = resultado + this.clientes[i].toString() + "\n";
        }
        return resultado;
    }
}
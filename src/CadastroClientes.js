import { Professor } from "./Professor.js";
import { Estudante } from "./Estudante.js";
import { Empresa } from "./Empresa.js";

export class CadastroClientes {
    constructor() {
        this.clientes = new Map();
        this.placas = new Map();
    }

    cadastrarCliente(cliente) {
        let cpfCnpj = cliente.getCpfCnpj();
        this.clientes.set(cpfCnpj, cliente);
        
        let veiculos = cliente.getVeiculos();
        for (let i = 0; i < veiculos.length; i++) {
            let placa = veiculos[i].getPlaca();
            this.placas.set(placa, cpfCnpj);
        }
    }

    buscarPorCpfCnpj(cpfCnpj) {
        let resultado = this.clientes.get(cpfCnpj);
        if (resultado == null) {
            return null;
        }
        return resultado;
    }

    buscarPorPlaca(placa) {
        let cpfCnpj = this.placas.get(placa);
        if (cpfCnpj == null) {
            return null;
        }
        let cliente = this.clientes.get(cpfCnpj);
        return cliente;
    }

    obterTodos() {
        let resultado = [];
        for (let cliente of this.clientes.values()) {
            resultado.push(cliente);
        }
        return resultado;
    }

    removerCliente(cpfCnpj) {
        let cliente = this.clientes.get(cpfCnpj);
        if (cliente == null) {
            return false;
        }
        
        let veiculos = cliente.getVeiculos();
        for (let i = 0; i < veiculos.length; i++) {
            let placa = veiculos[i].getPlaca();
            this.placas.delete(placa);
        }
        
        this.clientes.delete(cpfCnpj);
        return true;
    }

    toString() {
        let resultado = "=== CADASTRO DE CLIENTES ===\n";
        for (let cliente of this.clientes.values()) {
            resultado = resultado + cliente.toString() + "\n";
        }
        return resultado;
    }
}
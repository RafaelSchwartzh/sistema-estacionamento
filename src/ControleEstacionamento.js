import { CadastroClientes } from "./CadastroClientes.js";
import { RegistroDeEntradas_E_Saidas } from "./RegistroDeEntradas_E_Saidas.js";
import { ClienteAvulso } from "./ClienteAvulso.js";
import { CalculadoraCusto } from "./CalculadoraCusto.js";
import { Desconto } from "./Desconto.js";

export class ControleEstacionamento {
    constructor() {
        this.cadastroClientes = new CadastroClientes();
        this.registroEntradas = new RegistroDeEntradas_E_Saidas();
        this.bloqueados = [];
        this.calculadora = new CalculadoraCusto();
        this.desconto = new Desconto();
        this.vagas = 9000;
        this.vagasOcupadas = 0;
    }

    verificarBloqueio(placa) {
        for (let i = 0; i < this.bloqueados.length; i++) {
            if (this.bloqueados[i] === placa) {
                return true;
            }
        }
        return false;
    }

    adicionarAoBloqueio(placa) {
        let jaExiste = false;
        for (let i = 0; i < this.bloqueados.length; i++) {
            if (this.bloqueados[i] === placa) {
                jaExiste = true;
            }
        }
        if (!jaExiste) {
            this.bloqueados.push(placa);
        }
    }

    autorizarEntrada(placa) {
        if (this.verificarBloqueio(placa)) {
            return {
                autorizado: false,
                motivo: "Placa bloqueada"
            };
        }

        if (this.vagasOcupadas >= this.vagas) {
            return {
                autorizado: false,
                motivo: "Sem vagas"
            };
        }

        let cliente = this.cadastroClientes.buscarPorPlaca(placa);

        if (cliente != null) {
            if (!cliente.podeEntrar()) {
                return {
                    autorizado: false,
                    motivo: "Cliente nao pode entrar"
                };
            }

            let tipo = cliente.constructor.name;

            if (tipo === "Professor") {
                let veiculosEstacionados = 0;
                let veiculos = cliente.getVeiculos();
                for (let i = 0; i < veiculos.length; i++) {
                    let v = veiculos[i];
                    let placaDoVeiculo = v.getPlaca();
                    let ticket = this.registroEntradas.buscarPorPlaca(placaDoVeiculo);
                    if (ticket != null) {
                        veiculosEstacionados = veiculosEstacionados + 1;
                    }
                }

                if (veiculosEstacionados >= 1) {
                    return {
                        autorizado: false,
                        motivo: "Professor ja tem veiculo"
                    };
                }
            }

            this.registroEntradas.registrarEntrada(placa, tipo);
            this.vagasOcupadas = this.vagasOcupadas + 1;

            return {
                autorizado: true,
                motivo: "Entrada autorizada"
            };
        }

        this.registroEntradas.registrarEntrada(placa, "ClienteAvulso");
        this.vagasOcupadas = this.vagasOcupadas + 1;

        return {
            autorizado: true,
            motivo: "Entrada autorizada"
        };
    }

    processarSaida(placa, pagou) {
        let ticket = this.registroEntradas.buscarPorPlaca(placa);

        if (ticket == null) {
            return {
                sucesso: false,
                motivo: "Veiculo nao encontrado"
            };
        }

        this.registroEntradas.registrarSaida(placa);
        let custo = this.calculadora.calcular(ticket);
        ticket.setCusto(custo);

        let cliente = this.cadastroClientes.buscarPorPlaca(placa);

        if (cliente != null) {
            let tipoCliente = cliente.constructor.name;

            if (tipoCliente === "Estudante") {
                let descontoInfo = this.desconto.aplicar(cliente, ticket, this.registroEntradas);
                if (descontoInfo.valor > 0) {
                    ticket.setDesconto(descontoInfo.nome, descontoInfo.valor);
                }
                cliente.deduzirSaldo(ticket.getValorDevido());
                ticket.setValorPago(ticket.getValorDevido());
            }

            if (tipoCliente === "Professor") {
                ticket.setValorPago(0);
            }

            if (tipoCliente === "Empresa") {
                cliente.adicionarDebito(custo);
                ticket.setValorPago(custo);
            }
        } else {
            if (pagou) {
                ticket.setValorPago(ticket.getValorDevido());
            } else {
                this.adicionarAoBloqueio(placa);
                ticket.setValorPago(0);
            }
        }

        this.vagasOcupadas = this.vagasOcupadas - 1;

        return {
            sucesso: true,
            ticket: ticket
        };
    }

    obterVagasDisponiveis() {
        return this.vagas - this.vagasOcupadas;
    }

    obterVagasOcupadas() {
        return this.vagasOcupadas;
    }

    obterCadastroClientes() {
        return this.cadastroClientes;
    }

    obterRegistroEntradas() {
        return this.registroEntradas;
    }

    obterBloqueados() {
        return this.bloqueados;
    }

    toString() {
        return "Estacionamento - Vagas: " + this.vagasOcupadas + "/" + this.vagas;
    }
}
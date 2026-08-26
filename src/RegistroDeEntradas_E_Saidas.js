import { TicketEstacionamento } from "./TicketEstacionamento.js";

export class RegistroDeEntradas_E_Saidas {
    constructor() {
        this.tickets = [];
        this.ticketsPorPlaca = new Map();
    }

    registrarEntrada(placa, tipoCliente) {
        let ticket = new TicketEstacionamento(placa, tipoCliente);
        this.tickets.push(ticket);
        this.ticketsPorPlaca.set(placa, ticket);
        return ticket;
    }

    buscarPorPlaca(placa) {
        let ticket = this.ticketsPorPlaca.get(placa);
        if (ticket == null) {
            return null;
        }
        if (ticket.getSaida() === null) {
            return ticket;
        }
        return null;
    }

    registrarSaida(placa) {
        let ticket = this.buscarPorPlaca(placa);
        if (ticket != null) {
            ticket.registrarSaida();
            this.ticketsPorPlaca.delete(placa);
            return ticket;
        }
        return null;
    }

    obterTodos() {
        return this.tickets;
    }

    obterPorPlaca(placa) {
        let resultado = [];
        for (let i = 0; i < this.tickets.length; i++) {
            if (this.tickets[i].getPlaca() === placa) {
                resultado.push(this.tickets[i]);
            }
        }
        return resultado;
    }

    toString() {
        let resultado = "=== REGISTRO DE ENTRADAS E SAIDAS ===\n";
        for (let i = 0; i < this.tickets.length; i++) {
            resultado = resultado + this.tickets[i].toString() + "\n";
        }
        return resultado;
    }
}
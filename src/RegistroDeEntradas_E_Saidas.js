import { TicketEstacionamento } from "./TicketEstacionamento.js";

export class RegistroDeEntradas_E_Saidas {
    constructor() {
        this.tickets = [];
    }

    registrarEntrada(placa, tipoCliente) {
        let ticket = new TicketEstacionamento(placa, tipoCliente);
        this.tickets.push(ticket);
        return ticket;
    }

    buscarPorPlaca(placa) {
        let ticketEncontrado = null;
        for (let i = 0; i < this.tickets.length; i++) {
            let ehPlaca = this.tickets[i].getPlaca() === placa;
            let naoPossuiSaida = this.tickets[i].getSaida() === null;
            if (ehPlaca && naoPossuiSaida) {
                ticketEncontrado = this.tickets[i];
            }
        }
        return ticketEncontrado;
    }

    registrarSaida(placa) {
        let ticket = this.buscarPorPlaca(placa);
        if (ticket != null) {
            ticket.registrarSaida();
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
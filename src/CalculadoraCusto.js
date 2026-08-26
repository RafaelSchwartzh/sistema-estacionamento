export class CalculadoraCusto {
    calcular(ticket) {
        let tipoCliente = ticket.getTipoCliente();
        
        if (tipoCliente === "Professor") {
            return 0;
        }

        if (tipoCliente === "Estudante") {
            return 10;
        }

        if (tipoCliente === "Empresa") {
            let dataEntrada = ticket.getEntrada().getDate();
            let dataSaida = ticket.getSaida().getDate();

            if (dataEntrada === dataSaida) {
                return 70;
            } else {
                return 140;
            }
        }

        if (tipoCliente === "ClienteAvulso") {
            let tempo = ticket.getSaida() - ticket.getEntrada();
            let horas = tempo / (1000 * 60 * 60);

            if (horas <= 6) {
                let custo = Math.ceil(horas) * 10;
                return custo;
            }

            if (horas > 6) {
                return 70;
            }
        }

        return 0;
    }
}
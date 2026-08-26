export class Desconto {
    aplicar(cliente, ticket, registroEntradas) {
        let tipo = ticket.getTipoCliente();

        if (tipo === "Professor") {
            return {
                nome: "nenhum",
                valor: 0
            };
        }

        if (tipo === "Estudante") {
            return {
                nome: "nenhum",
                valor: 0
            };
        }

        if (tipo === "Empresa") {
            return {
                nome: "nenhum",
                valor: 0
            };
        }

        if (tipo === "ClienteAvulso") {
            let placa = ticket.getPlaca();
            let entradas = this.contarEntradosUltimos5Dias(placa, registroEntradas);
            
            if (entradas >= 3) {
                let desconto = Math.floor(ticket.getCusto() * 0.20);
                return {
                    nome: "ClienteFrequente",
                    valor: desconto
                };
            }

            return {
                nome: "nenhum",
                valor: 0
            };
        }

        return {
            nome: "nenhum",
            valor: 0
        };
    }

    contarEntradosUltimos5Dias(placa, registroEntradas) {
        let hoje = new Date();
        let dataLimite = new Date();
        dataLimite.setDate(dataLimite.getDate() - 5);

        let tickets = registroEntradas.obterPorPlaca(placa);
        let contador = 0;

        for (let i = 0; i < tickets.length; i++) {
            let ticket = tickets[i];
            let dataSaida = ticket.getSaida();
            
            if (dataSaida != null) {
                if (dataSaida >= dataLimite && dataSaida <= hoje) {
                    contador = contador + 1;
                }
            }
        }

        return contador;
    }

    toString() {
        return "Sistema de Descontos";
    }
}
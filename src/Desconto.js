export class Desconto {
    aplicar(cliente, ticket) {
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

    toString() {
        return "Desconto";
    }
}
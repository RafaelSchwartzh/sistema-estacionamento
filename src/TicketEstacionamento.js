export class TicketEstacionamento {
    constructor(placa, tipoCliente) {
        this.placa = placa;
        this.tipoCliente = tipoCliente;
        this.entrada = new Date();
        this.saida = null;
        this.custo = 0;
        this.desconto = "nenhum";
        this.valorDesconto = 0;
        this.valorDevido = 0;
        this.valorPago = 0;
    }

    getPlaca() {
        return this.placa;
    }

    getTipoCliente() {
        return this.tipoCliente;
    }

    getEntrada() {
        return this.entrada;
    }

    getSaida() {
        return this.saida;
    }

    registrarSaida() {
        this.saida = new Date();
    }

    setCusto(valor) {
        this.custo = valor;
        this.valorDevido = valor;
    }

    setDesconto(nome, valor) {
        this.desconto = nome;
        this.valorDesconto = valor;
        let novoValorDevido = this.custo - valor;
        this.valorDevido = novoValorDevido;
    }

    setValorPago(valor) {
        this.valorPago = valor;
    }

    getCusto() {
        return this.custo;
    }

    getValorDevido() {
        return this.valorDevido;
    }

    getValorPago() {
        return this.valorPago;
    }

    toString() {
        return "Ticket - Placa: " + this.placa + " - Tipo: " + this.tipoCliente + " - Custo: " + this.custo;
    }
}
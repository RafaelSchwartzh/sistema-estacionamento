import { ControleEstacionamento } from "../src/ControleEstacionamento.js";
import { Professor } from "../src/Professor.js";
import { Estudante } from "../src/Estudante.js";
import { Empresa } from "../src/Empresa.js";

let controle = new ControleEstacionamento();

console.log("=== TESTE 1: Cadastrar Cliente Professor ===");
let prof = new Professor("12345678901", "João Silva", "SIAPE001");
prof.adicionarVeiculo("ABC1234");
controle.obterCadastroClientes().cadastrarCliente(prof);
console.log(prof.toString());

console.log("\n=== TESTE 2: Cadastrar Cliente Estudante ===");
let est = new Estudante("98765432100", "Maria Santos", "MAT001", 50);
est.adicionarVeiculo("DEF5678");
controle.obterCadastroClientes().cadastrarCliente(est);
console.log(est.toString());

console.log("\n=== TESTE 3: Cadastrar Cliente Empresa ===");
let emp = new Empresa("11222333000181", "Tech Solutions", "Tech Solutions LTDA");
emp.adicionarVeiculo("GHI9012");
emp.adicionarVeiculo("JKL3456");
controle.obterCadastroClientes().cadastrarCliente(emp);
console.log(emp.toString());

console.log("\n=== TESTE 4: Entrada de Professor ===");
let resultadoEntrada = controle.autorizarEntrada("ABC1234");
let autorizadoProf = resultadoEntrada.autorizado;
let motivoProf = resultadoEntrada.motivo;
console.log("Autorizado: " + autorizadoProf);
console.log("Motivo: " + motivoProf);
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 5: Entrada de Estudante ===");
resultadoEntrada = controle.autorizarEntrada("DEF5678");
let autorizadoEst = resultadoEntrada.autorizado;
console.log("Autorizado: " + autorizadoEst);
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 6: Entrada de Cliente Avulso ===");
resultadoEntrada = controle.autorizarEntrada("XYZ9999");
let autorizadoAvulso = resultadoEntrada.autorizado;
console.log("Autorizado: " + autorizadoAvulso);
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 7: Saida de Professor (Gratuito) ===");
let resultadoSaida = controle.processarSaida("ABC1234", true);
let sucessoSaida = resultadoSaida.sucesso;
if (sucessoSaida) {
    let ticket = resultadoSaida.ticket;
    console.log("Placa: " + ticket.getPlaca());
    console.log("Tipo: " + ticket.getTipoCliente());
    console.log("Custo: " + ticket.getCusto());
    console.log("Valor Pago: " + ticket.getValorPago());
}
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 8: Saida de Estudante ===");
resultadoSaida = controle.processarSaida("DEF5678", true);
sucessoSaida = resultadoSaida.sucesso;
if (sucessoSaida) {
    let ticket = resultadoSaida.ticket;
    let placar = ticket.getPlaca();
    let tipoTicket = ticket.getTipoCliente();
    let custoTicket = ticket.getCusto();
    console.log("Placa: " + placar);
    console.log("Tipo: " + tipoTicket);
    console.log("Custo: " + custoTicket);
    console.log("Saldo apos: " + est.getSaldo());
}
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 9: Saida de Cliente Avulso (Pagou) ===");
resultadoSaida = controle.processarSaida("XYZ9999", true);
sucessoSaida = resultadoSaida.sucesso;
if (sucessoSaida) {
    let ticket = resultadoSaida.ticket;
    console.log("Placa: " + ticket.getPlaca());
    console.log("Tipo: " + ticket.getTipoCliente());
    console.log("Custo: " + ticket.getCusto());
    console.log("Valor Pago: " + ticket.getValorPago());
}

console.log("\n=== TESTE 10: Status Final ===");
console.log(controle.toString());
let vagasDisp = controle.obterVagasDisponiveis();
console.log("Total de vagas disponiveis: " + vagasDisp);

console.log("\n=== FIM DOS TESTES ===");
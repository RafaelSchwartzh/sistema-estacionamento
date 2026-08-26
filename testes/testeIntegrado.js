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
let resultado1 = controle.autorizarEntrada("ABC1234");
console.log("Autorizado: " + resultado1.autorizado);
console.log("Motivo: " + resultado1.motivo);
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 5: Entrada de Estudante ===");
let resultado2 = controle.autorizarEntrada("DEF5678");
console.log("Autorizado: " + resultado2.autorizado);
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 6: Entrada de Cliente Avulso ===");
let resultado3 = controle.autorizarEntrada("XYZ9999");
console.log("Autorizado: " + resultado3.autorizado);
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 7: Saida de Professor ===");
let saidaProf = controle.processarSaida("ABC1234", true);
if (saidaProf.sucesso) {
    console.log("Placa: " + saidaProf.ticket.getPlaca());
    console.log("Tipo: " + saidaProf.ticket.getTipoCliente());
    console.log("Custo: " + saidaProf.ticket.getCusto());
    console.log("Valor Pago: " + saidaProf.ticket.getValorPago());
}
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 8: Saida de Estudante ===");
let saidaEst = controle.processarSaida("DEF5678", true);
if (saidaEst.sucesso) {
    console.log("Placa: " + saidaEst.ticket.getPlaca());
    console.log("Tipo: " + saidaEst.ticket.getTipoCliente());
    console.log("Custo: " + saidaEst.ticket.getCusto());
    console.log("Saldo apos: " + est.getSaldo());
}
console.log("Vagas ocupadas: " + controle.obterVagasOcupadas());

console.log("\n=== TESTE 9: Saida de Cliente Avulso ===");
let saidaAvulso = controle.processarSaida("XYZ9999", true);
if (saidaAvulso.sucesso) {
    console.log("Placa: " + saidaAvulso.ticket.getPlaca());
    console.log("Tipo: " + saidaAvulso.ticket.getTipoCliente());
    console.log("Custo: " + saidaAvulso.ticket.getCusto());
    console.log("Valor Pago: " + saidaAvulso.ticket.getValorPago());
}

console.log("\n=== TESTE 10: Status Final ===");
console.log(controle.toString());
console.log("Total de vagas disponiveis: " + controle.obterVagasDisponiveis());

console.log("\n=== FIM DOS TESTES ===");
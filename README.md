# Sistema de Estacionamento

## O que é este projeto?

Um sistema para controlar carros que entram e saem de um estacionamento. O sistema cobra as pessoas, registra tudo e controla as vagas.

## Quantas vagas tem?

9.000 vagas.

## Tipos de Cliente

### Cliente Avulso
Pessoas que não são cadastradas. Pagam por hora.
- Custa R$ 10 por hora
- Se ficar mais de 6 horas, paga R$ 70 (diária)
- Se não pagar, a placa é bloqueada

### Professor
Professores da universidade. Entrada grátis.
- Pode ter até 2 carros cadastrados
- Mas só pode ter 1 carro no estacionamento por vez
- Não paga nada

### Estudante
Alunos da universidade. Pagam ingresso fixo.
- Custa R$ 10 por ingresso
- Só vale entrada e saída no mesmo dia
- Se sair depois da meia-noite, cobra mais um ingresso
- Tem que ter créditos na conta (pré-pago)
- Se ficar negativo, fica bloqueado

### Empresa
Empresas com vários carros de funcionários.
- Pode ter quantos carros quiser
- Todos podem estar estacionados ao mesmo tempo
- Custa R$ 70 por dia
- Se deixar carro após meia-noite, cobra multa
- Recebe boleto para pagar

## Pastas do Projeto

sistema-estacionamento/
├── src/
│ ├── Veiculo.js
│ ├── Cliente.js
│ ├── Professor.js
│ ├── Estudante.js
│ ├── Empresa.js
│ ├── ClienteAvulso.js
│ ├── TicketEstacionamento.js
│ ├── CadastroClientes.js
│ ├── RegistroDeEntradas_E_Saidas.js
│ ├── CalculadoraCusto.js
│ ├── Desconto.js
│ └── ControleEstacionamento.js
├── testes/
│ └── testeIntegrado.js
├── dados/
├── package.json
├── .gitignore
└── README.md


## Como usar

### Instalar
```bash
npm install
```

### Rodar testes
```bash
node testes/testeIntegrado.js
```

## O que cada classe faz?

### ControleEstacionamento
É a classe principal. Controla quem entra, quem sai e quanto custa.

### CadastroClientes
Guarda os dados de todos os clientes cadastrados.

### RegistroDeEntradas_E_Saidas
Registra cada vez que um carro entra ou sai.

### CalculadoraCusto
Calcula quanto cada tipo de cliente tem que pagar.

## O que está pronto?

- Cadastrar clientes
- Cadastrar placas de carros
- Deixar carros entrar
- Registrar saída de carros
- Calcular quanto cobra
- Bloquear clientes que não pagam
- Testes para testar tudo

## O que vai fazer depois?

- Salvar tudo em arquivo
- Desconto para clientes frequentes
- Interface para o usuário usar
- Relatórios com estatísticas
- Salvar lista de bloqueados

## Quem fez?

Rafael Alves Schwartzhanpt - PUCRS Online - Programação orientada a objetos
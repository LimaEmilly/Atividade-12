const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250.0,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200.0,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100.0,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501.0,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750.0,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];

console.log("Quantidade de pessoas:", data.length);

const homens = data.filter((data) => data.sexo === "M");
console.log("Quantidade de pessoas do sexo masculino:", homens.length);
const mulheres = data.filter((data) => data.sexo === "F");
console.log("Quantidade de pessoas do sexo feminino:", mulheres.length);

const somaSalarios = data.reduce((total, data) => total + data.salario, 0);
console.log("Soma dos salários de todas as pessoas:", somaSalarios.toFixed(2));
const mediaSalarios = somaSalarios / data.length;
console.log(
  "Média dos salários de todas as pessoas:",
  mediaSalarios.toFixed(2)
);
const somaSalariosHomens = homens.reduce(
  (total, homem) => total + homem.salario,
  0
);
console.log(
  "Soma dos salários de todas as pessoas do sexo masculino:",
  somaSalariosHomens
);

const SalarioAlto = data.some((data) => data.salario > 7000);
console.log("Existe algum salário superior a R$ 7.000?", SalarioAlto);

const posicaoEva = data.findIndex(data => data.nome === "Eva Trindade");
console.log("Posição da pessoa de nome 'Eva Trindade':", posicaoEva)

const sobrenomeSilva = data.filter(data => data.nome.includes("Silva"));
console.log("Pessoas com sobrenome 'Silva':", sobrenomeSilva);

const nomes = data.map(data => data.nome);
console.log("Nomes das pessoas:", nomes);

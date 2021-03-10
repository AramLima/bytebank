
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Arthur', 123456);
const cliente2 = new Cliente('Vanessa', 654321);

const contaCorrenteArthur = new ContaCorrente(cliente1, 123);
const contaCorrenteVan = new ContaCorrente(cliente2, 123);

console.log(contaCorrenteVan);
console.log(contaCorrenteArthur);
console.log(cliente1.nome);
console.log(cliente1._cpf);
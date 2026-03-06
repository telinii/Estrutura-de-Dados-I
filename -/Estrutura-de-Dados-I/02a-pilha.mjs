import stack from "./lib/stack.mjs";

let pilha = new stack();
console.log(pilha.print());
console.log("Esta vazia? ", pilha.isEmpty);

pilha.push(67);
pilha.push(45);
pilha.push(102);

let removido = pilha.pop();
console.log({removido}, pilha.print());

let ultimo = pilha.peek();
console.log({ultimo}, pilha.print());

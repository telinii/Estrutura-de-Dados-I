import stack from "./lib/stack.mjs";

let frase = "Socorram-me, subi no ônibus em Marrocos";

let pilha = new stack();

for(let i = 0; i < frase.length; i++) {
    // inserindo cada carectere separadamente dentro do vetor
    pilha.push(frase.charAt(i));
}
console.log(pilha.print());

let reverso = "";

while(! pilha.isEmpty) {
    // imprimindo o reverso da pilha
    reverso += pilha.pop();
}
console.log(reverso);
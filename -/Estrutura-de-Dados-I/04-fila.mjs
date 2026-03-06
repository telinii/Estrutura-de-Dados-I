import Queue from "./lib/Queue.mjs";

let fila = new Queue();
console.log(fila.print());
console.log("Está vazia?", fila.isEmpty);

// inserções na fila
fila.enqueue("Alexandre");
fila.enqueue("João");
fila.enqueue("Maria");
fila.enqueue("José");
fila.enqueue("Joaquim");
console.log(fila.print());

// quem será atendido
let proximo = fila.peek();
console.log({proximo});
console.log(fila.print());

//remoção da fila


let atendido = fila.dequeue();
console.log({atendido});



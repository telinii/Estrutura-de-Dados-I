// lista de comprar

import Deque from '/home/luca/Documentos/-/Deque.mjs'


let listaCompras = new Deque()

console.log(listaCompras.print());
console.log("A lista esta vazia?\n"+listaCompras.isEmpty);

// produtos alimenticios - > inicio
listaCompras.insertFront("Arroz");
listaCompras.insertFront("Feijão");
listaCompras.insertFront("Macarrão");
listaCompras.insertFront("Sal");
listaCompras.insertFront("Açucar");
console.log(listaCompras.print());

// produtos Higiene/limpeza - > final
listaCompras.insertBack("Sabão em pó")
listaCompras.insertBack("Desodorante")
listaCompras.insertBack("Água sanitária")
listaCompras.insertBack("Shampoo")
listaCompras.insertBack("Condicionador")

let removido = listaCompras.removeFront()
console.log({removido});
console.log(listaCompras.print());

let frente = listaCompras.peekFront()
let ultimo = listaCompras.peekBack()

console.log({frente})
console.log({ultimo})

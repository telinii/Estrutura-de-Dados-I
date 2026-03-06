export default class Queue{
    
    #data //vetor private

    constructor(){
        this.#data = [];
    }

    // metodo para inserção na fila
    enqueue(val){
        // enfileirando
        this.#data.push(val);
    }

    // metodo para remoção na fila
    dequeue(){
        //shift para remover o primeiro e refazer o vetor
        return this.#data.shift();
    }

    //metodo para consultar o inicio da fila sem remover o elemento
    peek(){
        // vendo que está na posição zero
        return this.#data[0];
    }

    // a fila esta vazia
    get isEmpty(){
        return this.#data.length === 0;
    }

    // metodo impresssao da fila (para efeitos de depuração)
    print(){
        let output = "[ ";
        for(let i = 0; i < this.#data.length; i++){
            if(output !== "[ "){
                output += ", ";
            }
            output += `(${i+1}): ${this.#data[i]}`
        }
        return output + " ]";
    }
}
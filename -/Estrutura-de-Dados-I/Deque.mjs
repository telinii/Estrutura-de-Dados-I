// filas de duas pontas
// lista linear de acesso restrito
// permite apenas enfileiramento(insertfront/insertback) e desenfileiramento(removefront/removeback)
// nao segue o principio de FIFO (First In, First Out)
export default class Deque {

#data // vetor privado

constructor() {
    this.#data = [];
}
//metodo para inserção no inicio da estrutura
    insertFront(val) {
        this.#data.unshift(val);
    }
//metodo para inserção no final da estrutura
    insertBack(val) {
        this.#data.push(val);
    }

// metdodo para remocao do inicio da estrutura
    removeFront() {
        return this.#data.shift();
    }

// metodo para remocao do final da estrutura
    removeBack(){
        return this.#data.pop();
    }
// metodo para consultar o inicio da estrutura
    peekFront() {
        return this.#data[0];
    }

// metodo para consultar o final da estrutura
    peekBack() {
        return this.#data[this.#data.length - 1];
    }

    get isEmpty() {
        // ternario (alternativa para fazer condicional pq o if e else não vai funcionar)
        return this.#data.length === 0 ? "SIm, está vazia!" : "Não!";
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
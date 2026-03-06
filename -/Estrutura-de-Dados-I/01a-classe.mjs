class FormaGeometrica{
    // privando o atributo com # (encapsulamento)
    #base
    #altura
    #tipo

    get base() {
        this.#base;
    }
    get altura() {
        this.#altura;
    }
    get tipo() {
        this.#tipo;
    }

    set base(valor) {
        if(typeof valor !== 'number' || valor <= 0) { 
            throw new Error("ERRO: a base precisa ser numérica e maior que zero.");
        }
        // colocando o valor que a pessoa digitou
        this.#base = valor;
    }   
    set altura(valor) {
        if(typeof valor !== 'number' || valor <= 0) { 
            throw new Error("ERRO: a altura precisa ser numérica e maior que zero.");
        }
        // colocando o valor que a pessoa digitou
        this.#altura = valor;
    }   

    set tipo(valor) {
        if(!["R", "T", "E"].includes(valor.toUppercase())) {
            throw new Error("ERRO: o tipo precisa ser um dos valores: R, T ou E.");
        }
        // colocando o valor que a pessoa digitou
        this.#tipo = valor.toUppercase();
    }
        

        calcArea() {
            switch(this.#tipo) {
                case "R":
                    return this.#base * this.#altura;
                case "T":
                    return this.#base * this.#altura / 2;
                case "E":
                    return (this.#base / 2) * (this.#altura / 2) * Math.PI
            }
        }
}

let forma1 = new FormaGeometrica();
let forma2 = new FormaGeometrica()

forma1.base = 7;
forma1.altura = 22.5;
forma1.tipo = "E";

console.log("Area da forma1: ", forma1.calcArea());

forma2.base = 7;
forma2.altura = 22.5;
forma2.tipo = "E";

console.log("Area da forma1: ", forma1.calcArea());



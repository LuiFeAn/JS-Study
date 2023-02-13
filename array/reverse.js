//Função que simula a lógica do método "reverse", utilizado para reverter a ordem de elementos de um array

Array.prototype.pseudoReverse = function(){


    for( let i = 0; i < Math.floor(this.length / 2); i++){

        const op = this.length - 1 - i;

        const current = this[i];

        this[i] = this[op];

        this[op] = current;

    }


}


const numbers = [ 1, 2, 3, 4, 5 ];


numbers.pseudoReverse();

console.log(numbers);
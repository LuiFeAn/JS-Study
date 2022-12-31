//Função que simula a lógica do método .push, utilizado para adicionar um novo elemento a um array e retorna o novo comprimento do mesmo...

Array.prototype.pseudoPush = function ( ...args ){

    const currentArrayLength = this.length;

    for( let i = 0; i < args.length; i++ ){

        this[currentArrayLength + i] = args[i];

    }

    return this.length;


}


const arr = [1,5];

arr.pseudoPush(6,6);

console.log(arr);
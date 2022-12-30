//Função que simula a lógica do método .every, utilizado para testar se todos os elementos do array passam pelo teste implementado pela função fornecida

Array.prototype.pseudoEvery = function ( callback ){

    let failTest = false;

    for(let i = 0; i < this.length; i++){

        if(callback(this[i],i,this) != true){
            failTest = true;
        }

    }

    return !failTest



}

const arr = ['maça','maça','maça'];

const result = arr.pseudoEvery( item => {
    return item === 'maça'
});

console.log(result);
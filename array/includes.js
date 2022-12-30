//Função que simula a lógica do método .includes, utilizado para verificar se um determinado elemento existe no array

Array.prototype.pseudoIncludes = function( value, fromIndex = 0 ){

    let has = false;

    for( let i = fromIndex; i < this.length; i++){

        if(this[i] === value){
            has = true;
        };

    }

    return has;

}


const arr = [ 0, 5, 10, 'cat' ];

const result = arr.pseudoIncludes('cat');

console.log(result);

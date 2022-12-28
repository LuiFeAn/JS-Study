//Função que simula a lógica do método .filter utilizado para filtrar items/elementos de um array

Array.prototype.pseudoFilter = function ( callback ){

    const filtredArray = [];

    for( let i = 0; i < this.length; i++){

        if(callback(this[i],i,this) === true){
            filtredArray.push(this[i]);
        }
        
    }

   return filtredArray

}


const arr = [ 'Macarrão', 'Banana', 'Macarrão' ];

const result = arr.pseudoFilter( (item) => item === 'Macarrão');

console.log(result);

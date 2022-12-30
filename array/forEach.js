//Função que simula a lógica do método .forEach utilizado para executar uma determinada ação para cada item/elemento de um array

Array.prototype.pseudoForEach = function ( callback ) {

    for(let i = 0; i < this.length; i++){
        callback(this[i],i,this);
    }

}


const arr = [ 1, 2, 3, 4, 5];

arr.pseudoForEach( (item) => {

    console.log(item);

})
//Função que simula a lógica do método .findm utilizado para encontrar e retornar o primeiro item do array que satisfaça a condição passada na callback

Array.prototype.pseudoFind = function ( callback ) {


    for(let i = 0; i < this.length; i++){

        const callbackValue = callback(this[i],i,this);

        if( callbackValue === true){
            return this[i];
        }

    }

}


const  arr = [ 'Maça', 'Banana', 'Pera','Banana', 40];

const result = arr.pseudoFind( item => item > 30);

console.log(result);


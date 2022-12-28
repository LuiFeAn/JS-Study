Array.prototype.pseudoMap = function (callback){

    const newArr = [];

    for( let i = 0; i < this.length; i++){
        const callBackValue = callback(this[i], i, this);
        newArr.push(callBackValue);
    }

    return newArr;

}

const testArr = [ 'Test 1', 'Test 2', 'Test 3'];

const result = testArr.pseudoMap( (item, index) => {
    return item + 'Testado';
});

console.log(result);







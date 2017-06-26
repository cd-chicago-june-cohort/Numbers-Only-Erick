function numbersOnly(arr){
    var newArr = [];
    for(var k=0;k<arr.length;k++){
        if(typeof arr[k] === 'number'){
            newArr.push(k);
        }
    }
    return newArr;
}

var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);

console.log(numbersOnly(newArray));
// Write a function that return exponent of given number

// 1 method for loop

function exponentPower(num, numExponent){
    let result = 1;
    for(let i=1; i<=numExponent; i++){
        result = result * num 
    }
    return result
}
console.log('Solution with For loop', exponentPower(2, 3));

// 2nd Method exponentiation operator

function exponentPower2(num, numExponent){
    const result = num ** numExponent;
    return result;
}

console.log('Solution with Exponentiation Operator', exponentPower2(4,3));

// 3rd Method Math.pow

function exponentPower3(num, numExponent){
    const result = Math.pow(num, numExponent);
    return result;
}

console.log('Solution with Math.pow method', exponentPower3(5,3));



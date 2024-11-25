// Write a function to find a factorial number for given number

// with Loop

function findFactorialNumber(inputNumber) {
    let result = 1;
    for( let i = 1; i<=inputNumber; i++){
        result *= i
    }

    return result
}

console.log(findFactorialNumber(5));

// with Recurrsion Method

function findFactorialNumberwithRecurssion(inputNumber){

    if(inputNumber === 0 || inputNumber === 1){
        return 1;
    }

    return inputNumber * findFactorialNumberwithRecurssion(inputNumber - 1)

}

console.log(findFactorialNumberwithRecurssion(4));


// Find ODD and EVEN number

// With If Else 

function findOddEven(inputnumber){

    const result = inputnumber % 2;

    if(result === 0 ){
        return 'Even'
    }else{
        return 'Odd'
    }

}

console.log('With If Else', findOddEven(444))

// ========= SimpliFied the Above Code

function findOddEvenSimplified(inputnumber){
    
    return  inputnumber % 2 === 0 ? 'Even' : 'Odd';  
}
console.log('With Simplified', findOddEvenSimplified(5));

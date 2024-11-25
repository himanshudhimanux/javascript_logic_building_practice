// Write a function to find Smallest number in given number

// === With If Else

function findSmallestNumber(a,b,c){

    let smallestNumber = a;

    if(b < smallestNumber){
        smallestNumber = b;
    }
    if(c < smallestNumber){
        smallestNumber = c
    }

    return smallestNumber;

}

console.log('Smallest number is', findSmallestNumber(5,6,8));

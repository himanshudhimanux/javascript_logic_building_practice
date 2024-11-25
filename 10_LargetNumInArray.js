// Write a function that return largest number of given Array

// with For Loop

function findLargestNumArr(arrNum){
    let bigNum = arrNum[0];

    for(let i=1; i <= arrNum.length; i++){
        if(arrNum[i] > bigNum){
            bigNum = arrNum[i]
        }
    }

    return bigNum
}

console.log(findLargestNumArr([4,5,9,78,54,12,1545]));

// With prebuilt function Math.max

function findLargestNumArr2(arrNum){
    const result = Math.max(...arrNum);
    return result;
}

console.log(findLargestNumArr2([45,8,4,48,15,36]));


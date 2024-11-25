// Write a function that return Reverse String

// ==== with For loop

function reverseString(str){
    let result = "";
    for(let i = str.length - 1; i>=0; i--){
        result += str[i]
    }

    return result;
    
}
console.log('Reverse String with For loop =>', reverseString('Paras'));

// ======== With Array

function reverseStringArr(arrStr){
    const result = arrStr.split('').reverse().join('');
    return result
}

console.log('Reverse String Array =>', reverseStringArr('Himanshu'));




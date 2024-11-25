// Write a function that return Reverse String

// ==== with For loop

function reverseString(str){

    if(typeof str !== 'string'){
        throw new Error("Only Aplhabet are allwoed");
        
    }

    let result = "";
    for(let i = str.length - 1; i>=0; i--){
        result += str[i]
    }

    return result;
    
}
console.log('Reverse String with For loop =>', reverseString('Paras'));

// ======== With Array

function reverseStringArr(arrStr){

    if(typeof str !== 'string'){
        throw new Error("Only Aplhabet are allwoed");
        
    }

    const result = arrStr.split('').reverse().join('');
    return result
}

console.log('Reverse String Array =>', reverseStringArr(45));




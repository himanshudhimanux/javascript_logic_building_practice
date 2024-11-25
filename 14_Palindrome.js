// Write a function that check if string is palindrome or not

//1 method

function checkPalindrome(inputString){
    inputString = inputString.toLowerCase();
    for(let i = 0; i<=inputString.length / 2 ; i++){
        if(inputString[i] !== inputString[inputString.length - 1 -i] ){
            return false;
        }
        return true;
    }
}

console.log('Ist Method', checkPalindrome("Oppo"))

//2nd Method

function isPalindrome2(inputString){
    inputString = inputString.toLowerCase();
    let start = 0;
    let end = inputString.length -1 ;

    for(start,end; start<end; start++, end--){
        if(inputString[start] !== inputString[end]){
            return false;
        }
    }
    return true;
}

console.log('2nd method', isPalindrome2("Himanshu"));
console.log('2nd method', isPalindrome2("Eye"));

function isPalindrome3(inputString){
    inputString = inputString.toLowerCase();
    const result = inputString.split('').reverse().join('');
    if(result !== inputString){
        return false;
    }
    return true;
}

console.log('3rd method', isPalindrome3("Noon"));
console.log('3rd method', isPalindrome3("Civic"));


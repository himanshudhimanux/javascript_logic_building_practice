// Write a function that check vowel and consonant in given string

function checkVowelConsonant(inputStr) {

    inputStr = inputStr.toLowerCase().replace(/ /g, '');

    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";

    let vowelCount = 0;
    let consonantCount = 0;

    for(let i = 0; i<=inputStr.length; i++){
        if(vowels.includes(inputStr[i])){
            vowelCount++;
        }
        // else if(consonants.includes(inputStr[i]))
        else if(/^[a-z]$/.test(inputStr[i])){
            consonantCount++;
        }
    }

    return {vowelCount,consonantCount}

}

console.log(checkVowelConsonant("Himanshu Dhiman"))
console.log(checkVowelConsonant("Mohit Dhiman"))
console.log(checkVowelConsonant("Sachin Dhiman"))
// Write a function that gives sum of digits

// with Converting into string and the add

function sumofDigits(inputNumber){
    const convertNumintoStr = inputNumber.toString().split('');
    let sumOfConvertedDigits = 0;

    convertNumintoStr.forEach(num => {
        sumOfConvertedDigits = sumOfConvertedDigits + parseInt(num)
    })
    
    return sumOfConvertedDigits

}
console.log(sumofDigits(1714));


// Solution with While loop

function sumofDigits2(inputNumber){
    let number = inputNumber;
    let sumofDigits = 0;

    while (number > 0) {
        let lastDigit = number % 10;
        number = Math.floor(number / 10);
        sumofDigits = sumofDigits + lastDigit
    }
    return sumofDigits
}
console.log(sumofDigits2(565));

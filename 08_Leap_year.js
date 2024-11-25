// Write a function to return a leap year

// 1 method

function isLeapYear(year){
    const result = year % 4;
    if(result === 0 ){
        return true
    }else{
        return false
    }
}

console.log(isLeapYear(2008));

// 2nd Method

function isLeapYear2(year){
    const result = year % 4;
    if(result === 0 ){
        return true;
    }
    return false
}
console.log('2nd method', isLeapYear2(2015));

// 3rd Method

function isLeapYear3(year){
    return year % 4 === 0 ? true : false
}

console.log('With one line simplified', isLeapYear3(2036));


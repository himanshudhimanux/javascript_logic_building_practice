// Write a function that returns multiplication table of give number

// Using For loop with Multiplicatoin

function multiplicationTable(tableof, tabletill){
    for(let i = 1; i <= tabletill; i++){
       result = i * tableof;
       console.log(`${tableof} x ${i} ${i * tableof}`)
    }
    return result;
}

console.log(multiplicationTable(8, 10));


// without For Loop only addtion

function multiplicationTable2(tableof, tabletill){
    for(let i = tableof; i<= tableof * tabletill; i = i+tableof){
        console.log(`${tableof} x ${i}`);
        
    }
}
console.log(multiplicationTable2(4, 10));



function evenNumber(num) {
    if (num % 2 !== 1) {   // evenNumber check alternative syntax
        return true;
    } else {
        return false;
    }
}
console.log(evenNumber(10));

console.log(`----------------`);

// even number check
function numberEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(numberEven(20));

console.log(`---------------`);

// ODD check
function numberOdd(num) {
    if (num % 2 === 1) {
        return true;
    }
    return false;
}


console.log(numberOdd(2));

console.log(`----------------`);


// ODD check
function oddNumber(num) {
    return num % 2 !== 0 ? true : false;
}
console.log(oddNumber(5));
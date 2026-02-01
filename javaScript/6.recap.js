
function doMath(a, b) {
    const sum = a + b;
    const half = a / b;
    const result = sum * half;
    return result;
}

const total = doMath(10, 5);

function directSum(num1, num2) {
    return num1 + num2;
}

const num1 = 10;
const num2 = 9;
const number = directSum(num1, num2);
console.log(`==========================`);

console.log(total);
console.log(`---------------------------`);
console.log(number);
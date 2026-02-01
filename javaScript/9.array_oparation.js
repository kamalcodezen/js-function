
function sumNumbers(number) {
    const nums = number;
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}

const numbers = [2, 6, 4, 9, 3, 5];
const total = sumNumbers(numbers);
console.log( `array total sum = ${total}`);
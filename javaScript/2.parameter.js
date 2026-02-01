
function square(a) {
    let s = a * a;
    console.log(s);
}
square(4);



function evenNumber(a) {
    for (let i = 1; i <= a; i++) {
        // console.log(i);
        if (i % 2 === 0) {
            console.log(i)
        }
    }

}
evenNumber(20);



function sumAll(a, b, c, d, e) {
    let sum = a + b + c + d + e;
    console.log(`Total number sum = ${sum}`);
}
sumAll(2, 3, 5, 6, 8)
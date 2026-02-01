// for given string tell me whether it has even number of character or not.

function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0) {
        console.log("even size");
        return true;
    } else {
        console.log("odd size");
        return false;
    }
}

const name = "kamal";
const check = evenSizedString(name);
console.log(check);
console.log(`--------------------`)
console.log(evenSizedString("kamaluddin"));
console.log("----------------------------");



function oddSizedString(str) {
    console.log(str);
    return str.length % 2 === 0 ? "even size" : "odd size";
}

console.log(oddSizedString("apnaCollege"));
console.log(`---------------`);
console.log(oddSizedString("programmingHero1"));
console.log(`==================`)



function inCrease(number, doDouble) {
    if (doDouble === true /*doDouble*/) {
        const double = number * 2;
        // console.log(double);
        return double;
    } else {
        const double = number * 5;
        // console.log(double);
        return double;
    }
    // return doDouble ? number * 10 : number * 50;
}

const num = 4;
const isSolved = true;
const finalRes = inCrease(num, isSolved); // 1st way function call
console.log(finalRes);
console.log(`********************`)
console.log(inCrease(10, false)); // 2nd way function call
console.log(`=-==-=-=-=-=-=-=--=--=-=-=-=-=-`)




function arraySize(arr) {
    // const size = arr.length; // different way
    // return size;
    return arr.length;
}
console.log(arraySize([2, 56, 4, 5, 2, 7, 8, 9]));





function objPerson(details) {
    const name = details["fullName"]; //details.age
    return name;
}

const person = {
    fullName: "kamal",
    age: 23,
    isPassed: true
}
console.log(objPerson(person))
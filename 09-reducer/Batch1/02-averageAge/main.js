let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

const ageAverage = arr.reduce((acc, item) => (acc + item.age), 0)/arr.length;

console.log(ageAverage);



// FN : (array) => number

// function getAverageAge(array) {
    // Algorithm = SUM age / no.person
    // const sumAge = array.reduce((acc, personObj) => {
    //     let age = personObj.age;
    //     return acc + age;
    // }, 0);

//     const sumAge = array.reduce((a, c) => a + c.age, 0);
//     return sumAge / array.length;
// }

// const result = getAverageAge(arr);
// console.log(result);
const newArray1 = [1, 2, 30, 400].map(item => item*2);
console.log(newArray1);

// const newArray = array.map((element) => {
//     return element * 2;
// });
// const newArray = array.map(function (item, index, array) {
//     // do logic...
//     return item * 2;
// });

// log(newArray);



const newArray2 = [1, 2, 3, 4].map(item => String(item));
console.log(newArray2);

const newArray3 = [1, '1', 2, {}].map(item => typeof(item));
console.log(newArray3);

const newArray4 = ['apple', 'banana', 'orange'].map(item => item.toUpperCase());
console.log(newArray4);

const newArray5 = [1, 3, 4, 5, 6, 7, 8].map(item => (item%2===0) ? "even" : "odd")
console.log(newArray5);

const newArray6 = [1, -3, 2, 8, -4, 5].map(item => Math.abs(item));
console.log(newArray6);

const newArray7 = [100, 200.25, 300.84, 400.3].map(item => item.toFixed(2));
console.log(newArray7);


const arrayMonth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const newArray8 = [0, 5, 10, 7, 6, 5, 0].map(function(item) { return arrayMonth[item]});
console.log(newArray8);

// const array = [0, 5, 10, 7, 6, 5, 0];
// const array = [1, 6, 11, 8, 7, 6, 1];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

// const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const newArray = array.map((monthIndex) => MONTHS[monthIndex]);
// 1st : 0 => MONTHS[0] == "Jan"
// 2nd : 5 => MONTHS[5] == "Jun"

// log(newArray);



const newArray9 = [1, 16, 81, 256, 625, 1296].map(item => item**(1/4));
console.log(newArray9);

// const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
// 1 => 1
// 16 => 2  (2**4 == 16)
// 81 => 3  (3**4)== 81)

// const newArray = array.map((n) => Math.sqrt(Math.sqrt(n)));
// log(newArray);


const arrayFruit = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 }
];
const newArray10 = arrayFruit.map(item => item.name);
console.log(newArray10);

// result: ["apple", "banana", "watermelon"]

// const newArray = array.map(function (fruitObj) {
//     // console.log(fruitObj.name);
//     return fruitObj.name;
// });

// log(newArray);



const newArray11 = arrayFruit.map(item => item.age);
console.log(newArray11);


const arrayName = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' }
];
const newArray12 = arrayName.map(item => `${item.name} ${item.surname}`);
console.log(newArray12);


const arrayYear = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
    //   { name: "apple", birth: "2000-01-01", age: 21 },
    //   { name: "banana", birth: "1990-10-01", age: 31 },
    //   { name: "watermelon", birth: "1985-12-01", age: 36 },
    // ]

    // { name: 'apple', birth: '2000-01-01' } => { name: "apple", birth: "2000-01-01", age: 21 },
// diff age
const newArray13 = arrayYear.map(function (fruitObj) {
    // create NewFruit Object
    const newFruitObj = Object.assign({}, fruitObj);
    const birthYear = +fruitObj.birth.slice(0, 4);
    newFruitObj.age = 2021 - birthYear;
    return newFruitObj;
});
console.log(newArray13);


const arrayYear2 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]

// INPUT (JS-OBJ) : { name: 'apple', birth: '2000-01-01' }
// OUTPUT (STRING HTML TAG) : <tr><td>apple</td><td>01 jan 2000</td></tr>
// OBJ => STRING

const MONTH = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const newArray14 = arrayYear2.map(function (obj) {
    // retrieve value from each obj
    let name = obj.name;
    const day = obj.birth.slice(-2);
    const monthIndex = obj.birth.slice(-5, -3) -1;
    const year = obj.birth.slice(0, 4);
    // create string
    const resultString = `<tr><td>${name}</td> <td>${day} ${MONTH[monthIndex].toLowerCase()} ${year}</td></tr>`;
    return resultString
});

console.log(newArray14);

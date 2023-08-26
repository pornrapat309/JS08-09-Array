const newArray1 = [9, 17, 23, 5].filter(item => item > 10);
console.log(newArray1);

// const newArray = array.filter(function (num) {
//     // if (num > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     // if (num > 10) return true;
//     // return false;

//     // return num > 10 ? true : false;
//     return num > 10;
// });


const newArray2 = [1, 2, 3, 4].filter(item => item % 2 === 1);
console.log(newArray2);

const newArray3 = [1, '1', 2, {}].filter(item => typeof(item) === 'number');
console.log(newArray3);

const newArray4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'].filter(item => item.length > 6);
console.log(newArray4);

const newArray5 = [1, -3, 2, 8, -4, 5].filter(item => item > 0);
console.log(newArray5);

const newArray6 = [1, 3, 4, 5, 6, 7, 8].filter(item => item % 3 === 0);
console.log(newArray6);


const arrayZoo = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
const newArray7 = arrayZoo.filter(item => item[0].toLowerCase() === 'e');
console.log(newArray7);


const arrayFruit = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
const newArray8 = arrayFruit.filter(item => item.toUpperCase() === item);
console.log(newArray8);

// Boolean Expression => Solve to Boolean
// "APPLE".toUpperCase() === "APPLE" => true
// "oRangGE".toUpperCase() === "oRanGE" => false



const arrayProvince = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
const newArray9 = arrayProvince.filter(item => (item.toLowerCase()).includes('buri'));
console.log(newArray9);


const arrayAge = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 }
];
const newArray10 = arrayAge.filter(item => item.age >= 18);
console.log(newArray10);


const arrayName = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' }
];
const newArray11 = arrayName.filter((obj) => obj.id != 4);
console.log(newArray11);


const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
];
function filterFn(personObj, index, array) {
    const month = +personObj.birth.slice(5, 7);
    if (month === 6) return true;
    else return false;
}
const newArray12 = array.filter(filterFn);
console.log(newArray12);
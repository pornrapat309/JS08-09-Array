// const friend = ['A', 'B', 'C', 'D'];
// console.log(friend);

// const height = new Array(150, 160, 175);
// console.log(height);

// console.log(friend[0]);

// friend[0] = 'Gold';
// console.log(friend);

// // friend[-1] = 'John';
// // console.log(friend);
// // console.log(friend[-1]);  ไม่ควรทำ

// friend[4] = 'Jane';
// console.log(friend);

// delete friend[2];
// console.log(friend);
// console.log(friend[2]);

// console.log(friend.length);

// friend[friend.length] = 'Mix';
// console.log(friend);
// console.log(friend.length);

// for(let i = 0; i <= friend.length - 1; i++) {
//     console.log(i, friend[i]);
// }

// const animals = ["Spider", "Cat", "Elephan"];

// let r = animals.push("Dog");
// console.log(animals);
// console.log(r);

// let s = animals.unshift('Snake', 'Mountain Bird');
// console.log(animals);
// console.log(s);

// let t = animals.pop();
// console.log(animals);
// console.log(t);


// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// for (let index in animals) {
//     console.log(index, animals[index]);
// }

// for (let element of animals) {
//     console.log(element);
// }

// function addAndShow(x, y, showFn) {
//     let result = x + y;
//     showFn(`result is : ${result}`);
//     return result;
// }

// function show(result) {
//     console.log(result);
// }
// addAndShow(5, 10, show);

// const items = ['Football', 'Bag', 'Dish'];

// // items.forEach(function() {
// //     console.log('Hi');
// // });

// // const iterateFN = (item) => console.log(item);
// const iterateFN = (item, index, element) => console.log(index, item);

// items.forEach(iterateFN);

//.....................................................................

const log = console.log;

log('learn array');

// ## 1.Declaration
// Array Literal
// element : สมาชิก
const friends = ['Money', 'Non', 'Peakpoon', 'Fon'];
log(friends);

// Array Constructor
const height = new Array(150, 160, 175);
log(height);

// ## 2.Access,Modify,Add,Delete
// Bracket Notation with Index

// Access
log(friends[0]);
log(friends[2]);
log(friends[-1]); // undefined
log(friends[10]); // undefined

// Update
friends[0] = 'Gold';
log(friends);

friends[1] = 'Michael';
log(friends);

// ถ้าพยายามอัพเดทใน index ที่ไม่มีอยู่ === add
// friends[-1] = 'Pavit';
// log(friends);
// log(friends[-1]);

// Add
log(friends[3]);
friends[4] = 'Git';
log(friends);

// Delete
delete friends[2];
log(friends);
log(friends[2]);

// ## 3. basic Property and Method of Array

// <arr>.length
log(friends.length);

// friends[5] = 'Mix';
// friends[6] = 'Mix';
// friends[4] = 'Mix';
friends[friends.length] = 'Mix'; //
log(friends);
log(friends.length);

// for (let i = 0; i <= friends.length - 1; i++) {
//     // i = 0,1,2,3,4,5 (length = 6)
//     console.log(i, friends[i]);
// }

for (let i = 0; i < friends.length; i++) {
    // i = 0,1,2,3,4,5 (length = 6)
    console.log(i, friends[i]);
}
// Method CRUD element

const animals = ['Spider', 'Cat', 'Elephant'];

// Immutable : ไม่เปลี่ยนแปลงค่า (ถ้าจะเปลี่ยนต้องเขียนทับ)
// Mutable : เปลี่ยนแปลงค่าได้

// Method Push ทำให้ Array Mutate ไหม ? Yes (ยาวขึ้น)
// Method Push return อะไรกลับมา
let r = animals.push('Dog');
// log(animals);
// log(r); // 4

let s = animals.unshift('Snake', 'Mountain Bird');
// log(animals);
// log(s); // 6

let t = animals.pop();
// log(animals);
// log(t); // Dog

// ## 4. Loop

// 4A:for loop
// Imperative กำหนด i เอง
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// 4B:for...in (มอง array เป็น object ประเภทหน่ึ่งได้)
/*
<key>:<value> => <index>:<value>
const arr = {
	0 : "Bird",
	1 : "Cat",
	2 : "Dog"
}
*/

// ไม่ต้องกำหนด i เอง
// for (let index in animals) {
//     log(index, animals[index]);
// }

// 4C: for...of
for (let element of animals) {
    // 1st : element = "Snake"
    // 2nd : element = "Mountain Bird"
    // 3rd : element = "Spider"
    // 4th : element = "Cat"
    // 5th : element = "Elephant"
    log(element);
}

// Aside Topic : Higher Order Function
// Main FN
// cook : Higher Order Function (ฟังก์ชันที่รับฟังก์ชันเป็น parameter)
// fn1,fn2,fn3 : Callback

// fn1,fn2,fn3 จะถูกรันก็ต่อเมื่อ cook รันเท่านั้น
// fn1,fn2,fn3 (ถูกเรียกที่หลัง : callback)
function cook(fn1, fn2, fn3) {
    fn1();
    fn2();
    fn3();
}
// Sub FN
function step1() {
    log('1.Prepare ingredient');
}

function step2() {
    log('2.cooking');
}

function step3() {
    log('3.serve');
}

// call
cook(step1, step2, step3);

// cook(step3, step1, step2);

// function add(x, y) {
//     return x + y;
// }
// log(add(5, 6));

// Function Expression : FN as a value
const a = console.log;
const b = alert;
// a('Hi');
// b('Hello');

// สร้าง Function รับ parameter เป็น function

function addAndShow(x, y, fn1) {
    let result = x + y;
    // call ShowFn fn()
    fn1(result);
    // fn1(`result is : ${result}`);
    return result;
}

addAndShow(5, 10, step1);
// x = 5
// y = 10
// fn1 = step1
/* 
let result = 5 + 10;
    step1(result);
    return 15;
*/

// addAndShow(5, 10, console.log);
// addAndShow(5, 10, alert);
// x = 5
// y= 10
// fn1 = console.log
/*
    let result = 5 + 10;
    console.log(result);
    return 15;
*/

// fn == console.log
// fn("result is : ${result}") === console.log("result is : ${result}")
// addAndShow(5, 20, alert);

// function show(result) {
//     console.log(result);
// }

// addAndShow(5, 10, show);

const items = ['Football', 'Bag', 'Dish'];

// 4d : forEach
// SYNTAX : <array>.forEach( FN )
// array == Caller
// Higher order FN == forEach (รับพารามิเตอร์เป็น FN)

// items.forEach(   function () {}    )
// Callback จะถูกเรียกใช้ตามจำนวนสมาชิกใน array

// const myFunc = function () {
//     console.log('Hi');
// };

// function iterateFn(a) {
//     console.log(a);
// }

// const items = ['Football', 'Bag', 'Dish'];
// const iterateFn = (item) => console.log(item);
// const iterateFn = (element) => console.log(element);
// const iterateFn = (a, b, c) => console.log(a, b, c);
const iterateFn = (item, index, array) => console.log(index, item);

items.forEach(iterateFn);
// 1st Loop : ("Football",0,items) => console.log("Football")
// 2nd Loop : ("Bag",1,items) => console.log("Bag")
// 3rd Loop : ("Dish",2,items) => console.log("Dish")

items.forEach((a, b, c) => {
    // console.log(a)
    // at index ...., element = ....
    console.log(`At index ${b}, element = ${a}`);
});

sum = 0;

[1, 2, 3, 4].forEach((a, b) => console.log(a, b));

// for (let i = 0; i < [1, 2, 3, 4].length; i++) {
//     sum += [1, 2, 3, 4][i];
// }

log(sum);

// index [0,1,2,3]

// #1 : FN : myForEach
function myForEach(fn) {
    // code...

    // #2 : fn
    for (let i = 0; i < 3; i++) {
        fn(`index = ${i}`);
    }
    // code...
}

// Caller
myForEach((a) => console.log(a));
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

// ARRAY => OBJ

const initObj = {};

function reduceFn(acc,name) {

    if (!acc[name]) {
        acc[name] = 1;
    } else {
        acc[name]++;
    }
    return acc;
}

const r = names.reduce(reduceFn,initObj);
console.log(r);


// const initObj = {};

// function reducerFn(acc, name) {
//     // acc === { 'Jack' }
//     // - ยังไม่เคยมีชื่อใน object => เพิ่มชื่อเป็น key และ value เป็น 1
//     // - มีชื่อใน obj อยู่แล้ว => update value เพิ่มขึ้น 1

//     // acc['Jack'] === acc[name];
//     // if (!acc[name]) {
//     //     acc[name] = 1;
//     // } else {
//     //     acc[name]++;
//     // }

//     if (!acc[name]) acc[name] = 0;
//     acc[name]++;
//     return acc;
// }

// const r = names.reduce(reducerFn, initObj);
// console.log(r);

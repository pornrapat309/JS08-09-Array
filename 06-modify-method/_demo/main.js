// const arr = [1,2]
// const newArr = arr.concat(3,4)

// newArr;
// arr;
// const newArr = arr.concat([3,4],[5,6],7,8)

//newArr // create new one [1,2,3,4,5,6,7,8]
//arr // not-muted [1,2]

// start Index : Inclusive
// end Index : Exclusive

// const arr = [0,1,2,3,4,5]
// const newArr = arr.slice();

// arr.slice(0,3)
// arr.slice(2)

// let arr = ['I', 'study', 'JavaScript'];
// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, 'complex', 'language');
// console.log(arr); // "I", "study", "complex", "language", "JavaScript"

let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
let r = arr.splice(0, 1);
console.log(r);

// console.logt(removed); // "I", "study" <-- array of removed elements

let fish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// fish.length = 4
let z = fish.splice(0, fish.length);
z;
fish;
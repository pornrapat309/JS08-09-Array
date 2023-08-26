const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

// alphabets.map()

const arr = [];

for (let index in alphabets) {
if (alphabets[index] === 'a') 
    arr.push(index);
}
console.log(arr);




// alphabets.forEach((char,index)=> {
//   if(char === 'a') arr.push(+index)
// })
// console.log(arr);




// const foundedIndex = alphabets.findIndex((item, index) => {
//     if (item === 'a') {
//         arr.push(index);
//         return true;
//     }
// });
// console.log(foundedIndex);

// console.log(arr);



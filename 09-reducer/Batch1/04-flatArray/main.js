let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
];

const newFlat = flattened.reduce((acc, item) => {
    acc.push(item[0],item[1])
    return acc
},[]);

console.log(newFlat);


// const newFlat2 = flattened.reduce((a, subArr) => {
    
    // Walkthrough SubArray
    // each Element of SubArray => push into Acc

//     for (let num of subArr) {
//         a.push(num);
//     }
//     return a
// },[]);

// console.log(newFlat2);
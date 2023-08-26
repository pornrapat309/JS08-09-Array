const arr = [2, 3, 5, 7, 11];

function squareArr(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(arr[i] ** 2);
    }
    return newArr;  
}

let newArr = squareArr(arr);
console.log(newArr);

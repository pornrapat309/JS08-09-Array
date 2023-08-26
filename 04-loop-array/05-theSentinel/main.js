const arr = [];
let sum = 0;

do {
    let input = prompt('Enter number') 
    if (input === null || input.trim() === '' || isNaN(input)) {
        break;
    }
    sum += +input;
    arr.push(+input);

} while (true);

console.log(arr);
console.log(`ผลรวมคือ ${sum}`);



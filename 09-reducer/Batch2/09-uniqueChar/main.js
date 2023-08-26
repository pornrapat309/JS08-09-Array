let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const result = alphabets.reduce((acc,char) => {

    // acc.push(char);
    // ถ้า character ตัวนั้นอยู่ใน acc แล้ว ไม่ต้อง push
    // ถ้าไม่มี character นั้นอยู่้ใน acc => push

    // char == 'f'
    // acc == ['a','b']

    // SEARCH
    
    let found = false;
    for (let c of acc) {
        if (c === char) found = true;
    }
    // ACTION
    if (!found) acc.push(char);
    // RETURN
    return acc;
},[])
// ['a','b']

console.log(result);


// // #2
// const set = new Set(alphabets);
// console.log(set);

// const newArr = new Array(...set);
// console.log(newArr);
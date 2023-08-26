const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
];

const newObj = persons.reduce((acc, item) => {
    if (!acc[item.sex]) {
        acc[item.sex] = [];
    }
    acc[item.sex].push(item.name);
    return acc;
}, {});

console.log(newObj);
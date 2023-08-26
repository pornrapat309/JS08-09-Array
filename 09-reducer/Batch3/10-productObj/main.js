const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
];

const obj = products.reduce((acc, item) => {
    acc[item.id] = {name: item.name}
    return acc;
},{});

console.log(obj);
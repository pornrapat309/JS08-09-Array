let arr = [
    { name: 'John', age: 27 },
    { name: 'Jo', age: 21 },
    { name: 'Jin', age: 25 },
    { name: 'Jack', age: 21 },
];

// const foundedPerson = arr.find((personObj,index,arr)=> {

//   // console.log(personObj)
//   if(personObj.age === 21) {
//     return true
//   }
//   // return undefined
// })

const foundedPerson = arr.findIndex((p) => p.age === 21);

console.log(foundedPerson);
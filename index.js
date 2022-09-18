const people = [
    { name: 'vlad', age: 25, budget: 40000 },
    { name: 'lena', age: 17, budget: 3400 },
    { name: 'igor', age: 49, budget: 50000 },
    { name: 'misha', age: 15, budget: 1800 },
    { name: 'vasilisa', age: 24, budget: 25000 },
    { name: 'viktoriya', age: 38, budget: 2300 },
]
// FOROF
// for(let any of people){
//     console.log(any);
// };

// FOREACH
// index, arr используются очень редко;
// people.forEach(function(el, index, arr){
//   console.log(el);
//   console.log(index);
//   console.log(arr);
// })
// people.forEach(el => console.log(el));

// MAP
// const newPeople = people.map(el => `${el.name} (${el.age})`)
// console.log(newPeople);

// FILTER
// const adults = people.filter(el => el.age>= 18);
// console.log(adults);

// REDUCE
// let amount = people.reduce((total, el) => total + el.budget, 0)
// console.log(amount);

// FIND
// const igor = people.find(el => el.name === 'igor');
// console.log(igor);

// FINDINDEX
// const igorIndex = people.findIndex(el => el.name === 'igor');
// console.log(igorIndex);

const newPeople = people
   .filter(el => el.budget > 3000)
   .map(el => {
    return {
        info:`${el.name} (${el.age})`,
        budget : el.budget
    }
   })
console.log(newPeople);
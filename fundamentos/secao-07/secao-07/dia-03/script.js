const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];


const pairsSum = numbers
.filter((element) => element % 2 === 0)
.reduce((acc, curr) => acc + curr);

console.log(pairsSum)

const reduceSum = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc + 0);

console.log(reduceSum)
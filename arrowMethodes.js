// const number = [1, 2, 3, 4, 5, 20];

// const element =  number.map((num) => num);

// // console.log(element);

// // -----------------------

// // number.forEach(num => console.log(num + 2));

// // ---------------------

// const filterNumber = number.filter(num => num % 2 === 0);

// console.log(filterNumber);


// // --------------------------

// const find = number.find(num => num > 3);
// // console.log(find);

// // -----------------------------

// const average = number.reduce((c, p) => {
//     const sum = c + p;
//     return sum / number.length;
// },0)

// console.log(average);


// -----------------------==>forEach, filler, find, map, reduce

const numbers = [101, 20, 301, 40, 501];


// numbers.forEach(item =>  console.log(item) )

// ------------------------------

const a = numbers.map(element => element + 10);

// console.log(numbers);
// console.log(a);


// --------------------------

const element1 = numbers.find(element => element === 300);
// console.log(element1);

// ---------------------


const eventNumber = numbers.filter(element => element % 2 === 0);
const oddNumber = numbers.filter(element => element % 2 === 1);
// console.log(eventNumber);
// console.log(oddNumber);

// -----------------------------




/*
    1    +    2     = 3 
    3    +    3     = 6
    6    +    4     = 10
    10   +    5     = 15

*/



const sum = numbers.reduce((c , p ) => c + p, 0);
console.log(sum / numbers.length);
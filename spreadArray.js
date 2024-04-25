// const number = [11, 77, 55, 41];


// const number1 = number;

// number.push(110);
// number1.push(200);

// console.log(number);
// console.log(number1);


// -----------------------


// const number = [11, 77, 55, 41];

// const number1 = [];
// for(let num of number){
//     number1.push(num);
// }


// number.push('anik');
// number1.push('arpon')

// console.log(number);
// console.log(number1);


// -----------------------


// const number = [11, 77, 55, 41];

// const number1 = [...number, 'anik'];

// number.push('apu')

// console.log(number);
// console.log(number1);



// ------------------------

const number = [11, 77, 55, 41, 100];

// const a = number[0];
// const b = number[1];
// const c = number[2];

const [a, b, c, ...other] = number;

console.log(a, b, c, other);
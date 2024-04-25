// const person = {
//     name : 'Hero Alom',
//     age : 34,
//     phone : `2465134651654`,
//     address : 'bari nai',
//     p : [6, 4, 5, 1]
// }


// const person1 = {...person};

// person1.email = 'hi@gmail.com';

// console.log(person);
// console.log(person1);

// -----------------------

// const person = {
//     name : 'Hero Alom',
//     age : 34,
//     phone : `2465134651654`,
//     address : {
//         zilla : 'dhaka',
//         village : 'shovorieay'
//     },
//     p : [6, 4, 5, 1]
// }

// // const {name, address:{zilla:acy, village}, age, phone, p} = person;
// const {name, address, age, phone:amerPhone, p} = person;

// console.log(amerPhone);


// ---------------------------

const person = {
    name : 'Hero Alom',
    age : 34,
    phone : '6456454',
    p : [1, 2, 3],
    address : {
        village : 'shovoriay '
    }
}

// const {name, ...other} = person;
// console.log(other);
// console.log(name);


const {age, address:{village}, other } = person;
console.log(village);
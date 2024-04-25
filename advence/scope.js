/*

1. global scope
2. block scope
3. local scope or functional scope

*/

// ----------------->

// 1. global scope

// const y = 5;

// if(true){
//     console.log(y);
// }

// console.log(y);


// ------------------------

// 2. block scope


// {
//     let y = 10;
//     // var y = 10; var not use. because var hosting value  
// }

// console.log(y);



// -------------------

// 3. local scope or functional scope

// function hello(){
//     let y = 10;
//     console.log(y);
// }

// console.log(y);


// --------------------

const y = 40;

{
    const y = 10;
    console.log(y);
}

console.log(y);
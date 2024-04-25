// function show(){
//     console.log(`my name is anik`);
// }


// function fun1(age, callBack){
//     console.log(`my age ${age}`);
//     callBack()
// }

// fun1(24, show)

// --------------------------

// function show(name, age){
//     console.log(`my name is ${name}. my age is ${age}`);
// }

// function fun2(name, age, call){
//     console.log(`my age is: ${age}`);
//     setTimeout(() =>{
//         call(age, name);
//     }, 2000)
    
// }

// fun2('anik', 24, show)

// ------------------------------



function a(){
    console.log('hello from callBack');
}

function show(fun){
    fun();
}

show(a)
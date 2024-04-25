// const add = (a , y = 0) =>{
//     console.log(a + y);
// }

// add(2);


// -------------------

const person = {
    name : 'anik',
    age : 24
}

const showInfo = ({name, age}) => {
    console.log(name);
    console.log(age);
}

showInfo(person)
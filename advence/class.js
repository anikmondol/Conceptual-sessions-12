// class Animal{
//     name = 'abc';
//     color = 'black';

//     info(){
//         console.log(`my animal name is ${this.name}`);
//     }


// }

// const cow = new Animal();
// console.log(cow);
// console.log(cow.color);

// cow.info()

// -----------------------------


class Animal{
    constructor(AnimalName, AnimalColor){
        this.name = AnimalName;
        this.color = AnimalColor;
    }
    showInfo(){
        console.log(`my pet name is ${this,this.name}`);
    }
}

const dog = new Animal('a', 'c');
const cat = new Animal('d', 'e');


console.log(cat);
console.log(dog);
console.log(dog.color);

cat.showInfo();
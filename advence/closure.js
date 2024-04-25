function outerFunction(){
    let count = 0;
    return function innerText(){
        count++
        return count;
    }
}

const a = outerFunction();

console.log(a());
console.log(a());
console.log(a());


const b= outerFunction();
console.log(b());
console.log(b());
console.log(b());
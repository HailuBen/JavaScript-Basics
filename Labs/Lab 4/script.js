function greet(name) {
       if (name == "" || name == null || name ==undefined){
        name = "User"
    } 
    console.log("Hello/Salut "+name+"!");
}
greet("Peter");
greet();

function addNumbers(num1, num2) {
    return num1+num2;
}
console.log("Sum: "+addNumbers(6,7));

let x = 1;

function changeValue(){
    x = 3;
}
changeValue();
console.log("value of variable x: "+x);

function outerFunction() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = outerFunction();

console.log("Count: " + counter()); // 1
console.log("Count: " + counter()); // 2
console.log("Count: " + counter()); // 3
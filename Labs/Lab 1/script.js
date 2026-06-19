// declare var, obj

let greeting = "Hello 113!";
let studentName="Charles";
let studentAge=20;
let isEnrolled=true;
let interests = ["gaming","music","guitar","webdev","cooking"]
let person = {
    firstName: "Charles",
    lastName: "Anderson"
};

console.log(greeting);
console.log("Name: "+studentName+"\nAge: "+studentAge+"\nEnrolled: "+ (isEnrolled ? "Yes" : "No"));
console.log(interests, person);

// Arithmetic
console.log("\nAddition +");
console.log("Student Age: "+studentAge+"\n+ 20" + "\n= " +(studentAge+20));

console.log("Subtraction -");
console.log("Student Age: "+studentAge+"\n- 10" + "\n= "+(studentAge-10));

console.log("Multiplication *");
console.log("Student Age: "+studentAge+"\n* 10" + "\n= "+(studentAge*10));

console.log("Division /");
console.log("Student Age: "+studentAge+"\n/ 2" + "\n= "+(studentAge/2));

// Comparison
console.log("\nGreater than >");
console.log(" is 2 > 3? "+( 2 > 3 ? "Yes!" : "No."));
console.log("\nLess than <");
console.log(" is 5 < 33? "+( 5 < 33 ? "Yes!" : "No."));
console.log("\nEqual to ===");
console.log(" is 230 === 23? "+( 230 === 23 ? "Yes!" : "No."));
console.log("\nNot equal !==");
console.log(" is 43 !== 43? "+( 43 !== 43 ? "Yes!" : "No."));


// Logical
console.log("\nAND && ");
if ( interests.includes("gaming") && interests.includes("music") ) {
    console.log("Interests: Gaming AND Music. Awesome.")
}
console.log("\nOR || ");
if ( interests.includes("gaming") || interests.includes("music") ) {
    console.log("Interests: Gaming OR Music. Awesome.")
}
console.log("\nNOT ! ");
if ( !interests.includes("dishwashing") ) {
    console.log("Interests: dishwashing? NOT Gaming. NOT Music. NOT cool.")
}
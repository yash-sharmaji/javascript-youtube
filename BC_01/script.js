console.log(`Hello`);

//This gets outputed on the console part of the inspect

//window.alert(`This is an alert!`);
// window.alert(`This is an alert`);

document.getElementById("header1").textContent = 'Hello';
document.getElementById("para1").textContent = `I like Pizza`;



// The 2nd part now begins --->




//variable = a container that stores a value and behave that if it
//           were the value that it contains 

// 1. declaration    let x;
// 2. assignment     x=100;

let x=100;
let price = 10.99;
let gpa = 2.1;

let trial = "Yash";
console.log(x);
console.log(`You are ${x} years old`);
console.log(`you are having ${gpa} gpa`);

console.log(typeof (trial));
document.getElementById("para1").textContent = x;

//hence the text alterations can be provided with the help of the variables 



// The 3rd part now begins



// arithmetic operators = operands(values, variables,etc..)
//                        operators (+,-,*,/);


let students =30;
students=students+1;
students=students-2;

students = students/2;
students =students ** 2;

console.log(students);

students +=1; //augumented assignment operators -= /= %= **=

console.log(students);

// operator precedence ->
// parenthesis -> exponents -> multiplication & divison & modulo -> additon & subtraction 

let result = 1+2*3+4**2;
console.log(result);

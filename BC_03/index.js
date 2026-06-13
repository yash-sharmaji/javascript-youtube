// variable scope = where a variable is recognised 
//                  and accessible (local vs global)

let x=1;

function function1(){
    let x=1;
    console.log(x);
}

function function2(){
    let y=2;
    console.log(y);
}

function1(); 
function2();


// Added the 25th part --->



//array = a variable like structure that can hold 
//        more than 1 value

let fruit = ["apple" ,"orange","banana"];

console.log(fruit); // this logs the console with the array 

console.log(fruit[0]); // this logs the console with first index element

// fruit.push or fruit.pop

fruit.unshift("mango"); //Adds the element in the first position
fruit.shift(); // remove the first element and shift others by one forward
 
let numOffruits = fruit.length; //length of array

let index = fruit.indexOf("mango"); // returns if it is not present in the array

// another way to display the fruits is - 
    for(let fruiti of fruit){
        console.log(fruiti);
    }

// sorting functions - 
//      furits.sort or fruits.sort.reverse




// Added the 26th part of the video --->



// spread operator = allows an iterable such as an array or string to be expanded into separate elements
//                      (unpacks the elements)
//                   it is a different data structure but it contains , identical values

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);

let username = "Bro Code";
let letters = [...username];
let newfruits = [...fruit];
console.log(letters);
console.log(fruit);
console.log(newfruits);

// it can be used to merge the elements into one single array as well ->
        let foods = [...fruit , ...username];

console.log(foods); // [whole array and each letter of the strings inclulding spaces]



// rest parameter = (...rest) allow a function work with a variable number of arguments by bundling them into an array

//                  spread = expands an array into separate elements 
//                  rest = bundles separate elements into an array

function openFridge(...foods){     // this is a rest parameter because here it was used as an parameters
    console.log(...foods);         // this is the spread operator because here it was used in an array 
}

const food1 = "a";
const food2 = "b";
const food3 = "c";
const food4 = "d";
const food5 = "e";

openFridge(food1, food2 , food3, food4, food5);

function sum(...numbers){
    let result=0;

    for(let i=0;i<numbers.length;i++){  //for(let number oof numbers)
        result+=numbers[i];
    }

    return result;
}
console.log(`Your total is ${sum(...numbers)}`);

// Here the parameter of sum was a rest parameter hence the elements were required to be passed as seperated therefore 
// we used spread operator first to passs the main array as the separated elemenets 
// and they would later combine to form the


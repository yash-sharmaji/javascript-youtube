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


// Added the 30th part of the video --->





// callback = a function that is passed as an argument to another function

//            used to handle asynchronous operations :
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey when you are done , call this next"

// function hello(){
//     setTimeout(function (){
//         console.log("Hello!");
//     },3000); //this makes the wait for 3 secs
// }

// function goodbye(){
//     console.log("Goodbye!");
// }
// hello();
// goodbye();

// // What this will do is - ki phele goodbye print ho jayega and then 3 seconds tak hello function wait karega
// // This is how , the setTimeout({
// //                    },time); works


function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("GoodBye!");
}
function wait(){
    console.log("Wait!");
}
// now in order to have a call back , what we do is - >
//          hello(callback){
//            callback();
//          }
// aise karte hai taki callback call ho jaye...


hello(goodbye);
hello(wait);
// kind of like recursion hence not that qutie goodie goodie but but but , its good

// KOi choti process phele na khtm ho jaye , yeh ensure karte hai hm log
// This helps in overall that thing ... like process ko bad me execute karane ke liye



// Added the 31st part of the video --->





// ForEach Method ---> method used to iterate over the elements
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element , index , array are provided

let numberss = [1,2,3,4,5];

numberss.forEach(display);

function display(element){
    console.log(element);
}

numberss.forEach(double);

function double(element){
    element = 2 * element;
    console.log(element);
}

let fruits  = ["apple", "orange", "banana", "coconut"];

fruits.forEach(uppercase);
fruits.forEach(display);
fruits.forEach(CapitalLetter);
fruits.forEach(display);
function uppercase(element,index,array){
    array[index]=element.toUpperCase();
}

function CapitalLetter(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}
// It is useful when we are we have to apply one function to the entire array 



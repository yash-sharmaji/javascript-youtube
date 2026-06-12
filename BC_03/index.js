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
 
let numOffruits = fruits.length; //length of array

let index = fruit.indexOf("mango"); // returns if it is not present in the array

// another way to display the fruits is - 
    for(let fruit of fruits){
        console.log(fruit);
    }

// sorting functions - 
//      furits.sort or fruits.sort.reverse











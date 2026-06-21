// ES6 Module = An external file that contains reusable code 
//              that can be imported into other Javascript files. 
//              Write reusable code for many different apps. 
//              Can contain variables, classes , functions ... and more ...
//              Introduced as part of ECMAscript 2015 update

import {PI , getCircumference , getArea , getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const getarea = getArea(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${getarea.toFixed(2)}cm`);



// Added the 56th part of the video---->


 
// synchronous = Executes line by line consecutively in a sequential manner 
//              code that waits for an operation to complete


// asynchronous = allows multiple operations to be performed concurrently wihtout waiting
//                Doesnt block the execution flow and allows the program to  continue 
//                (I/O operations , network requests , fetching data)
//                Handled with : Callbacks , Promises , Async/Await

setTimeout(()=>console.log("Task 1"),1000);

console.log("Task 2");

function func1(callback){
    setTimeout(()=>{
        console.log("Task1 completed");
        callback();
    },3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2);


// Added the 57 part of the video --->


// Error = An object that is created to represent a problem that occurs
//         Occurs often with user input or establishing a connection

// console.log(x);

// Network errors , promise rejection , security errors 

// console.log("You have reached the end! ");

// try -  enclose code that might potentially cause an error
// catch - catch and handle any thrown errors from try{}
// finally - (optionally w) Always executes. Used mostly for clean up 
//          ex. clone files , close connection , release resources 


// try{
//     console.log(x);

// }catch(error){
//     console.log("OMG! its an error");
// }
// finally {
//     console.log("Finally me aa gaye hai ham");
// }

// console.log("you have reached the end!");

// try{
//     // const dividend = window.prompt("enter a dividend: ")
//     // const divisor = window.prompt("enter a divisor: ")

//     if(divisor==0){
//         throw new Error("You can't divide by zero!");
//     }

//     const result = dividend / divisor;
//     console.log(result)
// }
// catch(error){
//     console.error(error);
// }

// console.log("you reached the end!");






// Added the 59th part of the video --->



//DOM = DOCUMENT OBJECT MODEL   
//      Object{ } that represent the page you see in the web browser
//      and provides you with an API to interact with it. 
//      Web Browser constructs the DOM when it loads an HTML document, 
//      and structures all the elemnts in a tree like representation. 
//      change the content , structure , and style of a web page.


//      our document is an object whichh contains other properties and methods
//      console.dir(document); - lists all of properties of the object document


document.title = "MeriMarzi";
document.body.style.backgroundColor = "hsl(0,0%,15%)"; // even if no css is written , we were able to change the background color 

console.dir(document);
console.log(document);

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? " Guest" : username;




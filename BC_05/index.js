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
//document.body.style.backgroundColor = "hsl(0,0%,15%)"; // even if no css is written , we were able to change the background color 

console.dir(document);
console.log(document);

const username = "";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? " Guest" : username;


//Added till 60th part of the video --->


//Element selectors = Methods used to target and manipulate HTML elements. 
//                    They allow you to select one or multiple HTML elements 
//                    from the DOM (Document Object Model)

// 1. document.getElementbyId()    //Element or null
// 2. document.getElementsClassName()   // HTML Collection
// 3. document.getElementsByTagName()  // HTML Collection
// 4. document.querySelector()    // Element or Null
// 5. document.querySelectorAll()   // Nodelist

const myheading = document.getElementById("my-heading");

myheading.style.backgroundColor = "yellow";
myheading.style.textAlign = "center";

console.log(myheading);

const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);

fruits[0].style.backgroundColor="yellow";

for(let fruit of fruits){
    fruit.style.backgroundColor="yellow";
}

// There are two types of for loop [for...in...] and [for...of...]

// for in - iterates over enumerable property names . not just numeric indexes
// for of - iterates over document model objects 
// ✅ for...of → Arrays, strings, NodeList, Map, Set, and other iterables. This is the preferred choice when you want the items.
// ✅ for...in → Plain objects, when you want their property names. this prints the indexes



Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor="yellow";
});

/* What does Array.from() do?
Array.from(fruits)

takes the NodeList (this .from() - it works on any iterable or array-like object into a real JS array) and creates a new Array.

NodeList
   │
   ▼
Array.from()
   │
   ▼
Real Array

Now you have:

[
    <p>Apple</p>,
    <p>Banana</p>,
    <p>Mango</p>
] */


// document.getElementbyTagName()   //HTML Collection

// take all matches in our html document and stick them all in a html collection

const h4Elements = document.getElementsByTagName("h4");

console.log(h4Elements);

// access through indexing

//same like above

Array.from(h4Elements).forEach(h4Elements => {
    h4Elements.style.textAlign="center";
});


//Queryselector will return the first matching element or null (if not found) --->

const element = document.querySelector("li"); //for class name use . 
// for tag name use nothing
// for id use # like css only

element.style.backgroundColor = "yellow";
// only beets get highlighted as it is the first element with li



// document.queryselectorAll() - This returns a node list - similar to html collection which has built in methods 
//                              like an array
//                              but they are static not live like array
//                              they do not update automatically in DOM like arrays do


const foods1 = document.querySelectorAll(".fruits");

foods1[0].style.background = "yellow";

// html collection me built in foreach method nahi hoti , unlike nodelists ... therefore they have it

const foods = document.querySelectorAll("li");
console.log(foods);


// foods.forEach(food=>{
//     food.style.backgroundColor = "yellow";
// });



// Added the 61st part of the video --->


// DOM Navigation = The process of navigating through the structure 
//                  of an HTML document using JavaScript

// .first/.lastElementChild 
// .next/.previousElementSibling
// .parentElement
// .children

// Its simple as fuck , just watch the 15 mins

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor="yellow";
});



// next/previous element sibling -->

const element1 = document.getElementById("Apple");
const nextsibling = element1.nextElementSibling;

// Last element select kare toh kya hoga ... Null return krega ... -->


// parent ke case me li ki id loge aur parent access karoge tohh ul acess hoga simple

// html -> body ->ul ->li ... every element has a parent . but if not then it is null outputting

// only .children returns an Html collection , the other return a single element or null

const element2 = document.getElementById("vegetables");
const children = element2.children;

console.log(Array.from(children));


//Added the 62nd part of the video --->


// ------- Example 1 <h1> -------

//Step 1 create the element

const newH1 = document.createElement("h1");

//Step 2 Add Attributes/Properties

newH1.textContent = "I like Pizza!"
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//Step3 Append element to DOM

//document.body.append(newH1); //when you append an element then that element is the last child
// document.body.prepend(newH1);
const box1 = document.getElementById("Box1");
box1.append(newH1);

// const box2 = document.getElementById("Box2");
// document.body.insertBefore(newH1,box2);  //(current element,box)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[2]);

//Remove HTML Element
box1.removeChild(newH1);

// adding a list item for that vegetable one --->

//Step 1 Create the element 

const newlistitem = document.createElement("li");

//Step 2 Add attributes/Properties

newlistitem.textContent="coconut";
newlistitem.style.fontSize="2em";
newlistitem.style.backgroundColor="yellow";


document.body.append(newlistitem);
document.body.removeChild(newlistitem);

// eventListener = listen for specific events to create interactive web pages- 
//                 events: click , mouseover , mouseout 
//                 .addEventListener(event,callback);



const Boxy = document.getElementById("myBox");

function changeColor(event){
    Boxy.style.backgroundColor = "yellow";
    // Boxy.classList.toggle("yellow");
    // Boxy = event.target

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch";
}
// event is an objecct that is passed to us behind the scenes


// myBox.addEventListener("event",callback);
// Boxy.addEventListener("click",changeColor);

// Arrow functions are also allowed over here , or we even pass the function explicitly here directly

myBox.addEventListener("click" , () =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent= "ocuh";
})

// here we are not explicitly passing the event as a parameter to the arrow function but it work still sometime 
// because browser expose window.event behind the scenes , sometimes so , this is effectively using window.event 
// but this is a bad practice 

// this is a good practice ->
myBox.addEventListener("click" , () =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent= "ocuh";
})

myBox.addEventListener("click" , event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent= "ocuh";
})

myBox.addEventListener("mouseover" , event =>{
    event.target.style.backgroundColor = "green";
    event.target.textContent= "Fuck me";
})


myBox.addEventListener("mouseout" , event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent= "AAAhh ";
})

// Added the 64th part of the video --->


// eventListener = Listen for specific events to create interactive web pages
//                  events : keyup , keydown
//                  document.addEventListener(event,callback);


// document.addEventListener("keydown", event => {
//     console.log(`keydown = ${event.key}`);
// });
// document.addEventListener("keyup",event=>{
//     console.log(`keyup = ${event.key}`);
// })

// we have arrow keys as well
// we are going to move our myBox from upper code only --->
const moveAmount = 10;
let x =0;
let y =0;

document.addEventListener("keydown",event =>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp" :
                y -= moveAmount;
                break;
            case "ArrowDown" :
                y+= moveAmount;
                break;
            case "ArrowLeft" :
                x -= moveAmount;
                break;
            case "ArrowRight" :
                x += moveAmount;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
    console.log(event.key);
});
const myButton = document.getElementById("myButton");

const myImg =document.getElementById("myImg");

myButton.addEventListener("click",event=>{
    
    if(myButton.textContent=="Hide"){
        myImg.style.visibility="hidden";
        myButton.textContent="Show";
    }
    else if(myButton.textContent=="Show"){
        myImg.style.visibility="visible";
        myButton.textContent="Hide";
    }
});


// Added the 66th part of the video ---->

// Nodelist = static collection of Html elements by (id , class , element)
//            Can be created by using querySelectorAll()
//            Similar to an array , but no (map ,filter,reduce) i.e. built-in methods for helping
//            Nodelists wont update to automatically reflect changes

// A static collection is a snapshot of the DOM at the moment you query it. 
// A dynamic (live) collection automatically updates when the DOM changes.

// suppose we get a nodelist from the query selector but now , the static collection is updated by appending something as well , i want that to be requery selecction

let buttons = document.querySelectorAll(".myBtn");

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
    event.target.style.backgroundColor="tomato";
    });
});

const newButton = document.createElement("button");
newButton.textContent="Button 5";
newButton.classList="myBtn";

document.body.appendChild(newButton);

console.log(buttons); // This will give 4 buttons only ... we have to manually add 5th one by doing querySelector again

buttons = document.querySelectorAll(".myBtn");

console.log(buttons);

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
    event.target.style.backgroundColor="tomato";
    });
});

// Remove an element

buttons.forEach(button => {
    button.addEventListener("click",event=>{
        event.target.remove();
        // console.log(buttons);
        buttons = document.querySelectorAll(".myBtn");
        console.log(buttons);
    });
});


// ClassList = Element property in javascript used to interact 
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for any elements 
//             accross your webpage

// add()
// remove()
// toggle(Remove if present , add if not)
// contains()

const myButton1 = document.getElementById("myButton1");

myButton1.classList.add("enabled");
myButton1.classList.remove("enabled");

myButton1.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
});

myButton1.addEventListener("mouseout", event =>{
    event.target.classList.remove("hover");
});

// we can also do a toogle in place of both add and remove

// replace can be done easily...

//contains() check if it contains the class

// Using query selector all and similarly the same classes can be reassigned to things



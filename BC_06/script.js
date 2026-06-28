// Promise = An object that manages asynchronous operations.
//           wrap a Promise around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> Resolved or rejected
//           new Promise((resolve,reject)=> {asynchronous code})

// DO these chores in order

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walk the dog");
//         callback();
//     },1500);
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("You clean the kitchen");
//         callback();
//     },2500);
// }

// function takeoutTrash(callback){
//     setTimeout(() => {
//         console.log("You took out the trash");
//         callback();
//     }, 500);
// }

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeoutTrash(()=>{
//             console.log("You finished all the chores");
//         })
//     })
// })


function walkDog(){
    // setTimeout(()=>{
    //     console.log("You walk the dog");
    //     callback();
    // },1500);

    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("You walk the dog");
        },1500)
    })
}

function cleanKitchen(){
    // setTimeout(()=>{
    //     console.log("You clean the kitchen");
    //     callback();
    // },2500);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You clean the kitchen");
        })
    })
}

function takeoutTrash(){
    // setTimeout(() => {
    //     console.log("You took out the trash");
    //     callback();
    // }, 500);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("You took out the trash");
        },500)
    })
}

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeoutTrash(()=>{
//             console.log("You finished all the chores");
//         })
//     })
// })

// the above is called as Callback Hell

walkDog().then(value=>{console.log(value); return cleanKitchen()})
        .then(value=>{console.log(value); return takeoutTrash()})
        .then(value => {console.log(value); console.log("You finished all the tasks")})
        .catch(error=> {console.error(error)});
        

// function walkDog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{

// const dogwalked=true;

//             if(dogwalked){
//                 resolve("You walk the dog");
//             }
//             else{
//                 reject("You didn't walk the dog");
//             }
//         },1500);
//     });
// }

//if while chaining a value is returned false then the chaining will stop there

//Added the 72nd part of the video --->


// Async/Await = Async = makes a function return a promise 
//              Await = makes an async function wait for a promise
//              
//              Allows you write asynchronous code in a synchronous manner
//              Async doesnt have resolve or reject parameters
//              Everything after await is placed in an event queue


// async keyword wala function return a promise actually , which is an empty promise ... 

async function doChores(){
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleankitchenResult = await cleanKitchen();
    console.log(cleankitchenResult);

    const takeouttrashResult = await takeoutTrash();
    console.log(takeouttrashResult);

    console.log("You finished all the chores");
}

doChores();

// await only works inside an async function or top-level in modern js

// async function morning(){

//     console.log(await wakeUp());

//     console.log(await brush());

//     console.log(await breakfast());

// }

// morning();

// the multiple await can be written llike that tooo
// an await only pauses the async function in which it is written , the rest code is synchronous as it is



// Added the 73rd part of the video --->



// JSON = (Javascript object notation) data-interchange format 
// used for exchanging data betwen a server and a web application 
// JSON files {key:value} OR {value1 , value2 , value3}

//  JSON.stringfly() = converts a JS object to a JSON string
//  JSON.parse() = converts a JSON string to a JS object

// JSON is a built in object that is provided to us for dealing with the datas

const names = ["Spongebob" , "Patrick" ,"Squidward" ,"Sandy"];

const jsonstring = JSON.stringify(names);

console.log(names);


const jsonNames = `["Spongebob" , "Patrick" ,"Squidward" ,"Sandy"]`;
const jsonPerson = `{
    "name" : "Spongebob",
    "age" : 30,
    "IsEmployed" : true,
    "hobbies" : ["JellyFishing" , "Karate" , "Cooking"]

}`;
const people = `[
{"name" : "Spongebob", "age" : 30, "isEmployed" : true},
{"name" : "Patrick", "age" : 1000, "isEmployed" : false},
{"name" : "Squid", "age" : 20 , "isEmployed" : true}
]`;

const parsedData  = JSON.parse(jsonNames);
console.log(people); // String ke form me aayega pura

console.log(parsedData);

//How to fetch a json file in javascript --->
// fetch returns a promise


fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(value => value.forEach((value) =>console.log(value.name)))
    .catch(error=> console.error(error));

fetch("name.json")
    .then(response => response.json())
    .then(value =>console.log(value))


// fetch =  Functions used for making HTTP requests to fetch resources .
//          {JSON style data ,images ,files}
//          Simplifies asynchronous data fetching in Javascript and
//          used for interacting with APIs to retrieve and send
//          data asynchronously over the web
//          fetch(url , {options})

//options - get , post , put , delete (advanced javascript) 

fetch("https://pokeapi.co/api/v2/pokemon/eevee")
    .then(response => {
        if(!response.ok){
            throw new Error("could not fetch resources")
        }

        else{
           return response.json() // if you dont write return over here , then the javascript automatically inserts a return undefined .and rest is understood

        }
    })
    .then(data => console.log(data.name))
    // .then(data => console.log(data.name)) // console.log returns undefined 
    .catch(error => console.log(error));

//HTTP response status codes indicate whether a specfic HTTP request has been successsfully completed . Responses are grouped in five classes :
//  1.Informational resources (100 - 199)
//  2.successful responses (200 - 299)
//  3.redirection messages (300 - 399)
//  4.client error responses (400 - 499)
//  5. server error responses (500 - 599)

// if there was not a pokemon in eevee place then response will not be okay [it is 404 which means that ki it is not found] 
// the status ranges from 0-2 something something are good only
const valuee = document.getElementById("pokeName");

async function fetchData(){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${valuee.value}`)

        if(!response.ok){
            throw new Error("Could not fetch resources");
        }
        const data = await response.json();
        const img = document.createElement("img");

        img.src = data.sprites.front_default;
        img.alt = data.name;
        document.getElementById("dataDisplay").innerHTML="";
        document.getElementById("dataDisplay").append(img);
    }
    catch(error){
        console.error(error);
    }
}

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
        .then(value => {console.log(value); console.log("You finished all the tasks")});
        

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

const dogwalked=true;

            if(dogwalked){
                resolve("You walk the dog");
            }
            else{
                reject("You didn't walk the dog");
            }
        },1500);
    });
}

//if while chaining a value is returned false then the chaining will stop there
// Added the 8th part of the video -->

//Math = built in object that provides a collection
//       of properties and methods


/* Math.[round , floor , ceil , trunc , pow(x,y) , sqrt(x) , log(x) , sin(x) , cos(x) , tan(x) , abs(x) , sign(x)] */

/* Math.max(x,y,z) ; Math.min(x,y,z) */


// Random Number Generator 

// let randomNum = Math.ceil(Math.random()*6);
// console.log(randomNum);

// To output a number between the a minimum and a maximum 

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max-min)) + min;

// another function is using modulo - 
// let randomNum = (Math.floor(Math.random() * (max) + min))%max;

// console.log(randomNum);

// Making a actual dice 

const MyButton = document.getElementById("Mybutton");
const MyLabel = document.getElementById("Mylabel");

const min = 1;
const max = 6;


MyButton.addEventListener("click",()=>{
    // let randomNum = Math.ceil(Math.random()*6);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    MyLabel.textContent=randomNum;
});


// 10th part of the video begins here --->

//IF statements - If a condition is true , execute some code
//                or else do something else

    // Just the basic knowledge hence not documented 





// 11th part of the video begins here -->



// .checked = property that determines the checked state of a 
// HTML checkbox or radio button element


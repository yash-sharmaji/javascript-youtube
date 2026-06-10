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

const Mycheckbox = document.getElementById("myCheckBox");
const MyVisaBtn = document.getElementById("visaBtn");
const MyUPIBtn = document.getElementById("UPIBtn");
const MymastercardBtn = document.getElementById("mastercardBtn");
const submitBtn = document.getElementById("submitBtn");
const result1 = document.getElementById("Texting1");
const resutl2 = document.getElementById("Texting2");

submitBtn.addEventListener("click",()=>{
    if(Mycheckbox.checked){
        result1.textContent="You are subscribed";

        if(MyVisaBtn.checked){
            resutl2.textContent="You are paying with visa";
        }
        else if(MyUPIBtn.checked){
            resutl2.textContent="You are paying with UPI";
        }
        else if(MymastercardBtn.checked){
            resutl2.textContent="You are paying with MasterCard";
        }
        else{
            resutl2.textContent="You must select a payment type";
        }
    }
    else{
        resutl2.textContent="";
        result1.textContent="You are Not subscribed";
    }
});

//Added the 12th part of the video-->





// Ternary Operator = a shortcut to if{} and else statements 
//                    helps to assign a varible based on a condition
//                    condition ? codeIfTrue : codeIfFalse ;

// let age = 21;
// let message = age >=18 ? "You're an adult" : "You're a minor";

// console.log(message);

// let time = 16;
// let greeting = time < 12 ? "You are early" : "You are late";

// console.log(greeting);

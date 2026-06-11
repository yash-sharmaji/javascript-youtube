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





//Added the 13th part of the video-->



let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thrusday");
        break;

    default:
        console.log("Din does not exist");
        break;
}


//Added the 14th part of the video --->





// string methods - allow you to mmanipulate and work with text (Strings)

let userName = "Bro code    ";
console.log(userName);

// .character
console.log(userName.charAt(0));

// .length 
console.log(userName.length);

//.trim()
console.log(userName.trim());
console.log(userName.length);
// even after trim , the length does not change thats because it is a separate variable

// To check the first character of the userName 
let result = userName.startsWith("B"); //returns a boolean
console.log(result);

// Above similar for the endswith()

//.includes(" ")
let result2  = userName.includes(" "); //returns a boolean

if(result2){
    console.log("Your username can't include ' '");
}
else{
    console.log(userName);
}

// .replaceAll(" " ," ");

let phoneNumber = "123-456-6789";

phoneNumber=phoneNumber.replaceAll("-","");
console.log(phoneNumber);

// .padStart(20,"0")
// This pads the number or string with a given character till the string is of 20 length
//  There is similarly padEnd
phoneNumber=phoneNumber.padStart(20,"0");

console.log(phoneNumber);




// Added the 15th part of the video --->

//string slicing = create a substring 
//                 from a portion of another string 
//                 string.slice(startindex,endindex)

const fullName = "Bro Code";

let firstName = fullName.slice(0 , 3); //outputs Bro as ending is exclusive
// More dynamically , it can be done by this - 

    let firstName2 = fullName.slice(0,fullName.indexOf(" "));

    console.log(firstName2);


// Negative index allows you start from the back like -
// let secondendChar = fullName.slice(-2);

// let endChar = fullName.slice(-1);
// console.log(secondendChar);  //outputs de
// console.log(endChar);        // outputs e
// console.log(firstName);

// if you only list the start index then all the indexes till end will get appeared there



// <---- IMPORTANTTTTT ---->
// Added the 16th part of the video --->




// Method Chaining - calling one method after another  
//                   in one continuous line of code 


// ---------- NO METHOD CHAINING --------


// e.g. we have to make a username thing with first character uppercase and other to lowercases

// let username = window.prompt("Enter your username: ");
// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);


// // ---------- METHOD CHAINING ---------- 
// // let username2 = window.prompt("Enter your username: ");


// username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();
// console.log(username2);





// Added the 17th part of the video --->
// The part actually contains only brief about the logical operators only


//Added the 18th part of the video --->
// Equality Operator -->
    // = assignment operator
    // == comparison operator
    // === strict equaltiy operator (compare if values & datatypes are equal)
    // != inequality operator
    // !== strict inequality operator 
//

const PI = 3.14 ;

if(PI == "3.14" ){
    console.log("That is PI");
}
else{
    console.log("That is not PI");   
}

// The above tells true as Number and String have not been compared
// However ,using === will give false

// While and for loop ho jayenge dont worry 🥱

let loggedin =false;
let username;
let password;
    username = window.prompt("Enter your username");
    password = window.prompt("Enter you password");
while(!loggedin){
    if(username == "Myusername" && password=="Mypassword"){
        loggedin = true;
        console.log("You are logged in");
    }
    else{
        console.log("Invalid Credentials! please try again");
        break;
    }
}
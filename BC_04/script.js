// object = a collection of related properties and/or methods
//          can represent the real world objects (people,products,places)
//          object = {key:value,
//                      function()}

const person1 = {
    firstName: "Spongebob",
    lastName : "Sqaurepants",
    favfood : "Kichdi",
    age : 30,
    isEmployed : true,
    sayHello: function(){
        console.log(`Hi ! I am ${this.firstName}`);
    },
    eat: function(){
        console.log(`My fav food is ${this.favfood}`);
    },
}

console.log(person1.firstName);
console.log(person1.lastName);

// objects can also have dedicated functions , known as methods

const person2 = {
    firstName : "Patrick",
    lastName : "Squarepants",
    age : 50,
    favfood : "pizza",
    isEmployed : false,
    sayHello : function(){
        console.log("Hi ! I am patrick");
    },
    eat : ()=>{console.log(`${this.name} is eating ${this.favfood}`)}
}
person2.sayHello();



// Added the 38th part of the video --->


//this - is a reference to the object where "This" is used
//       (the object depends on the immediate context)
//        person.name = this.name


// const person1 = {
//     firstName: "Spongebob",
//     lastName : "Sqaurepants",
//     age : 30,
//     isEmployed : true,
// }


person1.sayHello();
person1.eat();

// In a browser's global execution context, this refers to the window object (unless you're in an ES module). Therefore, 
// console.log(this) logs the window object, which contains many built-in properties and methods.


// The this keyword does not works with Arrow function , remember this very well ->

// The this keyword will start pointing towards the window object for example -
person2.eat(); // however the window bject does have a name property hence it is empty and the output is - 

// _ is eating undefined



// Added the 39th part of the video --->


// constructor = special method for defining the properties 
//               and methods of objects

function NewCar(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
};

let car1 = new NewCar("Chevorlet",20,2007,"brown");
console.log(car1);



//Added the 40th part of the video --->



// class = (ES6 feature) that provides a more structural and cleaner way to work with objects compared to 
//          traditional constructor functions 
//          ex. static keyword, encapsulation , inheritance 


// function Product(name , price){
//     //motherfucking constructors lol
// }

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price is ${this.price.toFixed(2)}`); //decimal
    }
}
const Product1 = new Product("Shirt" , 19.99);
Product1.displayProduct();



// Added the 40th part of video --->

//static = keyword that defines properties or methods that belong
//         to a class itself rather than the objects created
//         from that class (class own anything , not the objects)


class Mathutil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return 2*this.PI*radius;
    }
}
console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(2));
console.log(Mathutil.getCircumference(2));

class User {
    static totalcount =0;

    constructor(username){
        this.username = username;
        User.totalcount++;
    }
}

const user1 = new User("Spongebob");
const user2 =new User("Patrick");

console.log(User.totalcount);



// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent->child) 
//               helps with code reusability

class Animal {
    alive = true;
    
    constructor(name){
        this.name=name;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }

}
class Deer extends Animal {
}
class Rabbit extends Animal{ 
    //This has a preinitialized super keyword btw
}

const rabbit = new Rabbit("rabbit");

rabbit.alive = false;
rabbit.eat();




// Added the 43rd part of the video -->




// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
//          this = this object
//          super = the parent


class Vehical{
    constructor(name,engine){
        this.name=name;
        this.engine=engine;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Car extends Vehical{
    constructor(name,engine,runspeed){
        super(name,engine);
        this.runspeed=runspeed;
    }

    run(){
        console.log(`This ${this.name} runs `);
        super.move(this.runspeed);
    }
}

class Plane extends Vehical{
    constructor(name,engine,flyspeed){
        super(name,engine);
        this.flyspeed=flyspeed;
    }
}

// same name and engine property sent to the Vehical class as parent
// this allow us to deal with the code repeatitive ness


const car = new Car("Mcqueen","V8",100);

console.log(car.name);

car.run();

// super can be used to refer to a parent class method too




// Added the 44th video -->



//Getters and Setters in Javascript 

//Getters = special mmethod that makes a property readable
//Setters = special mthod that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
        
        //as a constructor exists then this line becomes set width(width);

    }

    // We are required to write these for the width thing

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("width must be a positive number");
        }
    }
    set height(newheight){
        if(newheight > 0){
            this._height = newheight; // this.height is not used because 'this' itself calls the setter method...
            //                             hence a rangerror pops , maximum call stack size exceeded
            //                             No setter is attached to _width
            //                             This doesnot mean private / It is for internal use onnly
            
        }
        else{
            console.error("height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
}

const rectangle = new Rectangle(3,4);
rectangle.width = 2;
rectangle.height=-100;
// We need to avoid this bull crap

console.log(rectangle.width);
console.log(rectangle.height);




// Added the 45th part of the video -->




// destructuring = extract values from arrays and objects ,
//                 then assign them to variables in a convinent way
//                 [] = to perofrm array destructuring 
//                 {} = to perform object destructuring 

//SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);


//SWAP THE VALUE OF TWO ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];

[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);

//ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors1 = ["red","green" ,"blue","white"];

const [firstcolor,secondcolor,thirdcolor,...extracolors]=colors;1

console.log(firstcolor);



// EXTRACT VALUES FROM OBJECTS



// we use the person1 and person2 objects that were created above

const {firstName,lastName,age,job="Unemployed" /*defualt thing */} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);



// DESTRUCTURING IN FUNCTION PARAMETERS


function displayPerson({firstName,lastName,age,job="Unemployed"}){
    console.log(`Name : ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
displayPerson(person1);
const person = {
    fullname : "spongebob sqaurepants",
    age : 30, 
    hobbies : ["karate", "jellyfishing","cooking"],
    address : {
        street : "221B Baker Street",
        city : "London",
        country : "India",
    },
    isStudent : false,
}

// we can output the address in format using this -->
for(const property in person.address){
    console.log(person.address[property]);
}

//  How to make a constructor for a nested object --- >

class Personn{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country = country;
    }
}
//Address object is the child object of the Person object initialised in Personn object

// const person11 = new Personn("Yash",18, "124 Conch St.",
//                                         "Bikini Bottom",
//                                         "Int. waters");



// Added the 47th part of the video --->



// Array of Objects --->     


const fruit =[
    {name:"apple",color:"red",calories: 95},
    {name:"pineapple",color:"blue",calories: 100},
    {name:"jam",color:"green",calories: 80},
];

// map-->

const fruitname = fruit.map(item=> item.name);
const fruitcolor = fruit.map(item => item.color);

console.log(fruitname);

// filter()-->

const yellowFruits = fruit.filter(fruit => fruit.color ==="yellow");
const lowcalFruits = fruit.filter(fruit => fruit.calories < 90);

console.log(lowcalFruits);

// reduce()-->

const maxfruit = fruit.reduce((accumulator,element)=> element.calories>accumulator.calories ?  element : accumulator);
console.log(maxfruit);


//Added the 48th part of the video --->


// sort() = method used to sort elements of an array in place
//          sorts elements as string in lecicographical order
//          lexicograpghic = (alphabets + numbers + symbols) as strings

let newnumbers = [1,10,9,3,5,2,7];

// if you write only this - sort() then->
// in javascript , the numbers are converted to strings and compared likewise , therefore -> 1,10,9,7,5,3,2 aayega

newnumbers.sort((a,b)=>a-b);
console.log(newnumbers);

/* this rule is already built in in javascript --->
    If comparison result < 0
    keep a before b

    If comparison result > 0
        put b before a

    If comparison result == 0
        keep them equal */

const fruitss =[
    {name:"apple",color:"red",calories: 95},
    {name:"pineapple",color:"blue",calories: 100},
    {name:"jam",color:"green",calories: 80},
];

fruitss.sort((a,b)=>a.calories - b.calories);
fruitss.sort((a,b)=> a.name.localeCompare(b.name)); //ulta karne ke liye b bahar

console.log(fruitss);


// Shuffle an array ->

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];

// cards.sort(()=> Math.random()-0.5); // this is an highlt inefficient method 


// Fisher-Yates Algorithm --->

function shuffle(array){
    for(let i=array.length-1 ; i > 0; i--){

        const random = Math.floor(Math.random()*(i+1));
        [array[i],array[random]] = [array[random],array[i]];

    }
}
shuffle(cards);
console.log(cards);


//Added the 50th part of the video --->



// Date Objects = Objects that contain values that represent dates and times . 
//                These date objects can be changed and formatted



const date = new Date ();
// date.setDate(1);
// Date (year, month, day, hour, minute, second, msecond)
const date1 = new Date(2024,0,1,2,3,4,5);

const date2 = new Date("2024-01-02T12:00:00Z")
console.log(date);

const date3 = new Date(0); 
// this will give the 1970 decemeber something time ,the 0 signifies the time from that great day

console.log(date3);

const date4 = new Date();

const year = date4.getFullYear();
const month = date4.getMonth();
const hour = date.getHours();
const minutes = date.getMinutes();

console.log(year);
console.log(month); 

// it is giving 5 in june cause it is military timing

// comparisons can be done on the dates

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2023-12-30");

// if(date2>date1){
//     console.log("Happy new year!");
// }



// added tthe 51th part of the video --->

// closure =  A function defined inside of another function and 
//              the inner function has access to the variables 
//              and scope of the outer function . 
//              Allow for private variables and state maintenace
//              Used frequently in 35 frameworks: React , vue ,angular


function outer(){

    let message = "Hello";
    function inner(){   
        console.log(message);
    }

    inner();
}

outer();


// state maintenance


// function incremenet(){
//     let count = 0;
//     count++;
//     operation();
//     console.log(`Count increased to ${count}`);
// }

// incremenet();
// incremenet();
// incremenet();

// due to reaignment of the count , the increment doesnt get past 1 

// let count = 0;

// count = 10000;

// function increment(){
//     count++;
//     console.log(`Count increased to ${count}`);
// }

// increment();
// increment();
// increment();

// but now no security for the count variable as it can be reassigned easily

function createcounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment,getCount};
}

const counter = createcounter(); // javasccript me closure ki wajah se increment apne parent variable ko yaad rakkhta hai

counter.increment();
counter.increment();

console.log(counter.getCount());


function createscore(){
    let score =0; 
    function increasescore(points){
        score+=points;
        console.log(`Added score is ${points}`)
    }
    function decreasescore(points){
        score-=points;
        console.log(`Decreased score is ${points}`)
    }
    function showpoints(){
        return score;
    }
    return {increasescore,decreasescore,showpoints};
}

const game = createscore();

game.increasescore(5);
game.decreasescore(6);
console.log(`The points scored in the game is ${game.showpoints()}`);

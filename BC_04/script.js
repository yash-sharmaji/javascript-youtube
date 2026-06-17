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

